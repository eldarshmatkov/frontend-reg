import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home' //switched to lazy load
// import About from '@/components/About' //switched to lazy load
// import Whatever from '@/components/Whatever' //switched to lazy load

const Home = resolve => {
    require.ensure(['@/components/Pages/Home.vue'], () => {
        resolve(require('@/components/Pages/Home.vue'));
}, 'home');
}

const About = resolve => {
    require.ensure(['@/components/Pages/About.vue'], () => {
        resolve(require('@/components/Pages/About.vue'));
}, 'about');
}

const Whatever = resolve => {
    require.ensure(['@/components/Pages/Whatever.vue'], () => {
        resolve(require('@/components/Pages/Whatever.vue'));
}, 'whatever');
}

Vue.use(Router)

export default new Router({
	mode: 'history',
	linkActiveClass: "active",
	routes: [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/whatever',
		name: 'Whatever',
		component: Whatever
	},
	{ path: '*', redirect: '/' }
	]
})
