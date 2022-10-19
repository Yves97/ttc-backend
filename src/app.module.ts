import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContinentsModule } from './continents/contients.module';

// 'mongodb+srv://yves-user:tQblzvEKSYT16LTD@cluster0.pthnux4.mongodb.net/test'
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017'), ContinentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
