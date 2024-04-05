import { Module } from '@nestjs/common';
import { PublicationController } from './publication.controller';
import { PublicationService } from './publication.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PublicationSchema } from '../publication/schemas/publication.schema';
import { Publication } from '../publication/schemas/publication.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Publication.name, schema: PublicationSchema }]),
  ],
  controllers: [PublicationController],
  providers: [PublicationService]
})
export class PublicationModule {}
