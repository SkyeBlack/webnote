<template>
  <div id="mymenu">
    <div class="horizontalMenu" v-show="isHorizontal">
      <ul>
        <li>Home</li>
        <li class="dropdown">
          Language
          <ul class="dropdown-content">
            <li>中文</li>
            <li>English</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="verticalMenu" v-show="!isHorizontal">
      <div class="vertical-header">
        <button class="vertical-button">
          <img src="../assets/img/menu32x32.png">
        </button>
      </div>      
      <ul>
        <li>Home</li>
        <li class="dropdown">
          Language
          <ul class="dropdown-content">
            <li>中文</li>
            <li>English</li>
          </ul>
        </li>
      </ul>
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
      isHorizontal: true
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
  },
  methods: {
    MenuChange: function() {
      if (document.documentElement.clientWidth > 992) {
        this.isHorizontal = true;
      } else {
        this.isHorizontal = false;
      }
    }
  }
};
</script>
<style scoped>
#mymenu {
  color: #fff;
}

.horizontalMenu li {
  display: inline;
  padding: 10px;
}

.horizontalMenu .dropdown {
  position: relative;
  display: inline-block;
}

.horizontalMenu .dropdown:hover .dropdown-content {
  display: block;
}

.horizontalMenu .dropdown-content {
  display: none;
  position: absolute;
}

.vertical-header{
  display: flex;
  justify-content: flex-end;
}

.vertical-button{
  background-color: transparent;
  border: none;
}

.vertical-button {
  outline: 0;
}

.verticalMenu li {
  padding: 10px;
}

.verticalMenu .dropdown {
  position: relative;
  display: inline-block;
}

.verticalMenu .dropdown:hover .dropdown-content {
  display: block;
}

.verticalMenu .dropdown-content {
  display: none;
  position: absolute;
}
</style>