<template>
    <div class="c-dropdown-item">
        <slot/>
    </div>
</template>

<script setup lang='ts' name="c-dropdown-item">
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
.c-dropdown-item {
    width: 100%;
    height: 30px;

    padding: 5px 10px;
    
    cursor: pointer;

    &:hover {
        background-color: $c-common-hover-color;
    }
}
</style>