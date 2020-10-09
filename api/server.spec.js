//supertest = http assertions library
//cross-env = npm module that lets us deal with OS inconsistencies and
//provides a uniform way of setting env variables across ALL OSes

//const dotenv = process.env.DB_ENV || 'developement';(in dbConfig.js) sets us up
// to use a separate db for testing in order to avoid polluting the development db
const request = require('supertest');
const server = require('./server.js');
const db = require('../database/dbConfig');
const { intersect } = require('../database/dbConfig');
const { expectCt } = require('helmet');
const testUser = { username: 'testing', password: 'testing' };

describe('server.js', () => {
    describe('GET request for weather', () => {
        it('should return a 400 when not logged in', async () => {
            const res = await request(server).get('/api/weather');
            expect(res.status).toBe(400);
        });
        it('should return json', async () => {
            const res = await request(server).get('/api/weather');
            expect(res.type).toBe('application/json');
        });
        describe('registering new user', () => {
            it('should return a 201 when adding new user', async () => {
                await db('users').truncate();
                const res = await request(server)
                    .post('/api/auth/register')
                    .send(testUser);
                expect(res.status).toBe(201);
            });
            it('should return a 500 with an invalid user', async () => {
                const res = await request(server)
                    .post('/api/auth/register')
                    .send({ user: 'test', pass: 'test' });
                expect(res.status).toBe(500);
            });
        })
    })
})