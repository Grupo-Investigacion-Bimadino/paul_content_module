import { Module } from '@nestjs/common';
import { ObservationsController } from './observations.controller';
import { ObservationsService } from './observations.service';

@Module({
  controllers: [ObservationsController],
  providers: [ObservationsService]
})
export class ObservationsModule {}
