<template>
    <div class="c-floating-menu-item">
        <slot/>
    </div>
</template>

<script setup lang="ts" name="c-floating-item">

</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

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