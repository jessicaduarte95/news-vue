<template>
  <div class="container-register">
    <div class="card">
      <div v-if="showImagem" class="img-content">
      </div>
      <div class="register-content">
        <p class="title">Cadastro</p>
        <b-field>
          <b-input v-model="name" placeholder="Nome"></b-input>
        </b-field>
        <b-field>
          <b-input v-model="email" placeholder="E-mail"></b-input>
        </b-field>
        <b-field>
          <b-input type="password" value="" placeholder="Senha" password-reveal>
          </b-input>
        </b-field>
        <b-field>
          <b-input
            type="password"
            value=""
            placeholder="Confirmar senha"
            password-reveal
          >
          </b-input>
        </b-field>
        <b-button class="button-confirm">Salvar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data: function () {
    return {
      name: "",
      email: "",
      showImagem: true,
    };
  },
  mounted() {
    this.checkDevice();
  },
  methods: {
    checkDevice() {
      const { body } = document;
      const rect = body.getBoundingClientRect();
      this.showImagem = rect.width >= 1000;
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
}

.img-content {
  width: 40%;
  height: 100%;
  border-radius: 1rem 0rem 0rem 1rem;
  background-color: $quaternaryColor;
}

.register-content {
  padding: 3rem;
  width: 60%;
}

.mobile {
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
