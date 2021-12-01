import { IPlugin } from '../core/IPlugin';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { Guard } from '../constant';

export class SwaggerPlugin implements IPlugin {
  install(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Nestjs example')
      .setDescription('The API description')
      .setVersion('1.0')
      .addTag('Swagger v1.0')
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        Guard.JWT,
      )
      .build();
    const document = SwaggerModule.createDocument(app, config, {
      deepScanRoutes: true,
    });
    SwaggerModule.setup('api', app, document);
  }
}
