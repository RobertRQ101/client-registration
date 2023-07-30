import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserFormUsecase } from './use-cases/create-user-form.usecase';
import { UserInformation } from './dtos/UserForm';
import { VerifyFormUsecase } from './use-cases/verify-form.usecase';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly createUserForm: CreateUserFormUsecase,
    private readonly verifyUserForm: VerifyFormUsecase,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/create-user-form')
  async sendForm(@Body() data: UserInformation) {
    const verify = await this.verifyUserForm.handle(data.email);
    if (verify) {
      throw new HttpException('User Exist in base', HttpStatus.UNAUTHORIZED);
    }
    const createUserForm = await this.createUserForm.handle(data);
    return createUserForm;
  }
}
