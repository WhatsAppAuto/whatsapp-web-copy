<template>
  <div
    class="flex py-3 flex-row px-3 items-center justify-between bg-gray-800 rounded-tr-lg"
  >
    <div class="mx-4">
      <img
        :src="'../assets/' + currentConversation.photo"
        alt
        class="w-10 h-10 rounded-full bg-white"
      />
    </div>

    <div class="text-center">
      <h1 class="text-white text-base capitalize">
        {{ currentConversation.name }}
      </h1>

      <p class="text-gray-500 text-xs">{{ currentConversation.status }}</p>
    </div>

    <div class="flex flex-row">
      <button>
        <font-awesome-icon class="text-white mx-4" icon="search" />
      </button>

      <button>
        <font-awesome-icon class="text-white mx-4" icon="ellipsis-v" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.photo {
  width: 20px;
  height: 20px;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["currentConversation"])
};
</script>
