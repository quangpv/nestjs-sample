import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  constructor(email: string, passwordHash: string) {
    this.email = email;
    this.passwordHash = passwordHash;
  }

  @PrimaryColumn()
  email: string;
  @Column()
  passwordHash: string;
}
