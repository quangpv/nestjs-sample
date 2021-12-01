import { Controller, Get, Param } from '@nestjs/common';
import { GetUserService } from '../service/user/get-user.service';
import { GetUsersService } from '../service/user/get-users.service';

@Controller('users')
export class UserController {
  constructor(
    readonly getUserService: GetUserService,
    readonly getUsersService: GetUsersService,
  ) {}

  @Get(':email')
  getUserById(@Param('email') email: string) {
    return this.getUserService.invoke(email);
  }

  @Get()
  getUsers() {
    return this.getUsersService.invoke();
  }
}
