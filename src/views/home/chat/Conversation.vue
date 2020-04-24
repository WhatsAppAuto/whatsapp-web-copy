<template>
  <div class="px-10 h-full">
    <div
      class="rounded-lg p-2 flex flex-row justify-between items-center my-5"
      v-for="message in conversation"
      :class="message.sentByMe ? 'bg-green-800' : 'bg-gray-700'"
      :key="message.content"
    >
      <p class="text-white ">{{ message.content }}</p>

      <p class="text-gray-500 text-xs">{{ message.sentAt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conversation: [
        {
          content: "Hi",
          sentByMe: true,
          sentAt: new Date().toLocaleDateString(),
          status: "visualized"
        },
        {
          content: "It's a me... John",
          sentByMe: true,
          sentAt: new Date().toLocaleDateString(),
          status: "visualized"
        },
        {
          content: "Oi João",
          sentByMe: false,
          sentAt: new Date().toLocaleDateString()
        },
        {
          content: "Como vai?",
          sentByMe: false,
          sentAt: new Date().toLocaleDateString()
        }
      ]
    };
  }
};
</script>
