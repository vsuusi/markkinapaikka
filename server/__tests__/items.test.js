import request from 'supertest';
import app from '../app';

describe('GET items endpoint', () => {
  test('should return 200', (done) => {
    request(app)
      .get('/health')
      .expect(200)
      .end(done);
  });
});
