import { Module } from '@nestjs/common';
import { MultimediaController } from './multimedia.controller';
import { MultimediaService } from './multimedia.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MultimediaSchema } from './schemas/multimedia.schema';
import { Multimedia } from './schemas/multimedia.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Multimedia.name, schema: MultimediaSchema }]),
  ],
  controllers: [MultimediaController],
  providers: [MultimediaService]
})
export class MultimediaModule { }
