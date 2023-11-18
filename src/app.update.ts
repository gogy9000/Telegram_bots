import {
  Action,
  Ctx,
  Hears,
  InjectBot,
  Message,
  On,
  Start,
  Update,
} from 'nestjs-telegraf';
import { Markup, Telegraf } from 'telegraf';
import { HomeButtonsAction } from './todo/app.buttons';
import { Context } from './todo/app.context.interface';

import { AppService } from './app.service';
import { Catch } from '@nestjs/common';
import { Update as UpdateType } from 'telegraf/typings/core/types/typegram';
import { ExtraReplyMessage } from 'telegraf/typings/telegram-types';
const todos = [
  { id: 0, title: 'azaza asd', isComplete: true },
  { id: 1, title: 'azaza', isComplete: false },
  { id: 2, title: 'azaza', isComplete: false },
];

@Update()
export class AppUpdate {
  // constructor(
  //   @InjectBot() private bot: Telegraf<Context>,
  //   private utils: AppUtils,
  //   private readonly taskService: AppService,
  // ) {}
  //
  // @Start()
  // async start(ctx: Context) {
  //   await ctx.reply('приветствую!');
  //   await ctx.reply('че хочу?', HomeButtonsAction());
  // }
  // @Catch()
  // async catch(ctx: Context) {
  //   return ctx;
  // }
  //
  // @Hears('🚗 задачи' as any)
  // async get(ctx: Context) {
  //   const tasks = await this.taskService.findAll();
  //   const answer = this.utils.getMappedTodos(tasks);
  //
  //   // await ctx.reply(answer);
  //   // await ctx.reply(
  //   //   'emoty',
  //   //   Markup.inlineKeyboard([Markup.button.callback('bu', 'dataa')]),
  //   // );
  //   await ctx.reply('Click a button', {
  //   reply_markup: {
  //     inline_keyboard: [[{ text: 'Button 1', callback_data: 'button1' }]],
  //   },
  // });
  // }
  // @Action(/button1/ as any)
  // async data(@Ctx() ctx: Context) {
  //   await ctx.reply(
  //     'asas',
  //     Markup.keyboard([Markup.button.callback('удалить', '1')]),
  //   );
  // }
  // @Hears(/удалить/ as any)
  // async text(@Ctx() ctx: Context) {
  //   console.log(ctx);
  //   await ctx.reply('удалить', HomeButtonsAction());
  // }
  // @Hears('🦄 чекнуть' as any)
  // async complete(ctx: Context) {
  //   await ctx.reply('напиши номер задачи');
  //   ctx.session.type = 'done';
  // }
  // @Hears('👽 редактировать' as any)
  // async edit(ctx: Context) {
  //   await ctx.reply('напиши номер задачи');
  //   ctx.session.type = 'edit';
  // }
  //
  // @Hears('🦄 удалить' as any)
  // async delete(ctx: Context) {
  //   await ctx.reply('напиши номер задачи');
  //   ctx.session.type = 'remove';
  // }
  // @Hears('🤡 создать' as any)
  // async crete(ctx: Context) {
  //   await ctx.reply('напиши задачу');
  //
  //   ctx.session.type = 'create';
  // }
  //
  // @On('text' as any)
  // async GetMessage(@Message('text') text: string, @Ctx() ctx: Context) {
  //   if (!ctx.session.type) return;
  //   if (ctx.session.type === 'create') {
  //     const todos = await this.taskService.create(text);
  //     console.log(todos);
  //     await ctx.reply(this.utils.getMappedTodos(todos));
  //     return;
  //   }
  //   const todo = await this.taskService.findById(Number(text));
  //   if (!todo) {
  //     await ctx.deleteMessage();
  //     await ctx.reply('not found');
  //     return;
  //   }
  //   if (ctx.session.type === 'done') {
  //     const tasks = await this.taskService.update(Number(text), {
  //       isCompleted: true,
  //     });
  //     await ctx.reply(this.utils.getMappedTodos(tasks));
  //   }
  //   if (ctx.session.type === 'remove') {
  //     const todos = await this.taskService.delete(Number(text));
  //     await ctx.reply(this.utils.getMappedTodos(todos));
  //   }
  //   if (ctx.session.type === 'edit') {
  //     const todos = await this.taskService.update(Number(text), {
  //       title: 'azaz',
  //     });
  //     await ctx.reply(this.utils.getMappedTodos(todos));
  //   }
  // }
}
