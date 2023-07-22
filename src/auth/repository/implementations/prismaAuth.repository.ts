import { AuthSigninDTO } from './../../dto/auth-login-dto';
import { PrismaService } from 'src/prisma/prisma.service';

export class PrismaUsersRepository {
  constructor(private prisma: PrismaService) {}

  async createSession(session: AuthSigninDTO) {
    return await this.prisma.session.create({
      data: session,
    });
  }
}
