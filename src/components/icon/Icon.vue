<template>
    <span class="icon" :class="[classes]">
        <f-icon :icon="props.icon" />
    </span>
</template>

<script setup lang="ts" name="c-icon">
import { computed } from 'vue'

const props = defineProps({
    pack: String,
    icon: String,
    size: {
        type: String,
        default: 'medium'
    },
})

const classes = computed(() => {
    return {
        'is-small': props.size === 'small',
        'is-medium': props.size === 'medium',
        'is-large': props.size === 'large',
    }
})

</script>

<style lang="scss" scoped>
.icon {
    display: flex;

    &.is-small {
        font-size: 12px;
    }

    &.is-medium {
        font-size: 16px;
    }

    &.is-large {
        font-size: 22px;
    }
}
</style>