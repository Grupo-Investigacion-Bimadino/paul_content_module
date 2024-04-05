import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentSchema } from '../contents/schemas/content.schema';
import { Contents } from '../contents/schemas/content.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contents.name, schema: ContentSchema }]),
  ],
  controllers: [ContentsController],
  providers: [ContentsService]
})
export class ContentsModule {}

