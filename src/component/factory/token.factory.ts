import { TokenDto } from '../../model/token.dto';
import { UserEntity } from '../../model/entity/user.entity';
import { Injectable } from '@nestjs/common';
import { TokenUserPayload } from '../../model/token-user.payload';
import { JwtService } from '@nestjs/jwt';
import { environment } from '../../../environment/environment';

@Injectable()
export class TokenFactory {
  constructor(private jwtService: JwtService) {}

  public async create(signedUser: UserEntity) {
    const expiresIn = environment.JWT_EXPIRATION;
    const user = new TokenUserPayload(signedUser);
    const userPOJO = JSON.parse(JSON.stringify(user));
    const accessToken = this.jwtService.sign(userPOJO, {
      secret: environment.SECRET_KEY,
      expiresIn: expiresIn,
    });
    return new TokenDto(expiresIn, accessToken);
  }
}
