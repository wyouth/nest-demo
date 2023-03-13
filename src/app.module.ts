import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ORMConfig from './config/orm.config';

@Module({
  imports: [PostsModule, TypeOrmModule.forRoot(ORMConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
