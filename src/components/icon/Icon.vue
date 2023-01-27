<template>
    <span class="icon" :class="[props.size]">
        <f-icon :icon="props.icon" />
    </span>
</template>

<script setup lang="ts" name="c-icon">
const props = defineProps({
    pack: String,
    icon: String,
    size: String,
    customSize: String,
    customClass: String,
});
</script>