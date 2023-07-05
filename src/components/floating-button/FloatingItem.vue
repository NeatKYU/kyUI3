<template>
    <div class="c-floating-menu-item" :style="{backgroundColor: props.color}">
        <slot/>
    </div>
</template>

<script setup lang="ts" name="c-floating-item">
const props = defineProps({
    color: {
        type: String,
        default: '#5e737d',
    }
})
</script>

<style lang="scss">
@import '../../styles/common.scss';

.c-floating-menu-item {
    width: 2.5rem;
    height: 2.5rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: $c-primary-color;
}
</style>