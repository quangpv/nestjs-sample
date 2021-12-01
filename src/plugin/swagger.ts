import { IPlugin } from '../core/IPlugin';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export class SwaggerPlugin implements IPlugin {
  install(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Nestjs example')
      .setDescription('The API description')
      .setVersion('1.0')
      .addTag('auth')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
