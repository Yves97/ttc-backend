import { Injectable, NotFoundException } from "@nestjs/common";
import { ContinentsRepository } from "./continents.repository";
import { v4 as uuidv4 } from 'uuid';
import { Continents } from "./schemas/continent.schema";


@Injectable()
export class ContinentsService {
    constructor(private readonly contientsRepository: ContinentsRepository){}

    async getContinentById(id: string): Promise<Continents> {
        return this.contientsRepository.findOne({ id })
    }
    async getByCode(code: string): Promise<Continents>{
        const value = await this.contientsRepository.findOne({code: code.toLocaleUpperCase()})
        if(!value){
            throw new NotFoundException('Continent introuvable, saisissez le bon code')
        }
        return value
    }
    async getByName(name: string): Promise<Continents>{
        const value = await this.contientsRepository.findOne({name})
        if(!value){
            throw new NotFoundException('Continent introuvable, saisissez le bon nom')
        }
        return value
    }

    // async getByLanguage(name: string): Promise<Continents>{
        
        
    // }
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