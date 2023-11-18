import { Injectable } from '@nestjs/common';
import { TaskEntity } from './task.entity';
import { Context } from 'telegraf';
interface UpdateType {
  update: {
    update_id: number;
    my_chat_member?: {
      from: { id: number };
    };
    message?: {
      from: { id: number };
    };
    callback_query?: {
      id: string;
      from: {
        id: number;
        is_bot: boolean;
        first_name: string;
        last_name: string;
        username: string;
        language_code: string;
      };
      message: {
        message_id: number;
        from: { id: number };
        text: string;
      };

      data: 'scene1';
    };
  };
}

@Injectable()
export class TodoUtils {
  getUserId(context: any): number {
    if ('callback_query' in context.update) {
      return context.update.callback_query.from.id;
    }

    if ('message' in context.update) {
      return context.update.message.from.id;
    }

    if ('my_chat_member' in context.update) {
      return context.update.my_chat_member.from.id;
    }

    return -1;
  }
  getMappedTodos(todos: TaskEntity[]) {
    const answer = todos
      .map(
        ({ title, isCompleted, id }) => `
    ${id}: ${title} ${isCompleted ? '👌' : '🛠'}
    `,
      )
      .reverse()
      .join(' ');
    return `Список дел:\n\n${answer}`;
  }
}
