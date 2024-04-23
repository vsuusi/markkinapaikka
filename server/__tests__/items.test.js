import {
  test, describe, expect, beforeAll,
} from '@jest/globals';
import request, { supertest } from 'supertest';
import app from '../app';
import pool from '../db/pool';

let testId;
const loggedInUser = {
  id: '',
  email: '',
  token: '',
};

beforeAll(async () => {
  pool.query('DELETE FROM users WHERE email=?', ['test.user@example.com']);

  const data = {
    name: 'Test User',
    email: 'test.user@example.com',
    password: 'testpass',
  };

  const response = await supertest(app)
    .post('/api/users/signup')
    .set('Accept', 'application/json')
    .send(data);
  loggedInUser.userId = response.body.userId;
  loggedInUser.email = response.body.email;
  loggedInUser.token = response.body.token;
});

describe('GET operations', () => {
  test('all items should return 200', (done) => {
    request(app)
      .get('/api/items')
      .expect(200)
      .end(done);
  });
  test('item by id should return 200', (done) => {
    request(app)
      .get('/api/items/1')
      .expect(200)
      .end(done);
  });
  test('should return items in sorted by price', (done) => {
    request(app)
      .get('/api/items')
      .query({ sort: 'price' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual(expect.arrayContaining([
          expect.objectContaining({ price: expect.any(Number) }),
        ]));
        const sortedPrices = res.body.map((item) => item.price);
        expect(sortedPrices)
          .toEqual(expect.arrayContaining(
            sortedPrices.slice().sort((a, b) => a - b),
          ));

        done();
      });
  });
});
// POST OPERATIONS
// valid item
describe('POST operations', () => {
  test('valid creation of item', (done) => {
    const newItem = {
      user_id: 1,
      title: 'TestiTavara',
      description: 'Tämä tavara lisättiin testeissä',
      price: 49.90,
      category: 'Autot',
      location: 'Pirkanmaa',
      image_url: 'hyväurlosoite.fi.comxd',
    };
    request(app)
      .post('/api/items')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${loggedInUser.token}`)
      .set('Content', 'application/json')
      .send(newItem)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toHaveProperty('id');
        expect(res.body.title).toBe(newItem.title);
        expect(res.body.description).toBe(newItem.description);
        expect(res.body.price).toBe(newItem.price);
        expect(res.body.category).toBe(newItem.category);
        expect(res.body.location).toBe(newItem.location);
        expect(res.body.image_url).toBe(newItem.image_url);

        testId = res.body.id;

        done();
      });
  });
});
// invalid item (handled in mvc?)

// only authorized user can create item

// PUT OPERATIONS
describe('PUT operations', () => {
  test('valid item update', (done) => {
    const updatedData = {
      user_id: 1,
      title: 'PäivitettyTavara',
      description: 'Tämä tavara päivitettiin testeissä',
      price: 29.90,
      category: 'Autot',
      location: 'Oulu',
      image_url: 'hyväurlosoite.fi.comxd',
    };
    request(app)
      .put(`/api/items/${testId}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${loggedInUser.token}`)
      .set('Content', 'application/json')
      .send(updatedData)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.title).toBe(updatedData.title);
        expect(res.body.description).toBe(updatedData.description);
        expect(res.body.price).toBe(updatedData.price);
        expect(res.body.category).toBe(updatedData.category);
        expect(res.body.location).toBe(updatedData.location);
        expect(res.body.image_url).toBe(updatedData.image_url);

        done();
      });
  });
});

// invalid update of item

// only authorized user can update item, and only own item

// delete item ( delete item that was posted )
describe('DELETE operations', () => {
  test('valid deletion of item ( deletes item that was posted on test )', (done) => {
    request(app)
      .delete(`/api/items/${testId}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${loggedInUser.token}`)
      .set('Content', 'application/json')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  test('should return 404 for item not found', (done) => {
    request(app)
      .delete('/api/items/3')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${loggedInUser.token}`)
      .set('Content', 'application/json')
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
// only authroized user can delete, and only his own item
