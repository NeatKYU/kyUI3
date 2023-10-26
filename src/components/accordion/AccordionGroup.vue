<template>
    <div class="c-accordion-group">
        <slot />
    </div>
</template>

<script setup lang="ts" name="c-accordion-group"></script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
.c-accordion-group {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > :nth-child(1) {
        border-radius: $c-border-radius $c-border-radius 0 0;
    }
    > :not(:first-child) {
        border-top-width: 0;
        border-radius: unset;
    }
    > :last-child {
        border-radius: 0 0 $c-border-radius $c-border-radius;
    }
}
</style>
