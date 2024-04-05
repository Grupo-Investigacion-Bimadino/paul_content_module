import { Module } from '@nestjs/common';
import { RevisionsController } from './revisions.controller';
import { RevisionsService } from './revisions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RevisionsSchema } from '../revisions/schemas/revision.schema';
import { Revisions } from '../revisions/schemas/revision.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Revisions.name, schema: RevisionsSchema }]),
  ],
  controllers: [RevisionsController],
  providers: [RevisionsService]
})
export class RevisionsModule {}
