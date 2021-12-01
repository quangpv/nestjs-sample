import { Injectable } from '@nestjs/common';
import { RegistryRequest } from '../../../model/request/registry.request';
import { TokenDto } from '../../../model/token.dto';
import { UserEntity } from '../../../model/entity/user.entity';
import { TokenFactory } from '../../../component/factory/token.factory';
import { HashFactory } from '../../../component/factory/hash.factory';
import { UserRepository } from '../../../repository/user.repository';
import { Role } from '../../../model/type/user-role.type';

@Injectable()
export class SignupCmd {
  constructor(
    private userRepo: UserRepository,
    private tokenFactory: TokenFactory,
    private hashFactory: HashFactory,
  ) {}

  async invoke(request: RegistryRequest): Promise<TokenDto> {
    await this.userRepo.requireNullById(request.email);

    const entity = new UserEntity(
      request.email,
      this.hashFactory.create(request.password),
      Role.USER,
    );
    const newUser = await this.userRepo.create(entity);
    return this.tokenFactory.create(newUser);
  }
}
