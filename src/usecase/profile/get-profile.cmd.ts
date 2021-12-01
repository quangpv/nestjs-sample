import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository';
import { UserDto } from '../../model/user.dto';

@Injectable()
export class GetProfileCmd {
  constructor(private readonly userRepo: UserRepository) {}

  async invoke(email) {
    const user = await this.userRepo.requireById(email);
    return new UserDto(user);
  }
}
