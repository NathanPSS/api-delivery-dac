import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '../database/database.module';
import { userRepository } from './repository/user.repository';
import { DatabaseExeceptionsModule } from '../database/database-execeptions/database-execeptions.module';
import { HashModule } from '../hash/hash.module';
import { LocalUserGuardService } from './auth-user/guards/local-user-guard.service';

import { AuthModule } from '../auth/auth.module';
import { AppJwtModule } from '../auth/app-jwt/app-jwt.module';
import { AuthUserModule } from './auth-user/auth-user.module';



@Module({
  imports: [DatabaseModule,DatabaseExeceptionsModule,HashModule,AuthModule,AppJwtModule,AuthUserModule],
  controllers: [UserController],
  providers: [UserService,...userRepository,],
  exports: [...userRepository]
})
export class UserModule {}
