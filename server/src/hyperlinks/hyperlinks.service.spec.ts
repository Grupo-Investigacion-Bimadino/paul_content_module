import { Test, TestingModule } from '@nestjs/testing';
import { HyperlinksService } from './hyperlinks.service';

describe('HyperlinksService', () => {
  let service: HyperlinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HyperlinksService],
    }).compile();

    service = module.get<HyperlinksService>(HyperlinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
