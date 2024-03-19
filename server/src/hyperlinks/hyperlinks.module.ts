import { Module } from '@nestjs/common';
import { HyperlinksController } from './hyperlinks.controller';
import { HyperlinksService } from './hyperlinks.service';

@Module({
  controllers: [HyperlinksController],
  providers: [HyperlinksService]
})
export class HyperlinksModule {}
