import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import router from './router';
import 'buefy/dist/buefy.css';
import './assets/styles/_app.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/styles/_app.scss';

Vue.use(Buefy, {
	defaultIconPack: 'fas'
});

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
