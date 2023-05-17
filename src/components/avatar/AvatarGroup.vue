<template>
    <div class="c-avatar-group" :class="[classes]" ref="slotRef">
        <template v-for="(child, index) in children" :key="index">
            <component
                :is="child"
                :style="{ 'margin-left': `${index !== 0 ? '-10px' : ''}`, 'z-index': `${children.length - index}` }"
            />
        </template>
    </div>
</template>

<script setup lang="ts" name="c-avatar-group">
import { defineProps, computed, ref, onMounted, nextTick, reactive, useSlots } from 'vue'
const slotRef = ref<any>();
const children = ref<any>([]);
const slots = useSlots();
const props = defineProps({
    max: {
        type: Number,
        default: 5,
    }
})
  
const classes = computed(() => {
    return {

    }
})
onMounted(async () => {
    await nextTick()
    const defaultSlot = slots.default
    if (!defaultSlot) return
    children.value = defaultSlot().map((vnode: any) => reactive(vnode))
})

// onMounted(() => {
//     children.value = slots.default && slots.default().map((vnode: any) => {
//         return {
//             tag: vnode.type,
//             props: {
//                 ...vnode.props,
//                 style: {
//                     marginLeft: '-10px',
//                 }
//             },
//             children: vnode.children
//         }
//     })
// })
</script>

<style lang="scss">
@import '../../styles/common.scss';

.c-avatar-group {
    display: flex;

    /* div:not(:first-child) {
        margin-left: -10px;
    } */
}
</style>