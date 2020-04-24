<template>
  <div class="px-10 h-full">
    <div
      class="speech-bubble rounded-lg p-2 flex flex-row justify-between items-center my-5"
      v-for="message in conversation"
      :class="
        message.sentByMe
          ? 'sent-by-me bg-green-800 ml-48'
          : 'not-sent-by-me bg-gray-700 mr-48'
      "
      :key="message.content"
    >
      <div>
        <p v-if="message.sentByMe" class="text-gray-400 text-xs">You</p>
        <p v-else class="text-gray-400 text-xs capitalize">
          {{ contact.name }}
        </p>

        <p class="text-white ">{{ message.content }}</p>
      </div>

      <p class="text-gray-500 text-xs">{{ dateFormat(message.sentAt) }}</p>
    </div>
  </div>
</template>

<script>
import formatter from "@/utils/formatter";

export default {
  data() {
    return {
      contact: {},
      conversation: [
        {
          content: "Hi",
          sentByMe: true,
          sentAt: new Date(),
          status: "visualized"
        },
        {
          content: "It's a me... John",
          sentByMe: true,
          sentAt: new Date(),
          status: "visualized"
        },
        {
          content: "Oi João",
          sentByMe: false,
          sentAt: new Date()
        },
        {
          content: "Como vai?",
          sentByMe: false,
          sentAt: new Date()
        }
      ]
    };
  },
  methods: {
    dateFormat(date) {
      return formatter.dateFormat(date, "HH:MM");
    }
  },
  mounted() {
    this.contact = this.$store.getters.currentConversation;
  }
};
</script>

<style lang="scss" scoped>
.speech-bubble {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 0.719em solid transparent;
    border-top: 0;
    margin-top: -0.359em;
  }
}

.not-sent-by-me::after {
  left: 0;
  border-right-color: #4a5568;
  border-left: 0;
  margin-left: -0.719em;
}

.sent-by-me::after {
  right: 0;
  border-left-color: #276749;
  border-right: 0;
  margin-right: -0.719em;
}
</style>
