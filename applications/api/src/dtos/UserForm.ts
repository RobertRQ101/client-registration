import { FavoriteColorEnum } from '@prisma/client';

export class UserInformation {
  name: string;
  cpf: string;
  email: string;
  favorite_color: FavoriteColorEnum;
  observation?: string;
}
