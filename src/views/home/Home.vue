<template>
  <div class="flex bg-white absolute w-full h-full py-10 px-32 bg-purple-500">
    <app-sidebar />
    <app-chat />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "./sidebar/Sidebar.vue";
import Chat from "./chat/Chat.vue";

export default {
  name: "Home",
  components: {
    appSidebar: Sidebar,
    appChat: Chat
  },
  beforeRouteEnter(_, __, next) {
    // next({ path: "/login" });
    console.log(this);
    next();
  }
};
</script>
