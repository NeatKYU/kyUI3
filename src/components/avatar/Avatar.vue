<template>
  <div class="c-avatar" :class="[classes]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="c-avatar">
import { defineProps, computed } from 'vue'

const props = defineProps({
    rounded: {
        type: Boolean,
        default: true,
    },
    size: {
        type: String,
        default: 'medium',
    }
})

const classes = computed(() => {
    return {
        'is-rounded': props.rounded,
        'is-small': props.size === 'small',
        'is-medium': props.size === 'medium',
        'is-large': props.size === 'large',
    }
})
</script>

<style lang="scss">
@import '../../styles/common.scss';

.c-avatar {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    overflow: hidden;

    border-radius: 5px;
    border: 1px solid $c-default-border-color;

    &.is-rounded {
        border-radius: 50%;
    }

    &.is-small {
        width: 30px;
        height: 30px;
    }

    &.is-large {
        width: 50px;
        height: 50px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>