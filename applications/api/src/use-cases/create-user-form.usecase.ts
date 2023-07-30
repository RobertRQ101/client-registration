import { Injectable } from '@nestjs/common';
import { UserInformation } from 'src/dtos/UserForm';
import { UserFormRepository } from 'src/repositories/user-form.repository';

@Injectable()
export class CreateUserFormUsecase {
  constructor(private readonly userFormRepository: UserFormRepository) {}
  async handle(userInfo: UserInformation) {
    return await this.userFormRepository.create({
      name: userInfo.name,
      cpf: userInfo.cpf,
      email: userInfo.email,
      favorite_color: userInfo.favorite_color,
      observation: userInfo.observation,
    });
  }
}
