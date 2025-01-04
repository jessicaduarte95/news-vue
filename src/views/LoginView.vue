<template>
  <b-modal
    v-model="openModal"
    has-modal-card
    trap-focus
    :destroy-on-hide="false"
    aria-role="dialog"
    aria-label="Login Modal"
    close-button-aria-label="Fechar Modal"
    @hide="closeModal"
  >
    <div class="container-modal">
      <div class="header">
        <b-image
          :src="require('@/assets/img/logo.png')"
          alt="Logo"
          class="logo-img"
        ></b-image>
        <span class="title">News</span>
      </div>
      <form id="formLogin" @submit.prevent="submitForm">
        <b-field
          :message="v$.form.email.$error ? 'E-mail inválido' : ''"
          :type="v$.form.email.$error ? 'is-danger' : ''"
        >
          <b-input
            v-model="v$.form.email.$model"
            placeholder="E-mail"
          ></b-input>
        </b-field>
        <b-field
          :message="v$.form.password.$error ? 'Senha inválida' : ''"
          :type="v$.form.password.$error ? 'is-danger' : ''"
        >
          <b-input
            v-model="v$.form.password.$model"
            type="password"
            placeholder="Senha"
            password-reveal
          >
          </b-input>
        </b-field>
        <b-button class="button-confirm" @click="submitForm">Entrar</b-button>
        <div class="forgot-password">Esqueci minha senha</div>
      </form>
    </div>
  </b-modal>
</template>
<script>
import { required, minLength, email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      form: {
        email: { required, email },
        password: { required, minLength: minLength(6) },
      },
    };
  },
  props: {
    openModalLogin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    openModal: {
      get() {
        return this.openModalLogin;
      },
      set(value) {
        this.$emit("update:openModalLogin", value);
      },
    },
  },
  methods: {
    ...mapActions("login", ["login"]),
    closeModal() {
      this.$emit("update:openModalLogin", false);
    },
    submitForm() {
      this.login(this.form);
      this.closeModal();
      this.resetForm();
    },
    resetForm() {
      this.form = { email: "", password: "" };

      for (const key in this.v$.form) {
        if (typeof this.v$.form[key].$reset === "function") {
          this.v$.form[key].$reset();
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/variables";

.container-modal {
  z-index: 1;
  position: relative;
  background-color: $whiteColor;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 32rem;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-img {
  width: 6rem;
}
.title {
  text-align: center;
  color: $tertiaryColor;
  font-weight: 700;
  font-size: 3rem;
  padding: 0.8rem;
}
.forgot-password {
  text-align: center;
  color: $tertiaryColor;
  font-weight: 550;
  font-size: 0.8rem;
  margin-top: 0.3rem;
}
</style>
