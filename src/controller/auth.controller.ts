import { Body, Controller, Patch, Post } from '@nestjs/common';
import { LoginCmd } from '../usecase/auth/login.cmd';
import { SignupCmd } from '../usecase/auth/signup/signup.cmd';
import { TokenDto } from '../model/token.dto';
import { RegistryRequest } from '../model/request/registry.request';
import { LoginRequest } from '../model/request/login.request';
import { ChangePasswordRequest } from '../model/request/change-password.request';
import { ChangePasswordCmd } from '../usecase/auth/change-password.cmd';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginCmd: LoginCmd,
    private readonly signupCmd: SignupCmd,
    private readonly changePasswordCmd: ChangePasswordCmd,
  ) {}

  @Post('login')
  async login(@Body() request: LoginRequest): Promise<TokenDto> {
    return await this.loginCmd.invoke(request);
  }

  @Post('registry')
  async registry(@Body() request: RegistryRequest): Promise<TokenDto> {
    return await this.signupCmd.invoke(request);
  }

  @Patch('change-password')
  async changePassword(@Body() request: ChangePasswordRequest) {
    return await this.changePasswordCmd.invoke(request);
  }
}
