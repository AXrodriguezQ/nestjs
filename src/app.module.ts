import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [StudentsModule, MongooseModule.forRoot('mongodb://localhost:27017')],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
