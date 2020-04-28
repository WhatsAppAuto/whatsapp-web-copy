<template>
  <div :class="className">
    <label class="text-gray-100 text-xs mb-2">{{ label }}</label>
    <input
      class="w-full bg-gray-800 rounded-full text-white pl-2 py-1 outline-none"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @keyup="handleChange($event)"
    />
    <p class="text-xs text-red-400" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    label: String,
    type: String,
    placeholder: String,
    errorMessage: String,
    className: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleChange({ target }) {
      this.$emit("change", target.value);
    }
  }
};
</script>
