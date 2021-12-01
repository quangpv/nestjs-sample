import { Injectable } from '@nestjs/common';

@Injectable()
export class HashFactory {
  create(password: string): string {
    return password;
  }
}
