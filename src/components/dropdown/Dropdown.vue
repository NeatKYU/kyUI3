<template>
    <div 
        class="c-dropdown-wrapper" 
        :class="dropdownCustomClass"
        @mouseenter="hoverIn" 
        @mouseleave="hoverOut"
    >
        <Button @click="toggle" :right-icon="toggleIcon" :disabled="props.disabled">
            {{ title }}
        </Button>
        <div class="c-dropdown-item-divider">
            <div v-if="isDropActive" @click="toggle" class="c-dropdown-item-wrapper">
                <template v-if="dropdownList">
                    <DropdownItem 
                        v-for="(item,index) in dropdownList" 
                        :key="item+'-'+index"
                        :class="itemCustomClass"
                    >
                        {{ item }}
                    </DropdownItem>
                </template>
                <slot v-else/>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts' name='c-dropdown'>
import { defineProps, ref, computed } from 'vue'
import { DropdownItem } from './index';
import { Button } from '../button/index';

const props = defineProps({
    title: {
        type: String,
        default: 'dropdown',
    },
    dropdownList: {
        type: Object,
        default: [],
    },
    dropdownCustomClass: {
        type: String,
        default: '',
    },
    itemCustomClass: {
        type: String,
        default: ''
    },
    hovered: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    downIcon: {
        type: String,
        default: 'caret-down',
    },
    upIcon: {
        type: String,
        default: 'caret-up',
    },
})

const isDropActive = ref<boolean>(false);

const toggleIcon = computed(() => {
    return isDropActive.value ? props.upIcon : props.downIcon;
})

const toggle = () => {
    if (!props.disabled) {
        isDropActive.value = !isDropActive.value;
    }
}

const hoverIn = () => {
    if (props.hovered && !props.disabled) {
        isDropActive.value = true;
    }
}

const hoverOut = () => {
    if (props.hovered && !props.disabled) {
        isDropActive.value = false;
    }
}
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
    left: 3px;

    z-index: 10;
}

.c-dropdown-item-wrapper {
    min-width: 150px;
    // height: 200px;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 5px;

    background-color: $c-white-color;

    box-shadow: $c-box-shadow;
}
</style>