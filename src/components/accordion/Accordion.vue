<template>
    <div class="c-accordion">
        <div class="c-accordion-title" @click="changeOpen">
            {{ title }}
            <div :class="activeClass">
                <Icon v-if="isArrow" icon="angle-down" />
            </div>
        </div>
        <div ref="bodyRef" class="c-accordion-body">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts" name="c-accordion">
import { computed, onMounted, ref } from 'vue';
import { Icon } from '@/components/icon/index';
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    isArrow: {
        type: Boolean,
        default: false,
    },
});
const isOpen = ref<boolean>(false);
const bodyRef = ref<HTMLDivElement>();
const bodyHeight = ref<number>(0);

onMounted(() => {
    bodyHeight.value = bodyRef.value?.clientHeight ?? 0;
    initValue(isOpen.value);
});

const changeOpen = () => {
    isOpen.value = !isOpen.value;
    initValue(isOpen.value);
};

const initValue = (openValue: boolean) => {
    if (openValue && bodyRef.value) {
        bodyRef.value.style.height = bodyHeight.value + 'px';
        bodyRef.value.style.marginTop = '0.5rem';
    }
    if (!openValue && bodyRef.value) {
        bodyRef.value.style.height = '0px';
        bodyRef.value.style.marginTop = '0rem';
    }
};

// const scaleClass = computed(() => {
//     return {
//         'scale-up': isOpen.value,
//         'scale-down': !isOpen.value,
//     };
// });
const activeClass = computed(() => {
    return {
        rotate: isOpen.value,
    };
});
</script>
<style lang="scss" scoped>
@import '../../styles/common.scss';
.c-accordion {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    border: 0.5px solid $c-primary-color;
    border-radius: $c-border-radius;
    padding: 0.5rem;
}

.c-accordion-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1.2rem;
    cursor: pointer;
    z-index: 1;
    padding: 0.3rem 0.5rem;

    border-radius: $c-border-radius;

    &:hover {
        background-color: $c-primary-hover-color;
    }
}
.c-accordion-body {
    overflow: hidden;
    transition: all 0.3s;

    margin-top: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
.rotate {
    transform: rotate(180deg);
}
/* .active {
    background-color: $c-primary-hover-color;
} */
</style>
