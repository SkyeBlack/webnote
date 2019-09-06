<template>
  <div id="mymenu">
    <div class="horizontalMenu" v-show="isHorizontal" :class="{'horizontal-scroll':isScroll}">
      <ul>
        <li>Home</li>
        <li class="dropdown">
          Language
          <ul class="dropdown-content" :class="{'horizontal-scroll':isScroll}">
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
            Language
            <ul class="dropdown-content">
              <li>中文</li>
              <li>English</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- <Header id="mainHeader" class="layout-header" :class="{'layout-header-scroll':isScroll}">
			<img class="layout-logo" src="../assets/img/logo-bhpay-01.png" v-if="isScroll" />
			<img class="layout-logo" src="../assets/img/logo-bhpay-03.png" v-else />
			<div>
				<Menu mode="horizontal" theme="light" active-name="horizontalMenu" accordion @on-select="MenuSelect" class="layout-menu" :class="{'layout-menu-scroll':!isScroll}">
					<MenuItem class="layout-nav-item" name="home">
					{{$t('Home')}}
					</MenuItem>
					<Submenu class="layout-nav-item" name="language" :class="{'layout-nav-scroll':!isScroll}">
						<template slot="title">{{$t('HomeMenuLanguage')}}</template>
						<MenuItem class="layout-nav-item" name="zh-cn">
						中文
						</MenuItem>
						<MenuItem class="layout-nav-item" name="en-us">
						English
						</MenuItem>
					</Submenu>
				</Menu>
			</div>
		</Header>
		<Header id="mainHeader">
			<div class="header-vertical">
				<img class="layout-logo" src="../assets/img/logo-bhpay-01.png" />
				<Button type="text" v-if="!isHorizontal" @click="ShowMenu">
					<img src="../assets/img/menu32x32.png" />
				</Button>
			</div>
			<div class="menu-container">
				<Menu mode="vertical" theme="light" active-name="verticalMenu" accordion @on-select="MenuSelect" @on-open-change="SubmenuOpen" class="menu-control" :style="{height:menuHeight}">
					<MenuItem class="layout-nav-item" name="home">
					{{$t('Home')}}
					</MenuItem>				
					<Submenu class="layout-nav-item language" name="language">
						<template slot="title">{{$t('HomeMenuLanguage')}}</template>
						<MenuItem class="layout-nav-item" name="zh-cn">
						中文
						</MenuItem>
						<MenuItem class="layout-nav-item" name="en-us">
						English
						</MenuItem>
					</Submenu>
				</Menu>
			</div>
    </Header>-->
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
      verticalMenuHeight: 0
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
      let verticalMenuItem1 = document.getElementsByClassName('vertial-menu-item1').length;      
      if (this.showVerticalMenu) {
        this.verticalMenuHeight = 38 * verticalMenuItem1 + "px";
      } else {
        this.verticalMenuHeight = 0;
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

.dropdown-content {
  display: none;
  position: absolute;
  top: 40px;
}

.horizontalMenu li {
  display: inline;
  padding: 10px;
}

.horizontalMenu li:hover {
  border-bottom: 2px solid #fff;
}

.horizontalMenu .dropdown {
  position: relative;
  display: inline-block;
}

.horizontalMenu .dropdown-content li {
  line-height: 38px;
}

.horizontalMenu .dropdown:hover .dropdown-content {
  display: block;
}

.horizontal-scroll {
  background-color: lightslategrey;
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

.vertical-menu{
 overflow-y: hidden;
 transition: height 1s;
}

.verticalMenu li {
  height: 38px;
  line-height: 38px;
  list-style: none;
}

.verticalMenu .dropdown {
  position: relative;
  display: inline-block;
}

.verticalMenu .dropdown:hover .dropdown-content {
  display: block;
}
</style>