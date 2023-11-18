import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import * as LocalSession from 'telegraf-session-local';
import { TodoUpdate } from './todo.update';
import { TodoUtils } from './todo.utils';
import { MyScene } from './scene/my.scene';
import { UserSessionEntity } from './user.session.entity';
const session = new LocalSession({ database: 'session_db.json' });

@Module({
  providers: [TodoService, TodoUtils, MyScene, TodoUpdate],
  imports: [
    TelegrafModule.forRoot({
      middlewares: [session.middleware()],
      token: '6524144152:AAF1sJo_WnkRu3ZbLyNF-2a-B-KAja9Z-5A',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'todo-app-tg-bot',
      username: 'postgres',
      password: 'root',
      entities: [TaskEntity, UserSessionEntity],
      // entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
      // migrations: [path.join(__dirname, '**', '*.migration.{ts,js}')],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([TaskEntity]),
    TypeOrmModule.forFeature([UserSessionEntity]),
  ],
})
export class TodoModule {}
