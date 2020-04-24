<template>
  <div class="flex flex-1 flex-row bg-gray-800 rounded-br-lg">
    <button>
      <font-awesome-icon
        icon="smile"
        class="mx-4 text-yellow-500"
      ></font-awesome-icon>
    </button>

    <input
      class="w-full bg-gray-900 rounded-full text-white my-2 pl-4 py-2"
      type="text"
      placeholder="Digite uma mensagem"
      v-model="message"
    />

    <button>
      <font-awesome-icon
        icon="microphone"
        class="mx-3 text-gray-600"
      ></font-awesome-icon>
    </button>

    <button :disabled="message.length === 0">
      <font-awesome-icon
        icon="paper-plane"
        class="mx-3"
        :class="message.length === 0 ? 'text-gray-600' : 'text-blue-500'"
      ></font-awesome-icon>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  }
};
</script>
