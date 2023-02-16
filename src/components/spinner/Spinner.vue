<template>
    <div class="c-spinner">
        <div class="inner"></div>
        <div class="progress">
            <div class="center"></div>
        </div>
    </div>
</template>

<script setup lang="ts" name="c-spinner">
import { computed, ref } from 'vue';
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
$spinner-width: 35px;
$spinner-height: 35px;

$spinner-half-width: calc($spinner-width / 2);
$spinner-half-height: calc($spinner-height / 2); 
.c-spinner {
    width: $spinner-width;
    height: $spinner-width;

    background-color: darkgray;
    border-radius: 50%;

    padding: 5px;

    position: relative;

    .inner {
        width: calc($spinner-width - (5px * 2));
        height: calc($spinner-height - (5px * 2));
        background-color: white;
        border-radius: 50%;
    }
    .progress {
        position: absolute;
        top: 0;
        left: 0;

        width: $spinner-half-width;
        height: $spinner-half-height;

        background-color: black;
        border-radius: 100px 0 0 0;

        animation: spin 1s linear infinite;
        transform-origin: 100% 100%;

        padding: 5px 5px 0 5px;

        .center {
            position: absolute;

            width: calc($spinner-width - (5px * 2));
            height: calc(($spinner-half-height / 2) + 4px);

            border-radius: 200px 200px 0 0;

            background-color: white;
        }
    }
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
</style>