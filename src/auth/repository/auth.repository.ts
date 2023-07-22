import { AuthSigninDTO } from './../dto/auth-login-dto';
import { Session } from '@prisma/client';

export abstract class UsersRepository {
  abstract createSession(data: AuthSigninDTO): Promise<Session>;
}