import { Module } from '@nestjs/common';
import { PreviewController } from './preview.controller';
import { PreviewService } from './preview.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PreviewSchema } from '../preview/schemas/preview.schema';
import { Preview } from '../preview/schemas/preview.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Preview.name, schema: PreviewSchema }]),
  ],
  controllers: [PreviewController],
  providers: [PreviewService]
})
export class PreviewModule {}
