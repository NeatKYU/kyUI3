<template>
    <div class="c-avatar-group" :class="[classes]" ref="slotRef">
        <template v-for="(child, index) in children" :key="index">
            <component
                v-if="index+1 < max || children.length === max"
                :is="child"
                :style="{ 'margin-left': `${index !== 0 ? '-10px' : ''}`, 'z-index': `${children.length - index}` }"
            />
            <Avatar
                v-if="index+1 === max && children.length > max"
                :style="{ 'margin-left': `${index !== 0 ? '-10px' : ''}`, 'z-index': `${children.length - index}` }"
                :size="child.props.size"
            >
                +{{ (children.length - max) + 1 }}
            </Avatar>
        </template>
    </div>
</template>

<script setup lang="ts" name="c-avatar-group">
import { computed, ref, onMounted, nextTick, reactive, useSlots } from 'vue'
import Avatar from '@/components/avatar/Avatar.vue';

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
</script>

<style lang="scss">
@import '../../styles/common.scss';

.c-avatar-group {
    display: flex;
}
</style>