import { Module } from '@nestjs/common';
import { LogUsersService } from './log_users.service';
import { LogUsersController } from './log_users.controller';

@Module({
  controllers: [LogUsersController],
  providers: [LogUsersService]
})
export class LogUsersModule {}
