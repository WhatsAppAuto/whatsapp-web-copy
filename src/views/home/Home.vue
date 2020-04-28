<template>
  <div class="flex absolute w-full h-full py-10 px-32 bg-black">
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
