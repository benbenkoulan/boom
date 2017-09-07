<template>
	<div class="df page">
		<top :title="'我的'"></top>
		<a class="dib notepad2" href="/notepad.htm">记事本2</a>
		<a class="dib notepad3" href="/notepad.htm">记事本3</a>
		<a class="dib notepad1" href="/notepad.htm">记事本1</a>
		<bottom :index="3"></bottom>
	</div>
</template>
<script>
	import top from '../com/top';
	import bottom from '../com/bottom';
	export default {
		components: { top, bottom },
		title: '我的账户'
	}
</script>
<style scoped>
	.page { justify-content: center; align-items: center; flex-direction: row; }
	a { margin: 0.5rem; padding: 0.5rem 0.2rem 0 0.2rem; border: 1px solid #cccccc; background: url(../../img/notepad.svg) no-repeat; background-size: 0.5rem; background-position: center top; }
	.notepad2 { order: 2; }
	.notepad3 { order: 3; }
	.notepad1 { order: 1; }
</style>