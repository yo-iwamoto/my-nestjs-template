import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Test } from '@nestjs/testing';
import type { TestingModule } from '@nestjs/testing';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
