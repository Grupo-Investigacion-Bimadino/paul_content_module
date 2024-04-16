import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
    timestamps: true
})
export class Categories extends Document {
    @Prop()
    _id: string;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop({type: [String]})  // Define tags como un array de strings 
    tags: string[];
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);


