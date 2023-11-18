import { Markup } from 'telegraf';

export function HomeButtonsAction() {
  return Markup.keyboard(
    [
      Markup.button.callback('🚗 задачи', 'list'),
      Markup.button.callback('🤡 создать', 'create'),
      Markup.button.callback('👽 редактировать', 'edit'),
      Markup.button.callback('🦄 удалить', 'delete'),
      Markup.button.callback('🦄 чекнуть', 'complete'),
    ],
    {},
  );
}
