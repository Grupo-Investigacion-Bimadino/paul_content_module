import { Test, TestingModule } from '@nestjs/testing';
import { HyperlinksController } from './hyperlinks.controller';

describe('HyperlinksController', () => {
  let controller: HyperlinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HyperlinksController],
    }).compile();

    controller = module.get<HyperlinksController>(HyperlinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
