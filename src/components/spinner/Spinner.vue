<template>
    <div class="c-spinner-wrapper" :class="[classes]">
        <div class="c-spinner" :style="{backgroundColor: props.color, animationDuration: props.speed}"></div>
    </div>
</template>

<script setup lang="ts" name="c-spinner">
import { computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: '#c2c2c2',
    },
    size: {
        type: String,
        default: 'medium'
    },
    speed: {
        type: String,
        default: '1s'
    }
})

const classes = computed(() => {
    return {
        'is-small': props.size === 'small',
        'is-large': props.size === 'large',
    }
})

</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
$spinner-width: 35px;
$spinner-height: 35px;

$spinner-width-small: 25px;
$spinner-height-small: 25px;

$spinner-width-large: 45px;
$spinner-height-large: 45px;

.c-spinner-wrapper {
    width: $spinner-width;
    height: $spinner-height;
    
    border-radius: 50%;

    display: inline-block;
    place-content: center;
    .c-spinner {
        width: $spinner-width;
        padding: 5px;
        background: #c2c2c2;
        border-radius: 50%;
        aspect-ratio: 1;

        mask: var(--_m);
        --_m: conic-gradient(#0000,#000), linear-gradient(#000 0 0) content-box;
        -webkit-mask: var(--_m);
        -webkit-mask-composite: source-out;
        mask-composite: subtract;
        box-sizing: border-box;
        animation: spin linear infinite;
    }

    &.is-small {
        width: $spinner-width-small;
        height: $spinner-width-small;
        .c-spinner {
            width: $spinner-width-small;
            padding: 3px;
        }
    }

    &.is-large {
        width: $spinner-width-large;
        height: $spinner-height-large;
        .c-spinner {
            width: $spinner-width-large;
            padding: 6px;
        }
    }
}
@keyframes spin {
    to{transform: rotate(1turn)}
}
</style>