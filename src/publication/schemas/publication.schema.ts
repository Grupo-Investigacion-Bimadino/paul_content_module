import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
    timestamps: true
})
export class Publication extends Document {
    @Prop()
    _id: string;

    @Prop()
    publish_start_date: Date;

    @Prop([String])  // Define associated_content como un array de strings
    associated_content: object;
}

export const PublicationSchema = SchemaFactory.createForClass(Publication);

