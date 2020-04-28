<template>
  <button
    :class="
      `bg-${bgColor} rounded-full md:px-32 py-2 text-${color} ${className}`
    "
    :type="type"
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
    },
    type: {
      type: String,
      default: "submit"
    },
    className: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>
