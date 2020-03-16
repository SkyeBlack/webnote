<template>
  <div class="read-md-demo">
    read MarkDown
    <markdown-it-vue class="read-md-demo" :content="content" />
    <markdown-it-vue class="read-md-demo" :content="md" />
  </div>
</template>
<script>
import MarkdownItVue from "markdown-it-vue";
import "markdown-it-vue/dist/markdown-it-vue.css";
export default {
  name: "readMD",
  components: {
    MarkdownItVue
  },
  data() {
    return {
      content: "# your markdown content",
      publicPath: process.env.BASE_URL,
      md: ""
    };
  },
  created() {
    this.$axios.get(`${this.publicPath}static/network.md`).then(data => {
      console.log(data);
      this.md = data.data;
    });
  }
};
</script>
<style scoped>
.read-md-demo {
  color: white;
}
</style>