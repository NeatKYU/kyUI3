<template>
    <component
        :is="computedTag"
        class="c-button"
        :class="[ type, classes ]"
        v-bind="$attrs"
    >
        <Icon v-if="leftIcon" :icon="leftIcon" />
        <span v-if="label">{{ label }}</span>
        <span v-else-if="$slots.default">
            <slot />
        </span>
        <Icon v-if="rightIcon" :icon="rightIcon"/>
    </component>
</template>

<script setup lang="ts" name="c-button">
import { computed } from 'vue';
import { Icon } from '../icon/index';
import config from '../../utils/config';

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
})

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
    }
})
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

.c-button {
    width: auto;
    height: 40px;

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
        border-color: $c-hover-border-color
    }

    cursor: pointer;

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
</style>