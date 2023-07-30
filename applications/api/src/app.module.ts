import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUserFormUsecase } from './use-cases/create-user-form.usecase';
import { UserFormRepository } from './repositories/user-form.repository';
import { PrismaClient } from '@prisma/client';
import { VerifyFormUsecase } from './use-cases/verify-form.usecase';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    CreateUserFormUsecase,
    UserFormRepository,
    PrismaClient,
    VerifyFormUsecase,
  ],
})
export class AppModule {}
