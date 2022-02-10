import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@db/analytics?authSource=admin', {
      useNewUrlParser: true
    }),
    ScheduleModule.forRoot(),
    TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}