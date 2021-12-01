import { NotAcceptableException } from '@nestjs/common';
import { UserEntity } from '../model/entity/user.entity';

export class EmailExistsError extends NotAcceptableException {
  constructor(email: string) {
    super(`Email ${email} exists`);
  }
}
