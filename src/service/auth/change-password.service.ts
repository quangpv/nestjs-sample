import { ChangePasswordRequest } from '../../model/request/change-password.request';
import { TokenDto } from '../../model/token.dto';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository';
import { HashFactory } from '../../component/factory/hash.factory';
import { OldPasswordInvalid } from '../../exception/old-password-invalid.error';
import { PasswordNotMatchError } from '../../exception/password-not-match.error';
import { TokenFactory } from '../../component/factory/token.factory';

@Injectable()
export class ChangePasswordService {
  constructor(
    readonly userRepo: UserRepository,
    readonly hashFactory: HashFactory,
    readonly tokenFactory: TokenFactory,
  ) {}

  async invoke(request: ChangePasswordRequest): Promise<TokenDto> {
    const user = await this.userRepo.requireById(request.email);
    if (this.hashFactory.create(request.oldPassword) != user.passwordHash) {
      throw new OldPasswordInvalid();
    }
    if (request.newPassword != request.confirmNewPassword) {
      throw new PasswordNotMatchError();
    }
    user.passwordHash = this.hashFactory.create(request.newPassword);
    const updatedUser = await this.userRepo.save(user);
    return this.tokenFactory.create(updatedUser);
  }
}
