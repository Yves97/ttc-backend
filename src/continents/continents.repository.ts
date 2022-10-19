import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Continents, ContinentsDocument } from "./schemas/continent.schema";



@Injectable()
export class ContinentsRepository {
    constructor(@InjectModel(Continents.name) private continentsModel: Model<ContinentsDocument>){}

    async findOne(continentFilterQuery: FilterQuery<Continents>): Promise<Continents>{
        return this.continentsModel.findOne(continentFilterQuery);
    }

    async find(continentsFilterQuery: FilterQuery<Continents>): Promise<Continents[]>{
        return this.continentsModel.find(continentsFilterQuery);
    }

    async create(continents: Continents): Promise<Continents>{
        const newContinent = new this.continentsModel(continents);
        return newContinent.save();
    }

    async findOneAndUpdate(continentFilterQuery: FilterQuery<Continents>, continent: Partial<Continents>): Promise<Continents>{
        return this.continentsModel.findOneAndUpdate(continentFilterQuery, continent)
    }
}