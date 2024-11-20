import Vue from 'vue';
import VueRouter from 'vue-router';
import OnboardingView from './views/OnboardingView.vue'
import RegisterView from './views/RegisterView.vue'
import PostsView from './views/PostsView.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: OnboardingView
		},
		{
			path: '/register',
			component: RegisterView
		},
		{
			path: '/posts',
			component: PostsView
		},
		{
			path: '*',
			redirect: '/'
		}
	]
});

export default router;
