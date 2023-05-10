import { Test, TestingModule } from '@nestjs/testing';
import { LogUsersService } from './log_users.service';

describe('LogUsersService', () => {
  let service: LogUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogUsersService],
    }).compile();

    service = module.get<LogUsersService>(LogUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
