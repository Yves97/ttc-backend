import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ContinentsService } from "./continents.service";
import { CreateContinentDto } from "./dto/create-continent.dto";
import { Continents } from "./schemas/continent.schema";


@Controller('continents')
export class ContinentsController{
    constructor(private readonly continentsService: ContinentsService){}

    @Get(':id')
    async getContinent(@Param('id') id: string): Promise<Continents>{
        // console.log('id', id)
        return this.continentsService.getContinentById(id);
    }

    @Get('code/:code')
    async getByCode(@Param('code') code: string): Promise<Continents>{
        console.log('code', code)
        return this.continentsService.getByCode(code)
    }


    @Get('name/:name')
    async getByName(@Param('name') name: string): Promise<Continents>{
        console.log('code', name)
        return this.continentsService.getByName(name)
    }

    @Get()
    async getContinents(): Promise<Continents[]>{
        return this.continentsService.getContinents();
    }

    @Post()
    async createContinent(@Body() createContinentDto: CreateContinentDto): Promise<Continents>{
        return this.continentsService.createContient(createContinentDto.code, createContinentDto.name)
    }
}
