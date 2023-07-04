<template>
    <div class="c-common-button-group c-button-group">
        <slot></slot>
    </div>
</template>

<script setup lang="ts" name="c-button-group">
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