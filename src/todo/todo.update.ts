import {
  Action,
  Ctx,
  InjectBot,
  SceneEnter,
  Start,
  Update,
} from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import { Context } from './app.context.interface';
import { TodoUtils } from './todo.utils';
import { TodoService } from './todo.service';
import { HomeButtonsAction } from './app.buttons';
import { SceneContext } from 'telegraf/typings/scenes';

@Update()
export class TodoUpdate {
  constructor(
    @InjectBot() private bot: Telegraf<Context>,
    private todoUtils: TodoUtils,
    private readonly todoService: TodoService,
  ) {}
  @Start()
  async start(ctx: SceneContext) {
    await ctx.reply('приветствую!');
    // await ctx.reply('че хочу?', HomeButtonsAction());
    await ctx.scene.enter('mainScene');
  }
  // @SceneEnter()
  // async enter(@Ctx() context: SceneContext) {
  //   await context.reply('2+2 = ?', {
  //     reply_markup: {
  //       inline_keyboard: [
  //         [{ text: 'Может быть 4?', callback_data: '4' }],
  //         [{ text: 'Точно пять!', callback_data: '5' }],
  //       ],
  //     },
  //   });
  // }
  // @Action(/4|5/)
  // async onAnswer(
  //   @Ctx() context: SceneContext & { update: Update.CallbackQueryUpdate },
  // ) {
  //   const cbQuery = context.update.callback_query;
  //   const userAnswer = 'data' in cbQuery ? cbQuery.data : null;
  //
  //   if (userAnswer === '4') {
  //     context.reply('верно!');
  //     context.scene.enter('nextSceneId');
  //   } else {
  //     context.reply('подумай еще');
  //   }
  // }
}
