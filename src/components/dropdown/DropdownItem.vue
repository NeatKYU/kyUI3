<template>
    <div class="c-dropdown-item">
        <Icon v-if="icon" :icon="icon" class="c-icon" />
        <slot/>
    </div>
</template>

<script setup lang='ts' name="c-dropdown-item">
import { defineProps } from 'vue';
import Icon from '@/components/icon/Icon.vue';

const props = defineProps({
    icon: {
        type: String,
        default: '',
    }
})
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
.c-dropdown-item {
    width: 100%;
    height: 30px;

    padding: 5px;

    display: flex;
    align-items: center;

    border-radius: $c-border-radius;
    
    cursor: pointer;

    &:hover {
        background-color: $c-common-hover-color;
    }
}

.c-icon {
    margin-right: 5px;
}
</style>