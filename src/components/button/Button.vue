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
import { Icon } from '../icon/index';
import config from '../../utils/config';


/**
 * type: 
 * label: 버튼 내용
 * tag: <a, Link, etc... >
 * primary: 기본 색상 모드
 */
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
        // div.style.transform = 'translate(-50%, -50%)';
        div.style.animation = 'wave 1s';
        div.style.opacity = '0';

        // set div animation
        const waveEffect = [
            { transform: 'scale(0)', opacity: 1 },
            { transform: 'scale(1)', opacity: 0 },
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
    height: 40px;

    position: relative;
    overflow: hidden;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    
    font-size: 16px;
    padding: 2px 16px;

    background-color: $c-white-color;
    
    border-radius: $c-border-radius;
    border: 1px solid $c-default-border-color;

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
            width: 30px;
        }

        &.medium {
            width: 40px;
        }

        &.large {
            min-width: 50px;

            &.is-rounded {
                border-radius: 100%;
            }
        }
    }

    &.small {
        height: 30px;
    }
    
    &.medium {
        height: 40px;
    }

    &.large {
        min-width: 100px;
        height: 50px;
    }
}

.wave {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);

    width: 100px;
    height: 100px;
    transform: translate(-50%, -50%);

    animation: wave 1s forwards;
    opacity: 0;
}

@keyframes wave {
	from {
        opacity: 1;
        transform: scale(0);
    }
    to {
        opacity: 0;
        transform: scale(1);
    }
}

</style>