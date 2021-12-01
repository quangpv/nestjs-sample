import { MainModule } from './main.module';
import { BaseApplication } from './core/BaseApplication';
import { SwaggerPlugin } from './plugin/swagger';

class MyApplication extends BaseApplication {
  constructor(port = 3000) {
    super(port, MainModule, [SwaggerPlugin]);
  }
}

new MyApplication();
