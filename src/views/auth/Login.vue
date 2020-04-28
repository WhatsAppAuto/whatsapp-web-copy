<template>
  <div
    class="flex flex-row justify-center items-center px-4 md:px-40 bg-black absolute w-full h-full"
  >
    <div
      class="flex flex-col items-center py-6 rounded-lg bg-gray-700 w-full h-64"
    >
      <form
        class="flex flex-col justify-between h-full"
        @submit="handleLogin($event)"
      >
        <app-input
          label="login"
          type="email"
          placeholder="Your e-mail or user name..."
          className="mx-5"
          :value="login.value"
          :error-message="login.error"
          @change="handleChangeText($event, 'login')"
        />
        <app-input
          label="password"
          type="password"
          className="mx-5"
          :value="password.value"
          :error-message="password.error"
          @change="handleChangeText($event)"
        />

        <app-button text="Entrar" className="mx-5" />
      </form>
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
      login: {
        value: "",
        error: ""
      },
      password: {
        value: "",
        error: ""
      }
    };
  },
  methods: {
    handleLogin(ev) {
      ev.preventDefault();

      if (!this.login.value) this.login.error = "Campo obrigatorio";

      if (!this.password.value) this.password.error = "Campo obrigatorio";

      if (this.login.value && this.password.value) {
        this.$store.dispatch("storeUser", {
          name: "John",
          email: this.login.value
        });

        this.$router.push({ name: "home" });
      }
    },
    handleChangeText(ev, inputName) {
      if (inputName === "login") {
        this.login.value = ev;
      } else {
        this.password.value = ev;
      }
    }
  }
};
</script>
