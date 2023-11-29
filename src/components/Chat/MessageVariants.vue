<script lang="ts">
import { createNamespacedHelpers, mapActions } from "vuex";

const { mapState } = createNamespacedHelpers("chat");
export default {
  name: "MessageVariants",
  computed: {
    ...mapState(["messageVariants"]),
  },
  methods: {
    ...mapActions({
      addMessage: "chat/addMessage",
    }),
    sendMessage(text: string) {
      const message = { id: Date.now(), text, from: 1 };
      this.addMessage(message);
    },
  },
};
</script>

<template>
  <div class="message-variants" v-if="messageVariants.length > 0">
    <button
      class="message-variants-item"
      v-for="messageVariant of messageVariants"
      @click="sendMessage(messageVariant)"
    >
      <span class="message-variants-item-text">{{ messageVariant }}</span>
    </button>
  </div>
</template>

<style scoped></style>
