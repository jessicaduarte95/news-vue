<template>
  <div class="container-register">
    <div class="card"></div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
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
  padding-top: 15rem;
  padding-bottom: 15rem;
  margin-left: 20rem;
  margin-right: 20rem;
  background-color: $whiteColor;
  border-radius: 1rem;
}

.mobile {
  .card {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}
</style>
