import { Test, TestingModule } from '@nestjs/testing';
import { LogUsersController } from './log_users.controller';
import { LogUsersService } from './log_users.service';

describe('LogUsersController', () => {
  let controller: LogUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogUsersController],
      providers: [LogUsersService],
    }).compile();

    controller = module.get<LogUsersController>(LogUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
