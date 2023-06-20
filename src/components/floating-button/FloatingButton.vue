<template>
    <div class="c-floating-button-wrapper" @mouseenter="hoverIn" @mouseleave="hoverOut">
        <slot name="content"/>
        <div class="c-floating-menu-wrapper" :style="{display: isOpen ? '' : 'none'}">
            <div class="c-floating-menu">
                <slot name="menu"/>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts' name='c-floating-button'>
import { ref } from 'vue';
import FloatingItem from './FloatingItem.vue'
const isOpen = ref<boolean>(false);

const hoverIn = () => {
    isOpen.value = true;
}
const hoverOut = () => {
    isOpen.value = false;
}
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

    cursor: pointer;
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
.c-floating-menu-item {
    width: 2rem;
    height: 2rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: $c-primary-color;
}
</style>