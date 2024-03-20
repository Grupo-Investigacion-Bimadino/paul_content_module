import { ObservationsService } from './observations.service';
export declare class ObservationsController {
    private readonly observationService;
    constructor(observationService: ObservationsService);
    findOne(id: number): string;
    findAll(): string;
    create(createObservationsDto: any): string;
    update(id: number, updateObservations: any): string;
    delete(id: number): string;
}
