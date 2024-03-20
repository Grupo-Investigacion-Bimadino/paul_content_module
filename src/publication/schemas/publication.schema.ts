import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
    timestamps: true
})
export class Publicacion extends Document {
    @Prop()
    _id: string;

    @Prop()
    publish_start_date: Date;

    @Prop()
    associated_content: object;
}

export const PublicacionSchema = SchemaFactory.createForClass(Publicacion);

