import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
    timestamps: true
})
export class Observations extends Document {
    @Prop()
    _id: string;

    @Prop()
    review_date: Date;

    @Prop()
    review_author: string;

    @Prop()
    observation: string;

    @Prop()
    observation_type: string;
}

export const ObservationsSchema = SchemaFactory.createForClass(Observations);

