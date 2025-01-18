import Vue from 'vue';
import VueRouter from 'vue-router';
import OnboardingView from './views/OnboardingView.vue'
import RegisterView from './views/RegisterView.vue'
import PostsView from './views/PostsView.vue'
import RegisterPosts from './views/RegisterPosts.vue'

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
			path: '/register-posts',
			component: RegisterPosts
		},
		{
			path: '*',
			redirect: '/'
		}
	]
});

export default router;
