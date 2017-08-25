<template>
	<svg class="spinner roll" width="64px" height="64px" viewBox="0 0 64 64">
		<circle class="path" fill="none" stroke-width="4" stroke-linecap="round" cx="30" cy="30" r="30"></circle>
	</svg>
</template>
<style>
	.spinner .path { stroke: #f60; stroke-dasharray: 90; }
	@keyframes roll {
		from { transform: rotate(0); }
		to { transform: rotate(360deg); }
	} 

	.roll {
		animation: roll 1s linear infinite;
	}
</style>