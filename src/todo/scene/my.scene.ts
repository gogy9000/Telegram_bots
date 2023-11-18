import { Injectable } from '@nestjs/common';
import { Action, Ctx, InjectBot, Scene, SceneEnter } from 'nestjs-telegraf';

import { SceneContext } from 'telegraf/typings/scenes';
import * as scene from './myscene.json';
import { Context, Telegraf } from 'telegraf';
import { TodoService } from '../todo.service';
import { TodoUtils } from '../todo.utils';
interface IStoryStep {
  replies: { type: string; message: string }[];
  buttons: { text: string; callback_data: string }[];
}
const storySteps: Record<string, IStoryStep> = scene;
@Injectable()
@Scene('mainScene')
export class MyScene {
  constructor(
    @InjectBot() private bot: Telegraf<Context>,
    private todoService: TodoService,
    private utils: TodoUtils,
  ) {}
  @SceneEnter()
  async enter(@Ctx() context: SceneContext) {
    const userId = this.utils.getUserId(context);
    const userSession = await this.todoService.getUserSession(userId);
    console.log(userSession.scene);
    for (let i = 0; i < storySteps[userSession.scene].replies.length; i++) {
      if (i >= storySteps[userSession.scene].replies.length - 1) {
        await context.reply(storySteps[userSession.scene].replies[i].message, {
          reply_markup: {
            inline_keyboard: [storySteps[userSession.scene].buttons],
          },
        });
        return;
      }
      await context.reply(storySteps[userSession.scene].replies[i].message);
    }

    // for (const button of storySteps['scene1'].buttons) {
    //   await context.reply('asd ', {
    //     reply_markup: [[{ text: button.text, callback_data: button.nextStep }]],
    //   });
    // }
  }
  @Action(/.*/)
  async onAnswer(
    @Ctx() ctx: SceneContext & { update: { callback_query: { data: string } } },
  ) {
    const userId = this.utils.getUserId(ctx);
    const cbQuery = ctx.update.callback_query;
    const selectScene = 'data' in cbQuery ? cbQuery.data : null;
    if (selectScene) {
      await this.todoService.updateUserSession(userId, selectScene);
    }
    await ctx.scene.reenter();
  }
}
