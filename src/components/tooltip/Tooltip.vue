<template>
    <div 
        class="c-tooltip"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
    >
        <slot/>
        <div 
            ref="tooltipItem"
            class="c-tooltip-item"
            :class="tooltipItemClass"
        >
            {{ text }}
        </div>
        <div 
            ref="tooltipArrow" 
            class="c-tooltip-arrow" 
            :class="tooltipItemClass"
        />
    </div>
</template>

<script setup lang="ts" name="c-tooltip">
import { computed, ref } from 'vue'

const props = defineProps({
    text: {
        type: String,
        default: '',
    },
    animated: {
        type: Boolean,
        default: true,
    },
    isLeft: {
        type: Boolean,
        default: false,
    },
    isRight: {
        type: Boolean,
        default: false,
    },
    isBottom: {
        type: Boolean,
        default: false,
    },
    rounded: {
        type: Boolean,
        default: false,
    }
})

const visible = ref<boolean>(false);
const sLeft = ref<boolean>(props.isLeft);
const sRight = ref<boolean>(props.isRight);
const sBottom = ref<boolean>(props.isBottom);

const tooltipItem = ref<HTMLDivElement>();
const tooltipArrow = ref<HTMLDivElement>();

const tooltipItemClass = computed(() => {
    return {
        'is-animation': props.animated,
        'is-left': sLeft.value,
        'is-right': sRight.value,
        'is-bottom': sBottom.value,
        'is-rounded': props.rounded,
        'is-visible': visible.value,
    }
})

const visibleTooltip = (bool: boolean) => {
    visible.value = bool
}

const mouseEnter = () => {
    visibleTooltip(true);
    let tooltip = tooltipItem.value;
    if (tooltipArrow.value) {
        tooltipArrow.value.style.visibility = 'visible';
    }
    if (tooltip) {
        const rect = tooltip.getBoundingClientRect();
        if(rect.x < 0) {
            // 왼쪽으로 나갔을 때
            if(sLeft.value) {
                sRight.value = true;
                sLeft.value = false;
                sBottom.value = false;
            } else {
                tooltip.style.left = `calc(50% + ${-rect.x + 5}px)`
            }
        } else if(rect.right > window.innerWidth) {
            // 오른쪽으로 나갔을 때
            if(sRight.value) {
                sLeft.value = true;
                sRight.value = false;
                sBottom.value = false;
            } else {
                const changeX = window.innerWidth - rect.right;
                tooltip.style.left = `calc(50% + ${changeX - 10}px)`
            }
        }
    }
}

const mouseLeave = () => {
    visibleTooltip(false);
    if (tooltipArrow.value) tooltipArrow.value.style.visibility = 'hidden';
}
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

.c-tooltip {
    position: relative;
    display: inline-block;

    .c-tooltip-arrow {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        border: 9px solid transparent;
        border-bottom-width: 0;
        border-top-color: $c-primary-color;
        bottom: calc(100% + 5px);
        left: 50%;
        transform: translateX(-50%);
        
        z-index: 99;

        &.is-visible {
            visibility: visible;
            opacity: 1;
        }

        &.is-animation {
            transition: opacity .5s;
        }

        &.is-left {
            top: 50%;
            left: unset;
            right: calc(100% + 8px);
            border-right-width: 0;
            border-right-color: $c-primary-color;
            transform: translateY(-50%) rotate(45deg);
        }

        &.is-right {
            top: 50%;
            left: calc(100% + 10px);
            border-left-width: 0;
            border-left-color: $c-primary-color;
            transform: rotate(-45deg) translateY(-50%);
        }

        &.is-bottom {
            top: calc(100% + 5px);
            border-top-width: 0;
            border-bottom-width: 10px;
            border-bottom-color: $c-primary-color;
        }
    }

    .c-tooltip-item {
        visibility: hidden;
        opacity: 0;
        background-color: $c-primary-color;
        
        white-space: nowrap;
        text-align: center;
        
        position: absolute;
        // top: -35px;
        bottom: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%);
        
        width: auto;
        height: auto;
        padding: 3px 10px;

        z-index: 999;

        &.is-visible {
            visibility: visible;
            opacity: 1;
        }

        &.is-animation {
            transition: opacity .5s;
        }

        &.is-left {
            top: 50%;
            transform: translateY(-50%);
            right: calc(100% + 10px);
            left: unset;
            bottom: unset;
        }

        &.is-right {
            top: 50%;
            left: calc(100% + 10px);
            transform: translateY(-50%);
            bottom: unset;
        }

        &.is-bottom {
            top: calc(100% + 10px);
            bottom: unset;
        }

        &.is-rounded {
            border-radius: $c-border-radius;
        }
    }
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>