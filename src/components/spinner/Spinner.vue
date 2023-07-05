<template>
    <div class="c-spinner" :class="[classes]">
        <div class="progress-track" :style="{borderColor:props.trackColor, animationDuration: props.speed}"/>
        <div class="progress" :style="{borderColor:props.progressColor, animationDuration: props.speed}"/>
        <div class="progress-half" :style="{borderColor:props.progressColor, animationDuration: props.speed}"/>
    </div>
</template>

<script setup lang="ts" name="c-spinner">
import { computed } from 'vue';

const props = defineProps({
    trackColor: {
        type: String,
        default: '#c2c2c2',
    },
    progressColor: {
        type: String,
        default: 'black',
    },
    size: {
        type: String,
        default: 'medium'
    },
    speed: {
        type: String,
        default: 1
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


$spinner-half-width: calc($spinner-width / 2);
$spinner-half-height: calc($spinner-height / 2);
$spinner-half-width-small: calc($spinner-width-small / 2);
$spinner-half-height-small: calc($spinner-height-small / 2);
$spinner-half-width-large: calc($spinner-width-large / 2);
$spinner-half-height-large: calc($spinner-height-large / 2);
$spinner-border-width: 5px;
.c-spinner {
    width: $spinner-width;
    height: $spinner-height;
    
    border-radius: 50%;
    display: inline-block;
    
    position: relative;

    &.is-small {
        width: $spinner-width-small;
        height: $spinner-height-small;
        .progress {
            width: $spinner-half-width-small;
            height: $spinner-height-small;
            border-width: calc($spinner-border-width - 1px);
        }
        .progress-half {
            width: $spinner-half-width-small;
            height: $spinner-half-height-small;
            border-width: calc($spinner-border-width - 1px);
        }
        .progress-track {
            width: $spinner-width-small;
            height: $spinner-height-small;
            border-width: calc($spinner-border-width - 1px);
        }
    }

    &.is-large {
        width: $spinner-width-large;
        height: $spinner-height-large;
        .progress {
            width: $spinner-half-width-large;
            height: $spinner-height-large;
            border-width: calc($spinner-border-width + 1px);
        }
        .progress-half {
            width: $spinner-half-width-large;
            height: $spinner-half-height-large;
            border-width: calc($spinner-border-width + 1px);
        }
        .progress-track {
            width: $spinner-width-large;
            height: $spinner-height-large;
            border-width: calc($spinner-border-width + 1px);
        }
    }

    .progress {
        position: absolute;
        top: 0;
        left: 0;

        width: $spinner-half-width;
        height: $spinner-height;

        background-color: transparent;
        border-radius: 100% 0 0 100% / 50% 0 0 50%;
        border: $spinner-border-width solid;
        border-right: none;

        -webkit-transform-origin: 100% 50%;
        -ms-transform-origin: 100% 50%;
        transform-origin: 100% 50%;

        animation: spin 1s linear infinite;
    }
    .progress-half {
        position: absolute;
        top: 0;
        right: 0;

        width: $spinner-half-width;
        height: $spinner-half-height;

        background-color: transparent;
        border-radius: 0 100% 0 0 / 0 100% 0 50%;
        border: $spinner-border-width solid;
        border-left: none;
        border-bottom: none;

        -webkit-transform-origin: 0% 100%;
        -ms-transform-origin: 0% 100%;
        transform-origin: 0% 100%;

        animation: spin 1s linear infinite;
    }

    .progress-track {
        position: absolute;
        top: 0;
        left: 0;

        width: $spinner-width;
        height: $spinner-height;

        border-radius: 100%;
        border: $spinner-border-width solid;
    }
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
</style>