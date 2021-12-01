import { UserEntity } from './entity/user.entity';

export class TokenUserPayload {
  constructor(signedUser: UserEntity) {}
}
