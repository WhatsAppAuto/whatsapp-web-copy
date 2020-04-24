<template>
  <div
    class="flex flex-row justify-between items-center py-3 px-3 border-r border-gray-600"
  >
    <div class="">
      <img
        src="@/assets/logo.png"
        alt
        class="w-10 h-10 rounded-full bg-white"
      />
    </div>

    <div>
      <button class="mx-2">
        <font-awesome-icon icon="plus" class="text-white" />
      </button>

      <button class="mx-2">
        <font-awesome-icon icon="cog" class="text-white" />
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
