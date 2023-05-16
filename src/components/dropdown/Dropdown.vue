<template>
    <div 
        class="c-dropdown-wrapper" 
        :class="dropdownCustomClass"
        @mouseenter="hoverIn" 
        @mouseleave="hoverOut"
        ref="dropdownRef"
    >
        <div @click="toggle">
            <slot name="trigger"/>
        </div>
        <div class="c-dropdown-item-divider">
            <div v-if="isDropActive" class="c-dropdown-item-wrapper" @click="closePoper">
                <slot name="item"/>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts' name='c-dropdown'>
import { defineProps, ref } from 'vue'
import { useOutsideClick } from '@/utils/useOutsideClick';

const dropdownRef = ref<any>();

const props = defineProps({
    dropdownCustomClass: {
        type: String,
        default: '',
    },
    hovered: {
        type: Boolean,
        default: false,
    },
})

const isDropActive = ref<boolean>(false);

const toggle = () => {
    isDropActive.value = !isDropActive.value;
}

const closePoper = () => {
    isDropActive.value = false;
}

const hoverIn = () => {
    if (props.hovered) isDropActive.value = true;
}

const hoverOut = () => {
    if (props.hovered) isDropActive.value = false;
}
useOutsideClick(dropdownRef, closePoper);
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

.c-dropdown-wrapper {
    height: auto;
    display: inline-flex;

    position: relative;
}
.c-dropdown-item-divider {
    width: 100%;
    padding-top: 5px;

    position: absolute;
    top: 40px;
    left: 0;

    z-index: 10;
}

.c-dropdown-item-wrapper {
    min-width: 150px;
    // height: 200px;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px 10px;

    border-radius: $c-border-radius;
    border: 1px solid $c-default-border-color;

    background-color: $c-white-color;

    box-shadow: $c-box-shadow;
}
</style>