import { NotAcceptableException } from '@nestjs/common';

export class EmailExistsError extends NotAcceptableException {
  constructor(email: string) {
    super(`Email ${email} exists`);
  }
}
