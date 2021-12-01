import { Module } from '@nestjs/common';
import { ScanLoaderModule } from 'nestjs-scanloader';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from './module/database.module';

@Module({
  imports: [
    ScanLoaderModule.register({
      name: 'test',
      basePath: __dirname,
      imports: [JwtModule.register({}), ...DatabaseModule.register(__dirname)],
      controllersPaths: ['/controller/**/*{.ts,.js}'],
      providersPaths: [
        '/usecase/**/*{.ts,.js}',
        '/component/**/*{.ts,.js}',
        '/repository/**/*{.ts,.js}',
      ],
    }),
  ],
})
export class MainModule {}
