import { Body, Controller, Patch, Post } from '@nestjs/common';
import { LoginService } from '../service/auth/login.service';
import { SignupService } from '../service/auth/signup.service';
import { TokenDto } from '../model/token.dto';
import { RegistryRequest } from '../model/request/registry.request';
import { LoginRequest } from '../model/request/login.request';
import { ChangePasswordRequest } from '../model/request/change-password.request';
import { ChangePasswordService } from '../service/auth/change-password.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginService: LoginService,
    private readonly signupService: SignupService,
    private readonly changePasswordService: ChangePasswordService,
  ) {}

  @Post('login')
  async login(@Body() request: LoginRequest): Promise<TokenDto> {
    return await this.loginService.invoke(request);
  }

  @Post('registry')
  async registry(@Body() request: RegistryRequest): Promise<TokenDto> {
    return await this.signupService.invoke(request);
  }

  @Patch('change-password')
  async changePassword(@Body() request: ChangePasswordRequest) {
    return await this.changePasswordService.invoke(request);
  }
}
