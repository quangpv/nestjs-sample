import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { TokenUserPayload } from '../model/token-user.payload';
import { GetProfileCmd } from '../usecase/profile/get-profile.cmd';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { Guard } from '../constant';
import { JwtGuard } from '../component/strategy/jwt.stategy';
import { UserDto } from '../model/user.dto';
import { AuthUser } from '../shared/request/auth-user';

@ApiBearerAuth()
@ApiSecurity(Guard.JWT)
@ApiTags('profile')
@UseGuards(JwtGuard)
@Controller('profile')
export class ProfileController {
  constructor(readonly getProfileCmd: GetProfileCmd) {}

  @ApiOkResponse({ type: UserDto })
  @Get()
  get(@AuthUser() user: TokenUserPayload) {
    return this.getProfileCmd.invoke(user.email);
  }
}
