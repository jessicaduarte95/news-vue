<template>
  <div class="container-posts">
    <div class="header">
      <h1 class="title">Postagens</h1>
      <div class="search">
        <b-field>
          <b-input v-model="nome" placeholder="Pesquise aqui...."></b-input>
        </b-field>
        <b-field>
          <b-datepicker
            placeholder="Selecione uma data"
            icon="calendar-today"
            :locale="locale"
            editable
          >
          </b-datepicker>
        </b-field>
      </div>
    </div>
    <div class="post">
      <img
        :src="require('@/assets/img/onboardingImg4.png')"
        alt="Imagem de fundo"
      />
      <div class="data-post">
        <p>Jéssica Duarte</p>
        <p>18/11//2024</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostsView",
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/variables";

.container-posts {
  height: 100%;
  width: 100%;
  padding: 5% 20% 5% 20%;
  background-color: $grayColor;
}

.title {
  font-size: 3.5rem;
}

.search {
  display: flex;
  width: 100%;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.field {
  width: 20rem;
}

.post {
  display: flex;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  background-color: $whiteColor;
}

img {
  width: 20%;
  height: 20%;
}

.data-post {
  margin-left: 1rem;
}

p {
  color: $quarternaryColor;
}

.mobile {
  .container-posts {
    padding: 2rem;
    width: auto;
  }
  .search {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .field {
    width: 100%;
    margin-right: 2rem;
  }
  .post {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  img {
    width: 15rem;
    height: 15rem;
  }
}
</style>
