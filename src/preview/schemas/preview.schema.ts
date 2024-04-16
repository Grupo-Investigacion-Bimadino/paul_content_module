import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
    timestamps: true
})
export class Preview extends Document {
    _id: mongoose.Types.ObjectId;

    @Prop()
    preview_url: string;

<<<<<<< HEAD
    @Prop([String])  // Define associated_content como un array de strings
    associated_content: object;
=======
    @Prop({ type: [String] }) // Esto especifica que `associated_content` es un arreglo de strings.
    associated_content: string[];
>>>>>>> main
}

export const PreviewSchema = SchemaFactory.createForClass(Preview);

