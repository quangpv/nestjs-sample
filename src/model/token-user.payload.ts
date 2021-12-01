import { Role } from './type/user-role.type';

export class TokenUserPayload {
  constructor(
    readonly email: string,
    readonly role: Role,
    readonly expiresIn: number,
  ) {}
}
