import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
    timestamps: true
})
export class Multimedia extends Document {
    @Prop()
    _id: string;

    @Prop()
    file_name: string;

    @Prop()
    file_type: string;

    @Prop()
    file_size: number;

    @Prop()
    storage_url: string;

    @Prop()
    description: string;

    @Prop()
    upload_date: Date;
}

export const MultimediaSchema = SchemaFactory.createForClass(Multimedia);

