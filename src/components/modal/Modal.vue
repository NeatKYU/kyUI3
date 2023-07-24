<template>
    <div ref="modalWrapperRef" class="c-modal-wrapper" :class="Classes" @click="close">
        <div class="c-modal" @click.stop>
            <div class="c-modal-header">
                <span>{{ props.title ?? 'modal' }}</span>
                <Icon icon="xmark" @click="close" class="close-icon"/>
            </div>
            <div class="c-modal-body">
                <slot name="body" />
            </div>
            <div v-if="slots.footer" class="c-modal-footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="c-modal">
import { ref, computed, useSlots } from 'vue';
import { Icon } from '@/components/icon/index';

const modalWrapperRef = ref<any>(null);
const slots = useSlots();
const emit = defineEmits(['close']);
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        defulat: 'modal',
    },
})
const Classes = computed(() => {
    if (props.isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    return {
        'hidden': !props.isOpen,
    }
})
const close = () => {
    emit('close', false);
}
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

.c-modal-wrapper {
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    
    overflow-y: auto;

    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
}
.c-modal {
    min-width: 18.75rem;
    min-height: 12.5rem;

    position: absolute;
    top: 0;
    left: 50%;

    transform: translate(-50%, -50%);
    animation: slidedown 0.3s ease-in-out forwards;

    display: flex;
    flex-direction: column;
    border-radius: $c-border-radius;

    background-color: #ffffff;

    z-index: 999;
}
.c-modal-header {
    width: 100%;
    height: auto;
    padding: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid $c-default-border-color;
}

.c-modal-body {
    width: 100%;
    height: auto;
    max-height: 80vh;
    padding: 0.5rem 1rem;

    overflow-y: auto;

    flex-grow: 1;
}
.c-modal-footer {
    width: 100%;
    height: auto;
    padding: 1rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;

    border-top: 1px solid $c-default-border-color;
}

.hidden {
    display: none;
}

.close-icon {
    width: 1rem;
    height: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
}

@keyframes slidedown {
    0% {
        top: 40%;
        opacity: 0;
    }
    100% {
        top: 50%;
        opacity: 1;
    }
}
</style>