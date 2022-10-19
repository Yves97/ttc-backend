import { Injectable } from "@nestjs/common";
import { ContinentsRepository } from "./continents.repository";
import { v4 as uuidv4 } from 'uuid';
import { Continents } from "./schemas/continent.schema";


@Injectable()
export class ContinentsService {
    constructor(private readonly contientsRepository: ContinentsRepository){}

    async getContinentById(id: string): Promise<Continents> {
        return this.contientsRepository.findOne({ id })
    }

    async createContient(code: string, name: string): Promise<Continents> {
        return this.contientsRepository.create({
            id: uuidv4(),
            code,
            name
        })
    }
    async getContinents(): Promise<Continents[]> {
        return this.contientsRepository.find({});
    }
}