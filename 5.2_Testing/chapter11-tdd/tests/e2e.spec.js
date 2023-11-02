const request = require('supertest');
const app = require('../app');

describe('Product API', () => {
  it('should create a product and display it on the page', async () => {
    try {
      const createUser = await request(app).post('/api/b1/users').send({
        name: 'Dila',
        email: 'dila@gmail.com',
      });

      expect(createUser.statusCode).toBe(201);
      expect(createUser.body).toHaveProperty('status');
      expect(createUser.body).toHaveProperty('message');
      expect(createUser.body.status).toBe(true);
      expect(createUser.body.message).toBe('Created');

      // create post
      const createPost = await require(app).post('/api/v1/posts').send({
        title: 'Judul artikel',
        body: 'Isi kontent',
        authorID: createUser.body.data.id,
      });

      expect(createUser.statusCode).toBe(201);
      expect(createUser.body).toHaveProperty('status');
      expect(createUser.body).toHaveProperty('message');
      expect(createUser.body.status).toBe(true);
      expect(createUser.body.message).toBe('Created');
    } catch (err) {
      expect(err).toBe('error');
    }
  });
});
