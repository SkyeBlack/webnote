<template>
  <div id="mymenu">
    <div class="horizontalMenu" v-show="isHorizontal" :class="{'horizontal-scroll':isScroll}">
      <ul>
        <li>Home</li>
        <li>Footer</li>
        <li class="dropdown">
          FAQ
          <ul class="dropdown-content" :class="{'horizontal-dropdown-scroll':isScroll}">
            <li>Question one</li>
            <li>Question two</li>
          </ul>
        </li>
        <li class="dropdown">
          Language
          <ul class="dropdown-content" :class="{'horizontal-dropdown-scroll':isScroll}">
            <li>中文</li>
            <li>English</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="verticalMenu" v-show="!isHorizontal">
      <div class="vertical-header">
        <button class="vertical-button" @click="ShowMenu">
          <img src="../assets/img/menu32x32.png" />
        </button>
      </div>
      <div class="vertical-menu" :style="{height:verticalMenuHeight}">
        <ul>
          <li class="vertial-menu-item1">Home</li>
          <li class="vertial-menu-item1 dropdown">
            <a @click="showSubMenu($event)">Language</a>
            <ul class="dropdown-content" :class="{'sub-menu-open':subOpen}">
              <li>中文</li>
              <li>English</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mymenu",
  data() {
    return {
      isHorizontal: true,
      isScroll: false,
      showVerticalMenu: false,
      verticalMenuHeight: 0,
      subOpen: false
    };
  },
  mounted() {
    let _that = this;
    window.onresize = () => {
      return (() => {
        _that.MenuChange();
      })();
    };
    _that.MenuChange();

    window.addEventListener("scroll", function() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 40) {
        _that.isScroll = true;
      } else {
        _that.isScroll = false;
      }
    });
  },
  methods: {
    MenuChange: function() {
      if (document.documentElement.clientWidth > 992) {
        this.isHorizontal = true;
      } else {
        this.isHorizontal = false;
      }
    },
    ShowMenu: function() {
      this.showVerticalMenu = !this.showVerticalMenu;
      let verticalMenuItem1 = document.getElementsByClassName(
        "vertial-menu-item1"
      ).length;
      if (this.showVerticalMenu) {
        this.verticalMenuHeight = 38 * verticalMenuItem1 + "px";
      } else {
        this.verticalMenuHeight = 0;
        this.subOpen = false;
      }
    },
    showSubMenu: function(e) {
      this.subOpen = !this.subOpen;
      let verticalMenuItem1 = document.getElementsByClassName(
        "vertial-menu-item1"
      ).length;
      let subChildCount = e.target.parentNode.children[1].childNodes.length;
      if (this.subOpen) {
        this.verticalMenuHeight =
          38 * (verticalMenuItem1 + subChildCount) + "px";
      } else {
        this.verticalMenuHeight = 38 * verticalMenuItem1 + "px";
      }
    }
  }
};
</script>
<style scoped>
#mymenu {
  color: #fff;
}

ul {
  padding: 0;
  margin: 0;
}

.horizontalMenu .dropdown-content {
  display: none;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;  
  background-color: #3c3c3c;
  border-radius: 5px; 
}

.horizontalMenu .dropdown-content li {
  white-space: nowrap;
}

.horizontalMenu li {
  display: inline-block;
  margin: 0 10px;
  position: relative;
}

.horizontalMenu li:hover:after {
  width: 100%;
}

.horizontalMenu li::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  background: #fff;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease;
}

.horizontalMenu .dropdown {
  position: relative;
  display: inline-block;
}

.horizontalMenu li {
  line-height: 38px;
}

.horizontalMenu .dropdown:hover .dropdown-content {
  display: block;
}

.horizontal-scroll {
  background-color: lightslategrey;
}

.horizontal-dropdown-scroll {
  background-color: #4d565f !important;
}

.vertical-header {
  display: flex;
  justify-content: flex-end;
}

.vertical-button {
  background-color: transparent;
  border: none;
  outline: 0;
}

.vertical-menu {
  overflow-y: hidden;
  transition: height 1s;
}

.verticalMenu li {
  height: 38px;
  line-height: 38px;
  list-style: none;
}

.vertical-menu .dropdown-content li{
  margin-left: 20px;
}
</style>