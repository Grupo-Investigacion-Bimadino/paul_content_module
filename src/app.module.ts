import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentsModule } from './contents/contents.module';
import { MultimediaModule } from './multimedia/multimedia.module';
import { HyperlinksModule } from './hyperlinks/hyperlinks.module';
import { RevisionsModule } from './revisions/revisions.module';
import { ObservationsModule } from './observations/observations.module';
import { CategoriesModule } from './categories/categories.module';
import { CommentsModule } from './comments/comments.module';
import { PreviewModule } from './preview/preview.module';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://jperezargel06:KsYvKa8viyzON4SZ@cluster0.h8kkarc.mongodb.net/?retryWrites=true&w=majority'), ContentsModule, MultimediaModule, HyperlinksModule, RevisionsModule, ObservationsModule, CategoriesModule, CommentsModule, PreviewModule, PublicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}