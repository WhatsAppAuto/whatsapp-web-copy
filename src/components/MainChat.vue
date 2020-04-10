<template>
  <div class="main-chat-container">
    <app-header />

    <div class="chat"></div>

    <app-chat-input />
  </div>
</template>

<script>
import Header from "./Header.vue";
import ChatInput from "./ChatInput.vue";

export default {
  name: "MainChat",
  components: {
    appHeader: Header,
    appChatInput: ChatInput
  }
};
</script>

<style lang="scss" scoped>
.main-chat-container {
  display: flex;
  flex-direction: column;
  flex: 7;
  width: 100%;
}

.chat {
  display: flex;
  flex: 10;
}
</style>
