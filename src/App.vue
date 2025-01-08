<template>
  <div id="app">
    <MenuComponent class="menu" />
    <AppMain />
  </div>
</template>

<script>
import MenuComponent from "./components/MenuComponent.vue";
import AppMain from "./components/AppMain.vue";
import { mapActions } from "vuex";

import AuthService from "./services/auth.service";

const { body } = document;
const WIDTH = 1000;

export default {
  name: "App",
  components: {
    MenuComponent,
    AppMain,
  },
  created() {
    this.checkDevice();
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      AuthService.startRefreshTokenTimer();
    }
  },
  mounted() {
    window.addEventListener("resize", this.checkDevice);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkDevice);
  },
  methods: {
    ...mapActions(["toggleDevice"]),
    checkDevice() {
      const isMobile = this.$_isMobile();
      this.toggleDevice(isMobile ? "mobile" : "desktop");

      if (isMobile) {
        document.body.classList.add("mobile");
      } else {
        document.body.classList.remove("mobile");
      }
    },
    $_isMobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
  },
};
</script>
