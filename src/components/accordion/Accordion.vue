<template>
    <div class="c-accordion">
        <div class="c-accordion-title" @click="changeOpen">{{ title }}</div>
        <div ref="bodyRef" class="c-accordion-body" :class="[scaleClass]">
            <slot/>
        </div>
    </div>
</template>

<script setup lang="ts" name="c-accordion">
import { computed, onMounted, ref } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default: '',
    }
})
const scaleClass = computed(() => {
    return {
        'scale-up': isOpen.value,
        'scale-down': !isOpen.value,
    }
})
const isOpen = ref<boolean>(false);
const bodyRef = ref<HTMLDivElement>();
const bodyHeight = ref<number>(0);

onMounted(() => {
    bodyHeight.value = bodyRef.value?.clientHeight ?? 0;
})

const changeOpen = () => {
    if (isOpen.value && bodyRef.value) {
        bodyRef.value.style.height = bodyHeight.value+'px';
    } 
    if (!isOpen.value && bodyRef.value) {
        bodyRef.value.style.height = '0px';
    }
    isOpen.value = !isOpen.value;
}
</script>
<style lang="scss" scoped>

.c-accordion {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

.c-accordion-title {
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 1;
}
.c-accordion-body {
    overflow: hidden;
    transition: all 0.3s;
}
</style>