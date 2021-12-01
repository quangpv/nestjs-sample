import { NestFactory } from '@nestjs/core';
import { INestApplication, Type } from '@nestjs/common';
import { IPlugin } from './IPlugin';

export class BaseApplication {
  private app: INestApplication;
  readonly port: number;
  readonly mainModule: any;
  readonly plugins: Type<IPlugin>[];

  constructor(port = 3000, mainModule: any, plugins: Type<IPlugin>[]) {
    this.port = port;
    this.mainModule = mainModule;
    this.plugins = plugins;
    this.onCreate()
      .then(() => {
        console.log(`Bootstrap completed, listen on port ${port}`);
      })
      .catch((e) => {
        throw e;
      });
  }
  protected async onCreate() {
    this.app = await NestFactory.create(this.mainModule);
    this.plugins.forEach((pluginType) => {
      new pluginType().install(this.app);
    });
    await this.app.listen(this.port);
  }
}
