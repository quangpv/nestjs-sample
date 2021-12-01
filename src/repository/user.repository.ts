import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../model/entity/user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { EmailExistsError } from '../exception/email-exists.error';
import { EmailNotFoundError } from '../exception/email-not-found.error';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly dao: Repository<UserEntity>,
  ) {}

  async findById(email: string) {
    return this.dao.findOne({
      where: { email: email },
    });
  }

  async create(entity: UserEntity): Promise<UserEntity> {
    return this.dao.save(entity);
  }

  async save(entity: UserEntity) {
    return this.dao.save(entity);
  }

  async requireNullById(email: string) {
    const user = await this.findById(email);
    if (user != null) throw new EmailExistsError(email);
  }

  async requireById(email: string): Promise<UserEntity> {
    const user = await this.findById(email);
    if (user == null) throw new EmailNotFoundError(email);
    return user;
  }

  async findAll(): Promise<UserEntity[]> {
    return this.dao.find();
  }
}
