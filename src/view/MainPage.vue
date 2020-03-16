<template>
  <div id="MainPage">
    <div class="flex-container">
      <header class="header">头部</header>
      <aside class="aside aside-menu">
        <dl>
          <dt :class="{'aside-menu-item-active':menuItemActive == 'animation'}">
            <a href="#" @click="menuChange('animation')">animation</a>
          </dt>
          <dt :class="{'aside-menu-item-active':menuItemActive == 'menu'}">
            <a href="#" @click="menuChange('menu')">menu</a>
          </dt>
          <dt :class="{'aside-menu-item-active':menuItemActive == 'svg'}">
            <a href="#" @click="menuChange('svg')">svg</a>
          </dt>
          <dt :class="{'aside-menu-item-active':menuItemActive == 'readfile'}">
            <a href="#" @click="menuChange('readfile')">read file</a>
          </dt>
          <dt :class="{'aside-menu-item-active':menuItemActive == 'readMD'}">
            <a href="#" @click="menuChange('readMD')">read MarkDown</a>
          </dt>
        </dl>
      </aside>
      <div class="content">
        <router-view></router-view>
      </div>
      <footer class="footer">底部</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      menuItemActive: ""
    };
  },
  methods: {
    menuChange: function(val) {
      if (this.menuItemActive == val) return;
      switch (val) {
        case "animation":
          this.menuItemActive = "animation";
          this.$router.push("/myAnimation");
          break;
        case "menu":
          this.menuItemActive = "menu";
          this.$router.push("/myMenu");
          break;
        case "svg":
          this.menuItemActive = "svg";
          this.$router.push("/mySvg");
          break;
        case "readfile":
          this.menuItemActive = "readfile";
          this.$router.push("/myReadFile");
          break;
        case "readMD":
          this.menuItemActive = "readMD";
          this.$router.push("/myReadMD");
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.flex-container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
}

.flex-container > * {
  flex: 1 100%;
}

.header {
  height: 60px;
  line-height: 60px;
  background-color: #3c3c3c;
  color: #fff;
}

.aside-menu {
  min-height: calc(100vh - 120px);
  background-color: #333333;
  color: #fff;
}

.content {
  padding: 10px;
  text-align: left;
  background: #252526;
}

.footer {
  height: 60px;
  line-height: 60px;
  background-color: #3c3c3c;
  color: #fff;
}

@media all and (min-width: 768px) {
  .aside {
    flex: 1 auto;
  }
}

@media all and (min-width: 992px) {
  .content {
    flex: 3 0px;
  }
  .aside-menu {
    order: 1;
  }
  .content {
    order: 2;
  }
  .footer {
    order: 4;
  }
}

dl {
  margin: 0;
}

.aside-menu dt:hover {
  background-color: #2d2b2b;
}

.aside-menu-item-active {
  background-color: #252526;
}

.aside-menu a {
  display: block;
  height: 50px;
  line-height: 50px;
  color: #fff;
  text-decoration-line: none;
  -moz-text-decoration-line: none;
  border-bottom: 1px solid #252526;
}
</style>