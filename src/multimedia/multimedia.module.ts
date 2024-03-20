import { Module } from '@nestjs/common';
import { MultimediaController } from './multimedia.controller';
import { MultimediaService } from './multimedia.service';

@Module({
  controllers: [MultimediaController],
  providers: [MultimediaService]
})
export class MultimediaModule {}
