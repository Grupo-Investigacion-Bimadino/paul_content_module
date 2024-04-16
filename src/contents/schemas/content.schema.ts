import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  mongoose, {Document} from 'mongoose';

@Schema({
    timestamps: true
})

export class Contents extends Document {
    _id: mongoose.Types.ObjectId;

    @Prop()
    title: string;

    @Prop()
    text: string;

    @Prop(/* {type: mongoose.Schema.Types.ObjectId, ref: 'User'} */)
    author: string;

    @Prop()
    creationdate: Date;

    @Prop()
    modificationdate: Date;

    @Prop(/* {type: String, enum:['DRAFT', 'PUBLISHED', 'DELETE'], default: 'DRAFT'} */)
    status: string;

    @Prop()
    contenttype: string;
}

export const ContentSchema = SchemaFactory.createForClass(Contents);


