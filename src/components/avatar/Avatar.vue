<template>
  <div class="c-avatar" :class="[classes]">
    <img v-if="src" :src="src"/>
    <slot v-else/>
  </div>
</template>

<script setup lang="ts" name="c-avatar">
import { computed } from 'vue'

const props = defineProps({
    src: {
        type: String,
        default: '',
    },
    rounded: {
        type: Boolean,
        default: true,
    },
    size: {
        type: String,
        default: 'medium',
    },
    shadow: {
        type: Boolean,
        default: false,
    }
})

const classes = computed(() => {
    return {
        'is-rounded': props.rounded,
        'is-small': props.size === 'small',
        'is-medium': props.size === 'medium',
        'is-large': props.size === 'large',
        'is-shadow': props.shadow,
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

    background-color: $c-primary-color;

    &.is-rounded {
        border-radius: 50%;
    }

    &.is-small {
        width: 30px;
        height: 30px;
        font-size: 12px;
    }

    &.is-large {
        width: 50px;
        height: 50px;
        font-size: 20px;
    }

    &.is-shadow {
        box-shadow: $c-strong-box-shadow;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>