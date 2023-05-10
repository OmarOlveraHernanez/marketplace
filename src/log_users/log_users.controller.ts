import { Controller } from '@nestjs/common';
import { LogUsersService } from './log_users.service';

@Controller('log-users')
export class LogUsersController {
  constructor(private readonly logUsersService: LogUsersService) {}
}
