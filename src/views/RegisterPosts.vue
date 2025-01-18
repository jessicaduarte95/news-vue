<template>
  <div class="container-register-posts">
    <div class="card">
      <div class="register-content">
        <form id="formRegisterPosts"></form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RegisterPosts",
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/variables";

.container-register-posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  background-color: $grayColor;
}
</style>
