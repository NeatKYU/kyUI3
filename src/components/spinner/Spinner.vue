<template>
    <div class="c-spinner" :class="[classes]" :style="{backgroundColor: props.progressColor}">
        <div class="inner"></div>
        <div class="progress" :style="{backgroundColor: props.color, animationDuration: props.speed}">
            <div class="center"></div>
        </div>
    </div>
</template>

<script setup lang="ts" name="c-spinner">
import { defineProps, computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: 'black'
    },
    progressColor: {
        type: String,
        default: '#d1d1d1',
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
.c-spinner {
    width: $spinner-width;
    height: $spinner-width;
    
    /* background-color: darkgray; */
    border-radius: 50%;
    
    padding: 5px;
    
    position: relative;
    &.is-small {
        padding: 3px;
        width: $spinner-width-small;
        height: $spinner-height-small;
        .inner {
            width: calc($spinner-width-small - (3px * 2));
            height: calc($spinner-height-small - (3px * 2));
        }
        .progress {
            width: calc($spinner-width-small / 2);
            height: calc($spinner-height-small / 2);

            padding: 3px 0 0 3px;
            .center {
                width: calc($spinner-width-small - (4px * 2));
                height: calc(($spinner-height-small / 4) + 4px);
            }
        }
    }

    &.is-large {
        padding: 7px;

        width: $spinner-width-large;
        height: $spinner-height-large;

        .inner {
            width: calc($spinner-width-large - (7px * 2));
            height: calc($spinner-height-large - (7px * 2));
        }
        .progress {
            width: calc($spinner-width-large / 2);
            height: calc($spinner-height-large / 2);

            padding: 7px 0 0 7px;
            .center {
                width: calc($spinner-width-large - (8px * 2));
                height: calc(($spinner-height-large / 4) + 5px);
            }
        }
    }
    
    .inner {
        width: calc($spinner-width - (5px * 2));
        height: calc($spinner-height - (5px * 2));
        background-color: white;
        border-radius: 50%;
    }
    .progress {
        position: absolute;
        top: 0;
        left: 0;

        width: $spinner-half-width;
        height: $spinner-half-height;

        /* background-color: black; */
        border-radius: 100px 0 0 0;

        animation: spin 1s linear infinite;
        transform-origin: 100% 100%;

        padding: 5px 5px 0 5px;

        .center {
            position: absolute;

            width: calc($spinner-width - (5px * 2));
            height: calc(($spinner-half-height / 2) + 4px);

            border-radius: 200px 200px 0 0;

            background-color: white;
        }
    }
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
</style>