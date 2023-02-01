<template>
	<div 
		class="c-tag"
		:class="[classes]"
	>
		{{ textValue }}
	</div>
</template>

<script setup lang="ts" name="c-tag">
import { computed } from 'vue'

const props = defineProps({
    textValue: {
        type: String,
        default: '',
    },
    isPrimary: {
        type: Boolean,
        default: true,
    },
    isSuccess: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        default: 'medium'
    },
    rounded: {
        type: Boolean,
        default: false,
    },
})

const classes = computed(() => {
    return {
        'is-primary': props.isPrimary,
        'is-success': props.isSuccess,
        'is-rounded': props.rounded,
        'small': props.size === 'small',
        'large': props.size === 'large',
    }
})
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

.c-tag {
	display: inline-flex;
	justify-content: center;
	align-items: center;

	border: 1px solid $c-default-border-color;
	border-radius: $c-border-radius;

	font-size: 13px;

	height: 20px;
	padding: 0 8px;

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

	&.is-primary {
		background-color: $c-primary-color;
		color: $c-white-color;
	}

	&.is-success {
		background-color: $c-success-color;
		color: $c-white-color;
	}

	&.is-rounded {
		border-radius: $c-rounded-border-radius;
	}
}
</style>