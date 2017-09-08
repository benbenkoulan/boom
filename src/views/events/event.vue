<template>
	<div>{{event.title}}</div>
</template>
<script>
	export default {
		props: {
			event:{
				type: Object,
				default(){
					return {}
				}
			}
		}
	}
</script>