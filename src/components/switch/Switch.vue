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

let on = ref<boolean>(false);
const ball = ref<HTMLDivElement>();

const emit = defineEmits(['change']);

const props = defineProps({
    size: {
        type: String,
        default: 'medium'
    }
})

const onoffClass = computed(() => {
    return {
        'on': on,
        'off': !on,
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
        if(on.value){
            el.style.transform = 'translateX(0%)';
            el.style.transition = 'transform .5s';
        } else {
            el.style.transform = 'translateX(100%)';
            el.style.transition = 'transform .5s';
        }
    }
    on.value = !on.value
    emit('change', on.value);
}
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

.c-switch {
    width: 50px;
    height: 30px;

    display: flex;
    align-items: center;

    cursor: pointer;

    padding: 0 5px;

    background-color: lightgray;

    border-radius: $c-rounded-border-radius;

    .c-switch-ball {
        width: 20px;
        height: 20px;
        
        background-color: white;
    
        border-radius: $c-rounded-border-radius;
    }

    &.is-small {
        width: 40px;
        height: 25px;

        .c-switch-ball {
            width: 15px;
            height: 15px;
        }
    }

    &.is-large {
        width: 60px;
        height: 35px;
        
        padding: 0 8px;

        .c-switch-ball {
            width: 23px;
            height: 23px;
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