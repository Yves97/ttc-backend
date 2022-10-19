import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ContinentsService } from "./continents.service";
import { CreateContinentDto } from "./dto/create-continent.dto";
import { Continents } from "./schemas/continent.schema";


@Controller('continents')
export class ContinentsController{
    constructor(private readonly continentsService: ContinentsService){}

    @Get(':id')
    async getContinent(@Param(':id') id: string): Promise<Continents>{
        return this.continentsService.getContinentById(id);
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
