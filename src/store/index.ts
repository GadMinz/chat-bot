import {createLogger, createStore} from 'vuex'
import {IChatState} from "@/store/modules/chat.ts";
import chat from "@/store/modules/chat.ts";

export interface IRootState {
    chat: IChatState;
}



export const store = createStore<IRootState>({
    modules: {
        chat
    },
    plugins: [createLogger()]
})