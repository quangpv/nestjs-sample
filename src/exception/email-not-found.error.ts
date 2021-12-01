import { HttpException, NotFoundException } from '@nestjs/common';

export class EmailNotFoundError extends NotFoundException {
  constructor(email: string) {
    super(`Email ${email} not found`);
  }
}
