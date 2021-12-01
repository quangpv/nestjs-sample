import { UserEntity } from './entity/user.entity';

export class UserDto {
  private email: string;
  constructor(user: UserEntity) {
    this.email = user.email;
  }
}
