import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class VerifyRegisterByEmailCmd {
  invoke() {
    throw new NotImplementedException();
  }
}
