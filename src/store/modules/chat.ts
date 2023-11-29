import type { Message, Messages } from "@/components/Chat/types.ts";
import { IRootState } from "@/store";
import { ActionContext } from "vuex";

const getBotMessage = (userMessage: string): string => {
  let text = "";
  switch (userMessage.toLowerCase()) {
    case "заказать пиццу":
      text = "закажу пиццу";
      break;
    case "установить будильник":
      text = "установлю будильник";
      break;
    case "вывести погоду":
      text = "выведу погоду";
      break;
    default:
      return "Извините, не понимаю вас";
  }
  return `“Хорошо, ${text}. Что еще могу сделать?”`;
};

const types = {
  ADD_MESSAGE: "ADD_MESSAGE",
};
export interface IChatState {
  messages: Messages;
  messageVariants: string[];
}

const state: IChatState = {
  messages: [],
  messageVariants: ["Заказать пиццу", "Установить будильник", "Вывести погоду"]
};

const getters = {};

const actions = {
  async addMessage(
    { commit }: ActionContext<IChatState, IRootState>,
    message: Message
  ) {
    commit(types.ADD_MESSAGE, message);
    if (message.from !== 0) {
      commit(types.ADD_MESSAGE, {
        id: Date.now(),
        from: 0,
        text: getBotMessage(message.text),
      });
    }
  },
};

// mutations
const mutations = {
  [types.ADD_MESSAGE](state: IChatState, payload: Message) {
    state.messages.push(payload);
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
