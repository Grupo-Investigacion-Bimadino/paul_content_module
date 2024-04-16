import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
    timestamps: true
})
export class Categories extends Document {
    _id: mongoose.Types.ObjectId;

    @Prop()
    name: string;

    @Prop()
    description: string;

<<<<<<< HEAD
    @Prop({type: [String]})  // Define tags como un array de strings 
=======
    @Prop({ type: [String] }) // Esto especifica que `tags` es un arreglo de strings.
>>>>>>> main
    tags: string[];
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
