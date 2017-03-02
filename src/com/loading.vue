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
	.loading { border-radius: 4px; padding: 20px; }
	.shadow { padding: 20px; max-width: 240px; }
    .circle { width: 36px; height: 36px; border: 4px solid #ffffff; }
	.spin { margin-bottom: 10px; animation: spin 1s infinite linear; }
	.clip { top: -4px; left: -4px; color: #fcb56e; border-color: #fcb56e; clip: rect(0 24px 6px 12px); }
</style>