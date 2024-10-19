import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import router from './router';
import store from './store/store';
import 'buefy/dist/buefy.css';
import './assets/styles/_app.scss';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Buefy, {
	defaultIconPack: 'fas'
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
