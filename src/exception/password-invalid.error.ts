import { NotAcceptableException } from '@nestjs/common';

export class PasswordInvalidError extends NotAcceptableException {
  constructor() {
    super('Password invalid');
  }
}
