<script lang="ts">
import type { Message } from "@/components/Chat/types.ts";
import {mapActions} from "vuex";

export default {
  name: "MessageBox",
  data() {
    return {
      text: "",
    };
  },
  mounted() {
    this.sendBotMessage("Привет! Что я могу для Вас сделать?");
  },
  methods: {
    ...mapActions({
      addMessage: 'chat/addMessage',
    }),
    async sendMessage() {
      if (this.text.trim() === "") return;
      const message: Message = { id: Date.now(), text: this.text, from: 1 };
      await this.addMessage(message)
      this.text = "";
    },
    async sendBotMessage(text:string) {
      const message: Message = {
        id: Date.now(),
        text,
        from: 0,
      };
      await this.addMessage(message)
    },
  },
};
</script>

<template>
  <div class="message-box">
    <input
      class="message-input"
      placeholder="Введите сообщение..."
      @keydown.enter.exact.prevent
      @keyup.enter.exact="sendMessage"
      v-model="text"
    />
    <button class="message-submit" @click="sendMessage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 500 500"
      >
        <g>
          <g>
            <polygon
              points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"
            ></polygon>
          </g>
        </g>
      </svg>
    </button>
  </div>
</template>

<style scoped></style>
