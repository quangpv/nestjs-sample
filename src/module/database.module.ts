import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../model/entity/user.entity';
import { environment } from '../../environment/environment';
@Module({})
export class DatabaseModule {
  static register(dirname: string): DynamicModule[] {
    return [
      TypeOrmModule.forRoot({
        type: environment.DATABASE_TYPE,
        database: environment.DATABASE_NAME,
        entities: [dirname + '/model/entity/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([UserEntity]),
    ];
  }
}
