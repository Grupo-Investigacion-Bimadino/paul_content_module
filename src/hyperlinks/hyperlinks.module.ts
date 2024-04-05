import { Module } from '@nestjs/common';
import { HyperlinksController } from './hyperlinks.controller';
import { HyperlinksService } from './hyperlinks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HyperlinksSchema } from '../hyperlinks/schemas/hyperlinks.schema';
import { Hyperlinks } from '../hyperlinks/schemas/hyperlinks.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hyperlinks.name, schema: HyperlinksSchema }]),
  ],
  controllers: [HyperlinksController],
  providers: [HyperlinksService]
})
export class HyperlinksModule {}
