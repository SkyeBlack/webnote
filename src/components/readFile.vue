<template>
  <div class="read-file-demo">
    <h4>read static file</h4>
    <img :src="`${publicPath}static/data.png`" />
  </div>
</template>
<script>
export default {
  name: "myreadFile",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  beforeMount() {
    this.$axios.get(`${this.publicPath}static/data.json`).then(data => {
      console.log(data);
    });
  }
};
</script>
<style lang="scss">
.read-file-demo {
  color: white;
}
</style>