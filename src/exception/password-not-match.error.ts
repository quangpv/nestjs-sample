import { NotAcceptableException } from '@nestjs/common';

export class PasswordNotMatchError extends NotAcceptableException {
  constructor() {
    super('New password not match with confirm');
  }
}
