import Vue from 'vue'
import Router from 'vue-router'

import MyAnimation from '@/components/animation'
import MyMenu from '@/components/menu'
import MySvg from '@/components/svg'

Vue.use(Router)

export default new Router({
	routes:[{
		path:'/myAnimation',
		component:MyAnimation		
	},
	{
		path:'/myMenu',
		component:MyMenu
	},
	{
		path:'/mySvg',
		component:MySvg
	}]
})