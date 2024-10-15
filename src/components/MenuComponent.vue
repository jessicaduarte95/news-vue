<template>
  <b-menu class="container-menu" v-if="isActive">
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
        class="text"
        @click="redirectRoute('/onboarding')"
      ></b-menu-item>
      <b-menu-item
        label="Cadastro"
        icon="pen-to-square"
        class="text"
        @click="redirectRoute('/')"
      ></b-menu-item>
      <b-menu-item
        label="Postagens"
        icon="file"
        class="text"
        @click="redirectRoute('/')"
      ></b-menu-item>
    </div>
    <p class="version">1.0.0</p>
  </b-menu>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    redirectRoute(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #121f2f;
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
  color: #fefefe;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 0.8rem;
}

.menu-label:not(:first-child) {
  margin-top: 0em;
}

.text {
  color: #fefefe;
  margin: 1rem;
  list-style-type: none;
  :hover {
    color: #f7b176;
  }
}

.version {
  text-align: center;
  color: #fefefe;
  margin: 1rem;
  font-size: 0.6rem;
}
</style>
