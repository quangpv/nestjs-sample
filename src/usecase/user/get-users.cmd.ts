import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository';
import { UserDto } from '../../model/user.dto';

@Injectable()
export class GetUsersCmd {
  constructor(readonly userRepo: UserRepository) {}

  async invoke() {
    const users = await this.userRepo.findAll();
    return users.map((s) => new UserDto(s));
  }
}
