<template>
  <div class="container-register">
    <div class="card">
      <div v-if="showImagem" class="img-content">
        <img
          :src="require('@/assets/img/register.png')"
          alt="Imagem de fundo"
        />
      </div>
      <div class="register-content">
        <form id="formRegisterUser" @submit.prevent="submitForm">
          <p class="title">Cadastro</p>
          <b-field
            :message="v$.form.name.$error ? 'Nome é obrigatório!' : ''"
            :type="v$.form.name.$error ? 'is-danger' : ''"
          >
            <b-input v-model="v$.form.name.$model" placeholder="Nome"></b-input>
          </b-field>
          <b-field
            :message="v$.form.email.$error ? 'E-mail inválido!' : ''"
            :type="v$.form.email.$error ? 'is-danger' : ''"
          >
            <b-input
              v-model="v$.form.email.$model"
              placeholder="E-mail"
            ></b-input>
          </b-field>
          <b-field
            :message="
              v$.form.password.$error
                ? 'Senha deve ter pelo menos 6 caracteres.'
                : ''
            "
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
          <b-field
            :message="
              v$.form.confirmPassword.$error ? 'As senhas devem coincidir.' : ''
            "
            :type="v$.form.confirmPassword.$error ? 'is-danger' : ''"
          >
            <b-input
              v-model="v$.form.confirmPassword.$model"
              type="password"
              placeholder="Confirmar senha"
              password-reveal
            >
            </b-input>
          </b-field>
          <b-button class="button-confirm">Salvar</b-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, sameAs, email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export default {
  name: "RegisterView",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      showImagem: true,
    };
  },
  mounted() {
    this.checkDevice();
  },
  validations() {
    return {
      form: {
        name: { required, minLength: minLength(3) },
        email: { required, email },
        password: { required, minLength: minLength(6) },
        confirmPassword: {
          required,
          sameAsPassword: sameAs(this.form.password),
        },
      },
    };
  },
  methods: {
    checkDevice() {
      const { body } = document;
      const rect = body.getBoundingClientRect();
      this.showImagem = rect.width >= 1000;
    },
    submitForm() {
      this.v$.$touch();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.container-register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  background-color: $grayColor;
}
.card {
  display: flex;
  flex-direction: row;
  margin-left: 18%;
  margin-right: 18%;
  background-color: $whiteColor;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
}

.img-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  border-radius: 1rem 0rem 0rem 1rem;
  background-color: $primaryColor;
}

img {
  width: 18rem;
  height: 18rem;
}

@media (max-width: 1400px) {
  img {
    width: 12rem;
    height: 12rem;
  }
}

.register-content {
  padding: 3rem;
  width: 60%;
}

.mobile {
  .container-register {
    padding: 0;
  }
  .card {
    padding: 1.5rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .register-content {
    padding: 1.5rem;
    width: 100%;
  }
}
</style>
