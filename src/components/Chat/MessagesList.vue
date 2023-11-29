<script lang="ts">
import Message from "@/components/Chat/Message.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("chat");

export default {
  name: "MessagesList",
  components: { Message },
  methods: {
    isFirstOrLast(from: number, index: number) {
      if (index === this.messages.length - 1) return "last";
      if (index === 0 && this.messages.length === 1) return "first";
      if (from !== this.messages[index + 1].from) return "last";
      if (from !== this.messages[index - 1].from) return "first";
      return "";
    },
    scrollToBottom() {
      const messagesEl = this.$refs.messages as HTMLElement;
      this.$nextTick(() => (messagesEl.scrollTop = messagesEl.scrollHeight));
    },
  },
  watch: {
    messages: {
      handler() {
        this.scrollToBottom();
      },
      deep: true,
    },
  },
  computed: {
    ...mapState(["messages"]),
  },
  mounted() {
    this.scrollToBottom();
  },
};
</script>

<template>
  <div class="messages" ref="messages">
    <div class="messages-content" ref="scrollbar">
      <Message
        v-for="(item, index) in messages"
        :message="item"
        :key="item.id"
        :first-or-last="isFirstOrLast(item.from, index)"
      />
    </div>
  </div>
</template>
