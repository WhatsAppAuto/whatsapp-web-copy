<template>
  <div class="input-container">
    <input type="text" />

    <button>
      <font-awesome-icon icon="paper-plane"></font-awesome-icon>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex: 1;
  flex-direction: row;
}

.input-container input {
  border: none;
  width: 100%;
  background: #333;
}
</style>
