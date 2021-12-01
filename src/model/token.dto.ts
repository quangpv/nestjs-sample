export class TokenDto {
  expiredIn: number;
  accessToken: string;

  constructor(expiresIn: number, accessToken: string) {
    this.expiredIn = expiresIn;
    this.accessToken = accessToken;
  }
}
