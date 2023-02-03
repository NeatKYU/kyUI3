<template>
    <div class="c-common-button-group c-button-group">
        <slot></slot>
    </div>
</template>

<script setup lang="ts" name="c-button-group">
// import { defineProps } from 'vue'
// import { Button } from '../button/index'

// const props = defineProps({

// })
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

.c-button-group {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: $c-border-radius;
}
</style>