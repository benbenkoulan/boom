<template>
	<pop-panel :show="show" :semi="false">
		<div class="bg-semi bsbb c-white loading">
			<div class="bsbb dib pr circle spin">
                <div class="bsbb pa circle clip"></div>
            </div>
            <p>{{msg}}</p>
		</div>
	</pop-panel>
</template>
<script>
	import popPanel from './popPanel';
	export default {
		components: { popPanel },
		props: {
			show: {
				type: Boolean,
				default: false
			},
			msg: {
				type: String,
				default: '载入中，请稍候~~'
			}
		}
	}
</script>
<style scoped>
	@keyframes spin {
		from { transform: rotate(0) }
		to { transform: rotate(360deg) }
	}
	.loading { border-radius: 0.1rem; padding: 0.5rem; }
	.shadow { padding: 0.5rem; max-width: 4rem; }
    .circle { width: 1rem; height: 1rem; border: 0.1rem solid #ffffff; }
	.spin { margin-bottom: 0.2rem; animation: spin 1s infinite linear; }
	.clip { top: -0.1rem; left: -0.1rem; color: #fcb56e; border-color: #fcb56e; clip: rect(0 0.5rem 0.2rem 0); }
</style>