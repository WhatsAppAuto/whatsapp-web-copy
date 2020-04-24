<template>
  <div
    class="flex flex-row justify-center items-center px-40 bg-purple-500 absolute w-full h-full"
  >
    <div
      class="flex flex-col items-center py-6 rounded-lg bg-gray-700 w-full h-64"
    >
      <div class="flex flex-col justify-between h-full">
        <app-input
          label="login"
          type="email"
          :value="login"
          @change="handleChangeText($event, 'login')"
        />
        <app-input
          label="password"
          type="password"
          :value="password"
          @change="handleChangeText($event)"
        />

        <app-button text="Entrar" @click="handleLogin()" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  components: {
    appInput: Input,
    appButton: Button
  },
  data() {
    return {
      login: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      if (this.login && this.password) {
        this.$store.dispatch("storeUser", { name: "John", email: this.login });

        this.$router.push({ name: "home" });
      }
    },
    handleChangeText(ev, inputName) {
      if (inputName === "login") {
        this.login = ev;
      } else {
        this.password = ev;
      }
    }
  }
};
</script>
