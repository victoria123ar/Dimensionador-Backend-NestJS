import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SessionsModule } from './sessions/sessions.module';
import { ComponentsModule } from './components/components.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, SessionsModule, ComponentsModule, AuthModule],
})
export class AppModule {}
