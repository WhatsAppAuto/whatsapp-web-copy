<template>
  <button
    :class="`bg-${bgColor} rounded px-32 py-2 text-${color}`"
    @click="handleClick()"
  >
    {{ text.toUpperCase() }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    bgColor: {
      type: String,
      default: "green-400"
    },
    color: {
      type: String,
      default: "white"
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>
