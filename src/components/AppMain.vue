<template>
  <section id="div-app-main" class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  flex: 1;
  overflow-y: auto;
  box-sizing: border-box;
  margin-left: 200px;
}

.mobile {
  .app-main {
    flex: unset;
    box-sizing: unset;
    margin-left: 0;
    height: 100%;
  }
}
</style>
