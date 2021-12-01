import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Role } from '../type/user-role.type';

@Entity()
export class UserEntity {
  constructor(email: string, passwordHash: string, role: Role = Role.USER) {
    this.email = email;
    this.passwordHash = passwordHash;
    this.role = role.toString();
  }

  @PrimaryColumn()
  email: string;
  @Column()
  passwordHash: string;

  @Column({
    type: 'varchar',
    length: 10,
    default: Role.PARTNER.toString(),
  })
  role?: string;
}
