import { Test, TestingModule } from '@nestjs/testing';
import {INestApplication, ValidationPipe} from '@nestjs/common';
import * as request from "supertest";
import { AppModule } from '../src/app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/api (GET) response status 200', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
  });
  it('/api/game (POST) response status 400 with no board passed', () => {
    return request(app.getHttpServer())
      .post('/game')
      .send({})
      .expect(400);
  });
  it('/api/game (POST) response status 400 with no board passed', () => {
    return request(app.getHttpServer())
      .post('/game')
      .send({board: []})
      .expect({
        "statusCode": 400,
        "message": [
          "board should not be empty"
        ],
        "error": "Bad Request"
      });
  });
  it('/api/game/tick (POST) response status 400 with id is a number', () => {
    return request(app.getHttpServer())
      .post('/game/tick')
      .send({
        "id": 1
      })
      .expect({
        "statusCode": 400,
        "message": [
          "id must be a string"
        ],
        "error": "Bad Request"
      });
  });
  it('/api/game/tick (POST) response status 400 with id should not be empty', () => {
    return request(app.getHttpServer())
      .post('/game/tick')
      .send({
        "id": ""
      })
      .expect({
        "statusCode": 400,
        "message": [
          "id should not be empty"
        ],
        "error": "Bad Request"
      });
  });
});
