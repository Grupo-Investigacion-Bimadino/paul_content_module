import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


import { Multimedia } from './schemas/multimedia.schema';

@Injectable()
export class MultimediaService {
    constructor(
        @InjectModel(Multimedia.name) private multimediatModel: Model<Multimedia>,
    ) { }

    async findOne(id: number) {
        let multimedia = await this.multimediatModel.findById(id);
        return multimedia;
    }

    async findAll() {
        let multimedia = await this.multimediatModel.find();
        return multimedia;
    }

    async create(createMultimediaDto) {
        let multimedia = await this.multimediatModel.create(createMultimediaDto);
        return multimedia;
    }

    update(id, updateMultimedia) {
        let multimedia = this.multimediatModel.findByIdAndUpdate(id, updateMultimedia, { new: true });
        return multimedia;
    }

    delete(id) {
        let multimedia = this.multimediatModel.findByIdAndDelete(id);
        return multimedia;
    }
}
