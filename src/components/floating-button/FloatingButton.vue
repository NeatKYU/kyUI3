<template>
    <div class="c-floating-button-wrapper" :class="[shapeClasses]" ref="buttonRef" :style="{backgroundColor: props.color}">
        <div class="c-floating-trigger" @click="onClick">
            <slot/>
        </div>
        <div class="c-floating-menu-wrapper" @click="close" :style="{display: isOpen ? '' : 'none'}">
            <div class="c-floating-menu" :class="[shapeClasses]">
                <slot name="menu"/>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts' name='c-floating-button'>
import { ref, computed } from 'vue';
import { useOutsideClick } from '@/utils/useOutsideClick';
interface FloatingProps {
    color: string;
    shape: 'circle' | 'square',
}
const props = defineProps<FloatingProps>()
const isOpen = ref<boolean>(false);
const buttonRef = ref<any>();

const shapeClasses = computed(() => {
    return {
        'c-floating-square': props.shape === 'square',
    }
})

const close = () => {
    if (isOpen.value === true) {
        isOpen.value = false;
    }
}
const onClick = () => {
    isOpen.value = !isOpen.value
}
useOutsideClick(buttonRef, close);
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
.c-floating-button-wrapper {
    right: 1rem;
    bottom: 1rem;
    position: fixed;

    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: $c-primary-color;

    box-shadow: $c-strong-box-shadow;

    cursor: pointer;

    .c-floating-trigger {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 99;
    }
}
.c-floating-menu-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
}
.c-floating-menu {
    width: 100%;
    height: auto;
    padding-bottom: 0.5rem;

    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    bottom: 100%;
    left: 0;
}
</style>
<style lang="scss">
@import '../../styles/common.scss';
.c-floating-square {
    border-radius: $c-border-radius !important;
    .c-floating-menu-item {
        border-radius: $c-border-radius !important;
    }
}
</style>