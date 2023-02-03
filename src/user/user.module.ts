import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userRepository } from './repository/user.repository';


@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService,...userRepository],
})
export class UserModule {}
