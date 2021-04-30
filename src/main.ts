import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const option = new DocumentBuilder()
    .setTitle('nest-orm-playground')
    .setDescription(
      'This API created for practice and test function before using in real project.',
    )
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, option);

  SwaggerModule.setup(`swagger`, app, document);

  await app.listen(3000);
}
bootstrap();
