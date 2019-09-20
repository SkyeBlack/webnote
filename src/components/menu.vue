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
        <button class="vertical-button" @click="showMenu">
          <img src="../assets/img/menu32x32.png" />
        </button>
      </div>
      <div class="vertical-menu" :style="{height:verticalMenuHeight}">
        <ul>
          <li @click="hideSubMenu()">Home</li>
          <li @click="hideSubMenu()">Footer</li>
          <li class="vertical-dropdown">
            <a @click="showSubMenu($event)">FAQ</a>
            <ul class="vertical-dropdown-content">
              <li>Question one</li>
              <li>Question two</li>
            </ul>
          </li>
          <li class="vertical-dropdown">
            <a @click="showSubMenu($event)">Language</a>
            <ul class="vertical-dropdown-content">
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
      verticalMenuItem1: 0,
      verticalMenuHeight: 0,
      verticalDrop: ""
    };
  },
  mounted() {
    let _that = this;
    
    _that.verticalMenuItem1 = document.getElementsByClassName(
      "vertical-menu"
    )[0].children[0].childNodes.length;

    _that.verticalDrop = document.getElementsByClassName("vertical-dropdown");

    window.onresize = () => {
      return (() => {
        _that.menuChange();
      })();
    };
    _that.menuChange();

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
    menuChange: function() {
      if (document.documentElement.clientWidth > 992) {
        this.isHorizontal = true;
      } else {
        this.isHorizontal = false;
      }
      this.showVerticalMenu = false;
      this.hideSubMenu();
      this.verticalMenuHeight = 0;
    },
    showMenu: function() {
      this.showVerticalMenu = !this.showVerticalMenu;
      if (this.showVerticalMenu) {
        this.verticalMenuHeight = 38 * this.verticalMenuItem1 + "px";
      } else {
        this.hideSubMenu();
        this.verticalMenuHeight = 0;
      }
    },
    hideSubMenu: function() {
      Array.prototype.forEach.call(this.verticalDrop, function(el) {
        el.style.height = "38px";
      });
      this.verticalMenuHeight = 38 * this.verticalMenuItem1 + "px";
    },
    showSubMenu: function(e) {
      let isHide = false;
      if (
        e.target.parentNode.style.height != "" &&
        e.target.parentNode.style.height != "38px"
      ) {
        isHide = true;
      }

      this.hideSubMenu();

      if (isHide) {
        this.verticalMenuHeight = 38 * this.verticalMenuItem1 + "px";
      } else {
        let subChildCount = e.target.parentNode.children[1].childNodes.length;
        e.target.parentNode.style.height = 38 * (subChildCount + 1) + "px";
        this.verticalMenuHeight =
          38 * (this.verticalMenuItem1 + subChildCount) + "px";
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

.verticalMenu .vertical-dropdown {
  overflow-y: hidden;
  height: 38px;
  transition: height 1s;
}

.vertical-menu .vertical-dropdown-content li {
  margin-left: 20px;
}
</style>