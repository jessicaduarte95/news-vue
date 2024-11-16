<template>
  <div class="container-onboarding">
    <div class="cards">
      <div class="card-onboarding"></div>
      <div class="card-onboarding"></div>
    </div>
    <div class="cards">
      <div class="card-onboarding"></div>
      <div class="card-onboarding"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnboardingView",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.container-onboarding {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-top: 1.5rem;
  background-color: $grayColor;
  gap: 5rem;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
}

.card-onboarding {
  display: flex;
  flex-direction: row;
  background-color: $whiteColor;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  width: 40%;
  height: 20rem;
}

.mobile {
  .container-onboarding {
    padding: 3.5rem 0rem 3.5rem 0rem;
    gap: 2.5rem;
  }
  .cards {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
  .card-onboarding{
    width: 20rem;
  }
}
</style>
