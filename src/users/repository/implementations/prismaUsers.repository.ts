import { CreateUserDTO } from '../../dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

export class PrismaUsersRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(user: CreateUserDTO) {
    return await this.prisma.user.create({
      data: user,
    });
  }

  async findUserByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async findUserById(id: number) {
    return await this.prisma.user.findUnique({
        where: { id }
    });
}
}
