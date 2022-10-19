import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ContinentsController } from "./continents.controller";
import { ContinentsRepository } from "./continents.repository";
import { ContinentsService } from "./continents.service";
import { Continents, ContinentsSchema } from "./schemas/continent.schema";

@Module({
    imports: [MongooseModule.forFeature([ {name: Continents.name, schema: ContinentsSchema} ])],
    controllers: [ContinentsController],
    providers: [ContinentsService, ContinentsRepository]
})
export class ContinentsModule{}
