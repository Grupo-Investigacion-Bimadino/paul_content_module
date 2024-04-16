import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
    timestamps: true
})
export class Publication extends Document {
    _id: mongoose.Types.ObjectId;

    @Prop()
    publish_start_date: Date;

    @Prop({ type: [String] }) // Esto especifica que `associated_content` es un arreglo de strings.
    associated_content: string[];

    
}

export const PublicationSchema = SchemaFactory.createForClass(Publication);

