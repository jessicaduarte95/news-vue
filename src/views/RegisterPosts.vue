<template>
  <div class="container-register-posts">
    <div class="header">
      <h1 class="title">Cadastro de Posts</h1>
    </div>
    <div class="card">
      <div class="register-content">
        <form id="formRegisterPosts">
          <div id="editor">
            <vue2-tinymce-editor
              v-model="content"
              :height="600"
            ></vue2-tinymce-editor>
          </div>
        </form>
      </div>
    </div>
    <div class="container-button">
      <b-button class="button-confirm" @click="submitForm">Salvar</b-button>
    </div>
  </div>
</template>
<script>
import { Vue2TinymceEditor } from "vue2-tinymce-editor";
import { mapActions } from "vuex";

export default {
  name: "RegisterPosts",
  components: {
    Vue2TinymceEditor,
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    ...mapActions("post", ["createPost"]),
    submitForm() {
      this.createPost({ payload: { content: this.content }, vm: this });
      this.$router.push('/posts')
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/variables";

.container-register-posts {
  height: 100%;
  padding: 5% 10% 5% 10%;
  background-color: $grayColor;
}
.header {
  margin-bottom: 30px;
}
.title {
  font-size: 3rem;
}
.container-button {
  display: flex;
  justify-content: end;
  margin-top: 20px;
  width: 100%;
}
.button-confirm {
  width: 200px;
}
.mobile {
  .title {
    text-align: center;
  }
  .container-button {
    display: flex;
    justify-content: center;
  }
}
</style>
