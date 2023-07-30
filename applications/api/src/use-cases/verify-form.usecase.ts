import { Injectable } from '@nestjs/common';
import { UserFormRepository } from 'src/repositories/user-form.repository';

@Injectable()
export class VerifyFormUsecase {
  constructor(private readonly userFormRepository: UserFormRepository) {}
  async handle(email: string) {
    return await this.userFormRepository.verifyByEmail(email);
  }
}
