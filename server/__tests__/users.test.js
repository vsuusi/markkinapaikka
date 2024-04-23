import bcrypt from 'bcryptjs';
import {
  describe, expect, test, beforeEach, jest,
} from '@jest/globals';
import request from 'supertest';
import app from '../app'; // Adjust this path to where your Express app is initialized
import users from '../models/users.js';

// Mocking external modules
jest.mock('bcryptjs');
jest.mock('../models/users');

describe('Auth Routes', () => {
  describe('/signup', () => {
    beforeEach(() => {
      users.findByEmail.mockResolvedValue([]);
      users.create.mockResolvedValue(true);
      bcrypt.hash.mockResolvedValue('hashedPassword');
    });

    test('should sign up a new user and return a token', async () => {
      const response = await request(app)
        .post('/api/users/signup')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          password: 'password123',
        });

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('token');
    });

    test('should return a 422 status if user exists', async () => {
      users.findByEmail.mockResolvedValue([{ name: 'Test User', email: 'test@example.com' }]);

      const response = await request(app)
        .post('/api/users/signup')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          password: 'password123',
        });

      expect(response.statusCode).toBe(422);
    });
  });

  describe('/login', () => {
    beforeEach(() => {
      bcrypt.compare.mockResolvedValue(true);
      users.findByEmail.mockResolvedValue([{ id: 3, email: 'test@example.com', password_hash: 'hashedPassword' }]);
    });

    test('should login an existing user and return a token', async () => {
      const response = await request(app)
        .post('/api/users/login')
        .send({
          email: 'test@example.com',
          password: 'password123',
        });

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('token');
    });

    test('should return a 401 status if credentials are wrong', async () => {
      bcrypt.compare.mockResolvedValue(false); // Simulate wrong password

      const response = await request(app)
        .post('/api/users/login')
        .send({
          email: 'test@example.com',
          password: 'wrongpassword',
        });

      expect(response.statusCode).toBe(401);
    });
  });
});
