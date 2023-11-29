<script lang="ts">
import botImg from "@/assets/bot.jpg";
export default {
  name: "ChatHeader",
  props: {
    name: { type: String, default: "" },
    avatar: { type: String, default: botImg },
  },
};
</script>

<template>
  <div class="chat-header">
    <figure class="chat-header-avatar">
      <img :src="avatar" alt="avatar" />
    </figure>
    <div class="chat-header-title">{{ name }}</div>
    <button class="chat-header-close" @click="$emit('closeChat')">
      <svg
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          fill="currentColor"
        ></path>
        <path d="M0 0h24v24H0z" fill="none"></path>
      </svg>
    </button>
  </div>
</template>
