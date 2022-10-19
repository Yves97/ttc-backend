import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ContinentsDocument = Continents & Document;

@Schema({})
export class Continents {
    @Prop()
    id: string;
    
    @Prop()
    code: string;

    @Prop()
    name: string;
}

export const ContinentsSchema = SchemaFactory.createForClass(Continents);