<template>
  <b-modal
    v-model="openModal"
    has-modal-card
    trap-focus
    :destroy-on-hide="false"
    aria-role="dialog"
    aria-label="Logout Modal"
    close-button-aria-label="Fechar Modal"
    @hide="closeModal"
  >
    <div class="container-modal">
      <div class="header">
        <b-image
          :src="require('@/assets/img/exclamation.png')"
          alt="Alert"
          class="alert-img"
        ></b-image>
      </div>
      <form id="formLogin">
        <p>Tem certeza de que deseja sair da aplicação?</p>
        <div>
          <div>
            <b-button class="button-confirm" @click="logout()">Sair</b-button>
          </div>
          <div class="content-button">
            <b-button class="button-cancel" @click="closeModal()"
              >Cancelar</b-button
            >
          </div>
        </div>
      </form>
    </div>
  </b-modal>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import AuthService from "../services/auth.service";

export default {
  name: "LogoutView",
  props: {
    openModalLogout: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["device"]),
    isMobile() {
      return this.device === "mobile";
    },
    openModal: {
      get() {
        return this.openModalLogout;
      },
      set(value) {
        this.$emit("update:openModalLogout", value);
      },
    },
  },
  methods: {
    ...mapActions(["setActiveUser", "setDataUser"]),
    closeModal() {
      this.$emit("update:openModalLogout", false);
    },
    logout() {
      try {
        AuthService.stopRefreshTokenTimer();
        localStorage.clear();
        this.setActiveUser(null);
        this.setDataUser("");
        this.closeModal();
        this.$router.push('/')
      } catch (error) {
        console.log("Erro: ".error);
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
  width: 20rem;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.alert-img {
  width: 7rem;
}
.title {
  text-align: center;
  color: $tertiaryColor;
  font-weight: 700;
  font-size: 2rem;
  padding: 0.8rem;
}
.content-button {
  margin-top: 0.5rem;
}
p {
  display: flex;
  align-items: center;
  color: $primaryColor;
  margin: 1rem;
  font-size: 1.2rem;
}
</style>
