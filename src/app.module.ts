import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { AppUpdate } from './app.update';

import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';
import { TaskEntity } from './todo/task.entity';
import { TodoModule } from './todo/todo.module';

// const session = new LocalSession({ database: 'session_db.json' });

@Module({
  imports: [
    // TelegrafModule.forRoot({
    //   middlewares: [session.middleware()],
    //   token: '6524144152:AAF1sJo_WnkRu3ZbLyNF-2a-B-KAja9Z-5A',
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   database: 'todo-app-tg-bot',
    //   username: 'postgres',
    //   password: 'root',
    //   entities: [TaskEntity],
    //   // entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
    //   // migrations: [path.join(__dirname, '**', '*.migration.{ts,js}')],
    //   synchronize: true,
    // }),
    // TypeOrmModule.forFeature([TaskEntity]),
    TodoModule,
  ],
  // controllers: [AppController],
  // providers: [AppService, AppUpdate, AppUtils],
})
export class AppModule {}
