import { Module } from '@nestjs/common';
import { ObservationsController } from './observations.controller';
import { ObservationsService } from './observations.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ObservationsSchema } from '../observations/schemas/observations.schema';
import { Observations } from '../observations/schemas/observations.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Observations.name, schema: ObservationsSchema }]),
  ],
  controllers: [ObservationsController],
  providers: [ObservationsService]
})
export class ObservationsModule {}
