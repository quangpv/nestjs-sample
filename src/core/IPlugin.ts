import { INestApplication } from '@nestjs/common';

export interface IPlugin {
  install(app: INestApplication);
}
