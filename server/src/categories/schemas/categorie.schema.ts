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

    @Prop()
    tags: object;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);


