import { UserEntity } from './entity/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Role, userRoleOf } from './type/user-role.type';

export class UserDto {
  @ApiProperty({ example: 'test@gmail.com' })
  readonly email: string;
  @ApiProperty()
  private role: Role;

  constructor(user: UserEntity) {
    this.email = user.email;
    this.role = userRoleOf(user.role);
  }
}
