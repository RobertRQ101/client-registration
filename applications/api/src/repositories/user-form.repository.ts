import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma, UserForm } from '@prisma/client';

@Injectable()
export class UserFormRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: Prisma.UserFormUncheckedCreateInput): Promise<UserForm> {
    return await this.prisma.userForm.create({ data });
  }

  async verifyByEmail(email: string): Promise<UserForm> {
    return await this.prisma.userForm.findUnique({
      where: {
        email,
      },
    });
  }
}
