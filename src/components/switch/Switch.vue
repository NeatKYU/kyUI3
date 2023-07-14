<template>
    <input 
        :id="props.inputId"
        type="checkbox"
        class="c-switch"
        @click="moveBall"
    />
    <label :for="props.inputId" class="c-switch-label" :class="[classes, onoffClass]" @mousedown.prevent/>
</template>

<script setup lang="ts" name="c-switch">
import { ref, computed } from 'vue';

const emit = defineEmits(['change']);

const props = defineProps({
    size: {
        type: String,
        default: 'medium',
    },
    inputId: {
        type: String,
        default: 'toggle',
    }
})

const on = ref<boolean>(false);

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
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
}
.c-switch-label {
    width: $ball-medium-size * 2 + $padding-size * 2;
    height: $ball-medium-size + $padding-size * 2;

    display: inline-flex;
    align-items: center;

    cursor: pointer;

    padding: 0px $padding-size;

    background-color: lightgray;

    border-radius: $c-rounded-border-radius;
    transition: background-color 0.2s;

    &::before {
        content: '';

        width: $ball-medium-size;
        height: $ball-medium-size;
        
        background-color: white;
    
        border-radius: 50%;
    }

    &.is-small {
        width: $ball-small-size * 2 + $padding-size * 2;
        height: $ball-small-size + $padding-size * 2;

        &::before {
            width: $ball-small-size;
            height: $ball-small-size;
        }
    }

    &.is-large {
        width: $ball-large-size * 2 + $padding-size * 2;
        height: $ball-large-size + $padding-size * 2;
        
        &::before {
            width: $ball-large-size;
            height: $ball-large-size;
        }
    }
}
input[type="checkbox"]:checked + label {
    &::before {
        transform: translateX(100%);
        transition: all 0.3s;
    }
}
input[type="checkbox"]:not(:checked) + label {
    &::before {
        transform: translateX(0%);
        transition: all 0.3s;
    }
}
input[type="checkbox"]:focus + label {
    box-shadow: $c-strong-box-shadow;
}
.on {
    background-color: $c-success-color;
}

.off {
    background-color: lightgray;
}
</style>