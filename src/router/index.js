import Vue from 'vue'
import Router from 'vue-router'

import MyAnimation from '@/components/animation'
import MyMenu from '@/components/menu'

Vue.use(Router)

export default new Router({
	routes:[{
		path:'/myAnimation',
		component:MyAnimation		
	},
	{
		path:'/myMenu',
		component:MyMenu
	}]
})