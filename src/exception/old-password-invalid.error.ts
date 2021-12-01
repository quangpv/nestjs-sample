import { NotAcceptableException } from '@nestjs/common';

export class OldPasswordInvalid extends NotAcceptableException {
  constructor() {
    super('Old password invalid');
  }
}
