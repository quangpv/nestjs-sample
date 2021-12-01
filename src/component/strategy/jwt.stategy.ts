import { Injectable } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { environment } from '../../../environment/environment';
import { UserRepository } from '../../repository/user.repository';
import { TokenUserPayload } from '../../model/token-user.payload';
import { Guard } from '../../constant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(readonly userRepo: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: environment.SECRET_KEY,
    });
  }

  async validate(payload: TokenUserPayload) {
    await this.userRepo.requireById(payload.email);
    return payload;
  }
}

@Injectable()
export class JwtGuard extends AuthGuard(Guard.JWT) {}
