<template>
    <div 
        class="c-divider-wrapper" 
        :class="[wrapperClasses]"
        :style="{
            width: vertical ? lineWidth+'px' : '100%', height: vertical ? '100%' : lineWidth+'px',
            backgroundColor: dark ? '#fff' : '#000'
        }"
    >
        <div class="c-divider" :class="[dividerClasses]">

        </div>
    </div>
</template>

<script setup lang='ts' name='c-divider'>
import { computed } from 'vue';

const props = defineProps({
    vertical: {
        type: Boolean,
        default: false,
    },
    // TODO
    middle: {
        type: Boolean,
        default: false,
    },
    lineWidth: {
        type: Number,
        default: 1,
    },
    // dark mode
    dark: {
        type: Boolean,
        default: false,
    },
})

const wrapperClasses = computed(() => {
    return {
        'vertical': props.vertical,
    }
})

const dividerClasses = computed(() => {
    return {
        'is-dark': props.dark,
    }
})

</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
.c-divider-wrapper {
    width: 100%;
    height: 1px;
    margin: 5px 0px;
    &.vertical {
        margin: 0px 5px;
    }
}
.c-divider {
    width: 100%;
    height: 100%;
}

</style>