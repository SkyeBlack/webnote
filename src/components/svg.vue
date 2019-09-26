<template>
  <div class="svg-demo">
    <ul>
      <li v-for="(name, index) in name" :key="index">
        <svg-icon :iconClass="name"></svg-icon>
      </li>
    </ul>
  </div>
</template>
<script>
import svgIcon from "./svgIcon";
export default {
  name: "mysvg",
  components: { svgIcon },
  data() {
    return {
      name: ["wallet", "setting"]
    };
  }
};
</script>
<style lang="scss">
.svg-demo {
  text-align: center;
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 2;
  }
}
</style>