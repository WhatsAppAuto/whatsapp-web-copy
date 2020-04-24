<template>
  <div
    class="flex flex-row items-center justify-between py-2 px-3 cursor-pointer"
    :class="contact.active ? 'bg-gray-900' : ''"
    @click="$emit('select-contact', contact)"
  >
    <div>
      <img
        class="rounded-full w-16 h-16 mr-16"
        src="@/assets/img/dog1.webp"
        alt="contact"
      />
    </div>

    <div class="w-full">
      <h2 class="text-white text-base capitalize">{{ contact.name }}</h2>
      <p class="text-gray-500 text-sm">{{ contact.status }}</p>
    </div>

    <div>
      <p class="text-gray-600 text-sm">{{ contact.lastSaw }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: Object
  }
};
</script>
