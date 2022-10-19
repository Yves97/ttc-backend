import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://yves-user:tQblzvEKSYT16LTD@cluster0.pthnux4.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
