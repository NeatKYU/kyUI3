<template>
    <component
        ref="cButton"
        :is="computedTag"
        class="c-button"
        :class="[ type, classes ]"
        v-bind="$attrs"
        @click="checkAnimation"
    >
        <Icon v-if="leftIcon && !isIconButton" :icon="leftIcon" />
        <span v-if="label && !isIconButton">{{ label }}</span>
        <span v-else-if="$slots.default">
            <slot />
        </span>
        <Icon v-if="rightIcon && !isIconButton" :icon="rightIcon"/>
        <Icon v-if="isIconButton" :icon="icon" :size="size"/>
    </component>
</template>

<script setup lang="ts" name="c-button">
import { computed, ref } from 'vue';
import { Icon } from '@/components/icon/index';
import config from '@/utils/config';

const props = defineProps({
    type: [String, Object],
    label: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: 'medium'
    },
    tag: {
        type: String,
        default: 'button',
        validator: (value: string) => {
            return config.defaultLinkTags.indexOf(value) >= 0
        }
    },
    primary: {
        type: Boolean,
        default: false,
    },
    rounded: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    leftIcon: String,
    rightIcon: String,
    isIconButton: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: 'star',
    },
    animation: {
        type: Boolean,
        default: false,
    },
    full: {
        type: Boolean,
        default: false,
    },
    outlined: {
        type: Boolean,
        default: false,
    }
})
interface waves {
    x: number;
    y: number;
    show: boolean;
}

const cButton = ref<HTMLDivElement>();
const waves = ref([] as waves[]);

const computedTag = computed(() => {
    if (props.disabled !== undefined && props.disabled !== false) {
        return 'button'
    }
    return props.tag
})

const classes = computed(() => {
    return {
        'is-primary': props.primary,
        'small': props.size === 'small',
        'medium': props.size === 'medium',
        'large': props.size === 'large',
        'is-rounded': props.rounded,
        'is-disabled': props.disabled,
        'is-icon-button': props.isIconButton,
        'is-full': props.full,
        'is-outlined': props.outlined,
    }
})

const checkAnimation = computed(() => {
    return props.animation ? animateWave : '';
})

const animateWave = (e: PointerEvent) => {
    let el = cButton.value;
    if (el) {
        let div = document.createElement('div');

        div.style.position = 'absolute';
        div.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        div.style.borderRadius = '50%';
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.left = e.offsetX + 'px';
        div.style.top = e.offsetY + 'px';
        div.style.opacity = '0';
        div.style.pointerEvents = 'none';

        // set div animation
        const waveEffect = [
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 },
        ]
        
        const setTime = {
            duration: 500,
            iterations: 1,
        }

        // https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
        div.animate(waveEffect, setTime);
        el.appendChild(div);

        // remove div
        setTimeout(() => {
            div.remove();
        }, 1000);
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/common.scss';

.c-button {
    width: auto;
    height: 2.5rem;

    position: relative;
    overflow: hidden;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
    font-size: 1rem;
    padding: 0.125rem 1rem;

    background-color: $c-white-color;
    
    border-radius: $c-border-radius;
    border: 1px solid $c-default-border-color;

    transition: all 0.5s;

    span,
    svg,
    div {
        pointer-events: none;
    }

    &:hover {
        background-color: $c-primary-hover-color;
    }

    cursor: pointer;

    &.is-full {
        width: 100% !important;
    }

    &.is-outlined {
        border: none;
    }

    &.is-primary {
        background-color: $c-primary-color;
        color: $c-white-color;

        border: none;

        &:hover {
            background-color: $c-primary-hover-color
        }
    }

    &.is-rounded {
        border-radius: $c-rounded-border-radius;
    }

    &.is-disabled {
        color: rgb(165, 164, 164);
        border-color: lightgray;
        background-color: lightgray;
        cursor: not-allowed;
        
        &:hover {
            background-color: lightgray;
        }
    }

    &.is-icon-button {
        padding: 0 5px 0 5px;

        &.small {
            width: 1.875rem;
        }

        &.medium {
            width: 2.5rem;
        }

        &.large {
            min-width: 3.125rem;

            &.is-rounded {
                border-radius: 100%;
            }
        }
    }

    &.small {
        height: 1.875rem;
    }
    
    &.medium {
        height: 2.5rem;
    }

    &.large {
        min-width: 6.25rem;
        height: 3.125rem;
    }
}

</style>
