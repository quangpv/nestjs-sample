import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { GetUserCmd } from '../usecase/user/get-user.cmd';
import { GetUsersCmd } from '../usecase/user/get-users.cmd';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { JwtGuard } from '../component/strategy/jwt.stategy';
import { Guard } from '../constant';
import { UserDto } from '../model/user.dto';
import { RolesGuard } from '../shared/role/role.guard';
import { Role } from '../model/type/user-role.type';
import { Roles } from '../shared/role/roles.decorator';

@ApiBearerAuth()
@ApiSecurity(Guard.JWT)
@ApiTags('Users')
@UseGuards(JwtGuard, RolesGuard)
@Controller('users')
export class UserController {
  constructor(
    readonly getUserCmd: GetUserCmd,
    readonly getUsersCmd: GetUsersCmd,
  ) {}

  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Get user by email' })
  @ApiOkResponse({ type: UserDto })
  @Get(':email')
  async getById(@Param('email') email: string) {
    return this.getUserCmd.invoke(email);
  }

  @ApiOperation({ summary: 'Get all users available' })
  @ApiOkResponse({ type: UserDto, isArray: true })
  @Get()
  async getAll() {
    return this.getUsersCmd.invoke();
  }
}
