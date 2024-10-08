<template>
	<div id="app">
		<MenuComponent class="menu" />
		<AppMain />
	</div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';
import AppMain from './components/AppMain.vue';

export default {
	name: 'App',
	components: {
		MenuComponent,
		AppMain
	}
};
</script>

