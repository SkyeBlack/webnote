<template>
  <div id="myanimation">
    <img src="../assets/img/me.jpg" class="animation-wobble" />
  </div>
</template>

<script>
export default {
  name: "myanimation"
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
.animation-wobble:hover {
  animation: wobble 2s infinite;
  -webkit-animation: wobble 2s infinite;
}
</style>
