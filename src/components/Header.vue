<template>
  <div class="header">
    <div class="image-container">
      <img src="../assets/logo.png" alt class="user-photo" />
    </div>

    <div class="sender-data">
      <h1>Fulano de tal</h1>
      <p>Status do fulano de tal</p>
    </div>

    <div class="header-icons">
      <button>
        <font-awesome-icon class="icon" icon="search" />
      </button>
      <button>
        <font-awesome-icon class="icon" icon="ellipsis-v" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 50px;
  background: #333;
  padding-left: 16px;
  padding-right: 16px;
}

.image-container {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.user-photo {
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 100%;
}

.sender-data {
  display: flex;
  flex: 10;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  justify-content: center;
}

.sender-data h1 {
  color: #fff;
  line-height: 10px;
  font-size: 15px;
}
.sender-data p {
  color: #fff;
  line-height: 10px;
  font-size: 12px;
}

.header-icons {
  display: flex;
  flex: 2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.header-icons button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
}

.header-icons button .icon {
  color: #fff;
}
</style>
