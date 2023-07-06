<template>
    <div 
        @click="moveBall"
        class="c-switch" 
        :class="[classes, onoffClass]"
    >
        <div ref="ball" class="c-switch-ball"/>
    </div>
</template>

<script setup lang="ts" name="c-switch">
import { ref, computed } from 'vue';

const emit = defineEmits(['change']);

const props = defineProps({
    size: {
        type: String,
        default: 'medium'
    }
})

const on = ref<boolean>(false);
const ball = ref<HTMLDivElement>();

const onoffClass = computed(() => {
    return {
        'on': on.value,
        'off': !on.value,
    }
})

const classes = computed(() => {
    return {
        'is-small': props.size === 'small',
        'is-large': props.size === 'large'
    }
})

const moveBall = () => {
    const el = ball.value;
    if (el) {
        if (on.value) {
            el.style.transform = 'translateX(0%)';
            el.style.transition = 'transform .3s';
        } else {
            el.style.transform = 'translateX(100%)';
            el.style.transition = 'transform .3s';
        }
    }
    on.value = !on.value;
    emit('change', on.value);
}
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
$ball-small-size: 20px;
$ball-medium-size: 25px;
$ball-large-size: 30px;

$padding-size: 2.5px;

.c-switch {
    width: $ball-medium-size * 2 + $padding-size * 2;
    height: $ball-medium-size + $padding-size * 2;

    display: inline-flex;
    align-items: center;

    cursor: pointer;

    padding: 0px $padding-size;

    background-color: lightgray;

    border-radius: $c-rounded-border-radius;
    transition: background-color 0.2s;

    .c-switch-ball {
        width: $ball-medium-size;
        height: $ball-medium-size;
        
        background-color: white;
    
        border-radius: 100%;
    }

    &.is-small {
        width: $ball-small-size * 2 + $padding-size * 2;
        height: $ball-small-size + $padding-size * 2;

        .c-switch-ball {
            width: $ball-small-size;
            height: $ball-small-size;
        }
    }

    &.is-large {
        width: $ball-large-size * 2 + $padding-size * 2;
        height: $ball-large-size + $padding-size * 2;
        
        .c-switch-ball {
            width: $ball-large-size;
            height: $ball-large-size;
        }
    }
}
.on {
    background-color: $c-success-color;
}

.off {
    background-color: lightgray;
}
</style>