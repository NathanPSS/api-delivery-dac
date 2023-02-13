
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
  );

  app.useGlobalPipes(new ValidationPipe())
  app.use(session({
    name: 'Session-ID',
    secret: 'dsasdadsadsadsadsadsa',
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 9999999,
      
    },
  }))
  await app.listen(3000);
}
bootstrap();
