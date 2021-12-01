import { Injectable } from '@nestjs/common';
import { LoginRequest } from '../../model/request/login.request';
import { TokenFactory } from '../../component/factory/token.factory';
import { HashFactory } from '../../component/factory/hash.factory';
import { PasswordInvalidError } from '../../exception/password-invalid.error';
import { UserRepository } from '../../repository/user.repository';

@Injectable()
export class LoginCmd {
  constructor(
    private readonly tokenFactory: TokenFactory,
    private readonly hashFactory: HashFactory,
    private readonly userRepository: UserRepository,
  ) {}

  async invoke(request: LoginRequest) {
    const user = await this.userRepository.requireById(request.email);
    const passwordHash = this.hashFactory.create(request.password);
    if (user.passwordHash != passwordHash) throw new PasswordInvalidError();

    return await this.tokenFactory.create(user);
  }
}
