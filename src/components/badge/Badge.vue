<template>
	<div 
		class="c-badge"
		:class="[classes]"
	>
		{{ textValue }}
	</div>
</template>

<script setup lang="ts" name="c-badge">
import { computed } from 'vue'

const props = defineProps<{
    textValue: '',
	variant: 'primary' | 'success' | 'danger',
	size: 'small' | 'medium' | 'large',
    rounded: false,
}>()

const classes = computed(() => {
    return {
		'is-success': props.variant === 'success',
		'is-danger': props.variant === 'danger',
        'is-rounded': props.rounded,
        'small': props.size === 'small',
        'large': props.size === 'large',
    }
})
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

.c-badge {
	display: inline-flex;
	justify-content: center;
	align-items: center;

	border: 1px solid $c-default-border-color;
	border-radius: $c-border-radius;

	font-size: 13px;

	height: 20px;
	padding: 0 8px;

	background-color: $c-primary-color;
	color: $c-white-color;

	&.small {
		height: 15px;
		padding: 0 7px;

		font-size: 11px;
	}
	
	&.large {
		height: 23px;
		padding: 0 10px;

		font-size: 14px;
	}
	&.is-success {
		background-color: $c-success-color;
	}
	&.is-danger {
		background-color: $c-danger-color;
	}

	&.is-rounded {
		border-radius: $c-rounded-border-radius;
	}
}
</style>