import Vue from 'vue';
import VueRouter from 'vue-router';
import OnboardingView from './views/OnboardingView.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '/onboarding',
			component: OnboardingView
		},
		// {
		// 	path: '*',
		// 	redirect: '/'
		// }
	]
});

export default router;
