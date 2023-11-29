<script lang="ts">
import ChatTitle from "@/components/Chat/ChatHeader.vue";
import MessagesList from "@/components/Chat/MessagesList.vue";
import MessageBox from "@/components/Chat/MessageBox.vue";
import MessageVariants from "@/components/Chat/MessageVariants.vue";
export default {
  name: "Chat",
  components: { MessageBox, MessagesList, ChatTitle, MessageVariants },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    }
  }
};
</script>

<template>
  <div class="chat" :class="{open: isOpen}">
    <svg style="display: none">
      <symbol id="message-tail" viewBox="0 0 11 20">
        <g transform="translate(9 -14)" fill="inherit" fill-rule="evenodd">
          <path
            d="M-6 16h6v17c-.193-2.84-.876-5.767-2.05-8.782-.904-2.325-2.446-4.485-4.625-6.48A1 1 0 01-6 16z"
            transform="matrix(1 0 0 -1 0 49)"
            id="corner-fill"
            fill="inherit"
          ></path>
        </g>
      </symbol>
    </svg>
    <ChatTitle :name="'ChatBot'" @closeChat="toggleOpen" />
    <MessagesList />
    <MessageVariants />
    <MessageBox />
  </div>
  <button class="chat-toggle" v-if="!isOpen" @click="toggleOpen">
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
        fill="#ffffff"
      ></path>
      <path d="M0 0h24v24H0z" fill="none"></path>
    </svg>
  </button>
</template>

<style scoped></style>
