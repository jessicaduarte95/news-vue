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

const { body } = document;
const WIDTH = 1000;

export default {
  name: "App",
  components: {
    MenuComponent,
    AppMain,
  },
  created() {
    const isMobile = this.$_isMobile();

    if (isMobile) {
      this.toggleDevice("mobile");
      document.body.classList.add("mobile");
    }
  },
  methods: {
    ...mapActions(["toggleDevice"]),
    $_isMobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
  },
};
</script>
