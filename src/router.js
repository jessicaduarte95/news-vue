import Vue from 'vue';
import VueRouter from 'vue-router';
import OnboardingView from './views/OnboardingView.vue'
import RegisterView from './views/RegisterView.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '/onboarding',
			component: OnboardingView
		},
		{
			path: '/register',
			component: RegisterView
		},
		// {
		// 	path: '*',
		// 	redirect: '/'
		// }
	]
});

export default router;
