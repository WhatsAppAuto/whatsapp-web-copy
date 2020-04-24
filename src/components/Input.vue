<template>
  <div>
    <label class="text-gray-100 text-xs mb-2">{{ label }}</label>
    <input
      class="w-full bg-gray-800 rounded-full text-white pl-2 py-1"
      type="text"
      @keyup="handleChange($event)"
      :value="value"
    />
    <p class="text-xs text-red-400" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    label: String,
    errorMessage: String
  },
  methods: {
    handleChange({ target }) {
      this.$emit("change", target.value);
    }
  }
};
</script>
