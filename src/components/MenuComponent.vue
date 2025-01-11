<template>
  <div>
    <div class="container" v-if="!isMobile">
      <b-menu class="container-desktop" v-if="isActive">
        <div>
          <div class="menu-header">
            <b-image
              :src="require('@/assets/img/logo.png')"
              alt="Logo"
              class="logo-img"
            ></b-image>
            <span class="menu-label">News</span>
          </div>
          <b-menu-item
            label="Onboarding"
            icon="link"
            class="text-menu"
            @click="redirectRoute('/')"
          ></b-menu-item>
          <b-menu-item
            label="Cadastro"
            icon="id-card"
            class="text-menu"
            v-if="!this.$store.getters.activeUser"
            @click="redirectRoute('/register')"
          ></b-menu-item>
          <b-menu-item
            label="Postagens"
            icon="file"
            class="text-menu"
            @click="redirectRoute('/posts')"
          ></b-menu-item>
          <b-menu-item
            label="Cadastrar Posts"
            icon="pen-to-square"
            class="text-menu"
            v-if="this.$store.getters.activeUser"
          ></b-menu-item>
        </div>
        <div>
          <p class="text-name">{{ this.$store.getters.dataUser.name }}</p>
          <b-menu-item
            :label="this.$store.getters.activeUser ? 'Sair' : 'Entrar'"
            icon="circle-user"
            class="text-login"
            @click="openModal()"
          ></b-menu-item>
          <p class="version">1.0.1</p>
        </div>
      </b-menu>
    </div>
    <div class="container" v-if="isMobile">
      <b-menu class="container-mobile" v-if="isActive">
        <div>
          <div class="menu-header">
            <b-image
              :src="require('@/assets/img/logo.png')"
              alt="Logo"
              class="logo-img"
            ></b-image>
            <span class="menu-label">News</span>
          </div>
          <div class="list-menu">
            <b-menu-item
              label="Onboarding"
              icon="link"
              class="text-menu"
              @click="redirectRoute('/')"
            ></b-menu-item>
            <b-menu-item
              label="Cadastro"
              icon="pen-to-square"
              class="text-menu"
              @click="redirectRoute('/register')"
            ></b-menu-item>
            <b-menu-item
              label="Postagens"
              icon="file"
              class="text-menu"
              @click="redirectRoute('/posts')"
            ></b-menu-item>
          </div>
        </div>
      </b-menu>
    </div>
    <login-view :openModalLogin.sync="openModalLogin" />
    <logout-view :openModalLogout.sync="openModalLogout" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";

export default {
  name: "MenuComponent",
  components: {
    LoginView,
    LogoutView,
  },
  computed: {
    ...mapGetters(["device"]),
    isMobile() {
      return this.device === "mobile";
    },
  },
  data() {
    return {
      isActive: true,
      openModalLogin: false,
      openModalLogout: false,
    };
  },
  methods: {
    redirectRoute(path) {
      this.$router.push(path);
    },
    openModal() {
      if (!this.$store.getters.activeUser) {
        this.modalLogin();
      } else {
        this.modalLogout();
      }
    },
    modalLogin() {
      this.openModalLogin = !this.openModalLogin;
    },
    modalLogout() {
      this.openModalLogout = !this.openModalLogout;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.container {
  height: 100%;
  position: fixed;
}
.container-desktop {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $primaryColor;
  height: 100%;
  width: 200px;
  padding-top: 1.5rem;
}
.menu-header {
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
}
.logo-img {
  width: 3rem;
}
.menu-label {
  text-align: center;
  color: $whiteColor;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 0.8rem;
}
.menu-label:not(:first-child) {
  margin-top: 0em;
}
.text-menu {
  color: $whiteColor;
  margin: 1rem;
  list-style-type: none;
  :hover {
    color: $secondaryColor;
  }
}
.text-name {
  display: flex;
  justify-content: center;
  color: $secondaryColor;
  margin: 1rem;
}
.text-login {
  display: flex;
  justify-content: center;
  color: $whiteColor;
  margin: 1rem;
  list-style-type: none;
  :hover {
    color: $secondaryColor;
  }
}
.version {
  text-align: center;
  color: $whiteColor;
  margin: 1rem;
  font-size: 0.6rem;
}
.mobile {
  .container {
    position: static;
  }
  .container-mobile {
    width: 100%;
    height: 120px;
    background-color: $primaryColor;
  }
  .menu-header {
    margin: 0;
  }
  .text-menu {
    font-size: 0.9rem;
  }
  .list-menu {
    display: flex;
    justify-content: space-between;
  }
}
</style>
