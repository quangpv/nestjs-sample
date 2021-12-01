import { Injectable } from '@nestjs/common';
import { UserDto } from '../../model/user.dto';
import { UserRepository } from '../../repository/user.repository';

@Injectable()
export class GetUserCmd {
  constructor(readonly userRepo: UserRepository) {}

  async invoke(email: string): Promise<UserDto> {
    const user = await this.userRepo.requireById(email);
    return new UserDto(user);
  }
}
