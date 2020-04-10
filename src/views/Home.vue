<template>
  <div class="container">
    <Sidebar />
    <MainChat />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";
import MainChat from "@/components/MainChat.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
    MainChat
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  background: #eeeeee;
  padding: 0;
}
</style>
