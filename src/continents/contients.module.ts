import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Continents, ContinentsSchema } from "./schemas/continent.schema";

@Module({
    imports: [MongooseModule.forFeature([ {name: Continents.name, schema: ContinentsSchema} ])]
})
export class ContinentsModule{}
