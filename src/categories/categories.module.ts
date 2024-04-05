import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesSchema } from '../categories/schemas/categorie.schema';
import { Categories } from '../categories/schemas/categorie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Categories.name, schema: CategoriesSchema }]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
