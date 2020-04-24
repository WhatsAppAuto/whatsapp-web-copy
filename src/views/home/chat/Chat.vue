<template>
  <div class="flex flex-auto flex-col bg-gray-200 rounded-lg">
    <app-header />

    <div class="h-full bg-gray-900">
      <app-conversation />
    </div>

    <app-chat-input />
  </div>
</template>

<script>
import Header from "./Header.vue";
import ChatInput from "./ChatInput.vue";
import Conversation from "./Conversation.vue";

export default {
  name: "MainChat",
  components: {
    appHeader: Header,
    appChatInput: ChatInput,
    appConversation: Conversation
  }
};
</script>
