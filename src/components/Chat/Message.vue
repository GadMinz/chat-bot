<script lang="ts">
import { PropType } from "vue";
import type { Message } from "@/components/Chat/types.ts";
import botImg from "@/assets/bot.jpg";
export default {
  name: "Message",
  props: {
    message: { type: Object as PropType<Message>, required: true },
    firstOrLast: { type: String, default: "" },
    avatar: { type: String, default: "" },
  },
  data() {
    return {
      isBot: this.message.from === 0,
      ava: this.avatar,
      isLoading: false,
    };
  },
  created() {
    if (this.isBot) {
      this.isLoading = true;
      this.ava = botImg;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000 + Math.random() * 20 * 100);
    }
  },
};
</script>

<template>
  <div
    class="message"
    :class="[
      { 'message-bot': isBot, 'message-user': !isBot, loading: isLoading },
      firstOrLast,
    ]"
  >
    <div v-if="ava" class="message-avatar">
      <img v-if="firstOrLast === 'last'" :src="ava" alt="" />
    </div>
    <div
      class="message-text"
      :class="{ 'has-ava': ava && firstOrLast !== 'last' }"
    >
      <span>{{ message.text }}</span>
      <svg viewBox="0 0 11 20" width="11" height="20" class="message-tail">
        <g transform="translate(9 -14)" fill="inherit" fill-rule="evenodd">
          <path
            d="M-6 16h6v17c-.193-2.84-.876-5.767-2.05-8.782-.904-2.325-2.446-4.485-4.625-6.48A1 1 0 01-6 16z"
            transform="matrix(1 0 0 -1 0 49)"
            id="corner-fill"
            fill="inherit"
          ></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
