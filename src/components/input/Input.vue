<template>
    <div class="input-overlay">
        <label v-if="props.label" class="c-input-label">{{
            props.label
        }}</label>
        <div class="input-wrapper" :class="[validateClasses, classes]">
            <Icon v-if="leftIcon" :icon="leftIcon" class="c-input-icon-left" />
            <input
                :value="modelValue"
                @input="updateInputValue"
                :placeholder="placeholder"
                :type="type"
                :disabled="disabled"
                class="c-input"
            />
            <Icon
                v-if="rightIcon"
                :icon="rightIcon"
                class="c-input-icon-right"
            />
        </div>
        <div
            v-if="props.helperText"
            class="c-input-helper-text"
            :class="[validateClasses]"
        >
            {{ props.helperText }}
        </div>
    </div>
</template>

<script setup lang="ts" name="c-input">
import { computed } from 'vue';
import { Icon } from '../icon/index';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: [Number, String],
    placeholder: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
        validator(value: string) {
            return ['text', 'email', 'phone'].includes(value);
        },
    },
    label: {
        type: String,
        default: '',
    },
    helperText: {
        type: String,
        default: '',
    },
    isValidate: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    leftIcon: {
        type: String,
        default: null,
    },
    rightIcon: {
        type: String,
        default: null,
    },
});

const validateClasses = computed(() => {
    return {
        'is-danger':
            props.modelValue !== '' &&
            props.isValidate &&
            !checkValidate(props.type, props.modelValue),
        'is-success':
            props.modelValue !== '' &&
            props.isValidate &&
            checkValidate(props.type, props.modelValue),
    };
});

const classes = computed(() => {
    return {
        'is-disabled': props.disabled,
    };
});

const updateInputValue = (event: any) => {
    emit('update:modelValue', event.target.value);
};

const checkValidate = (type: string, value: any) => {
    let checkReg: RegExp;
    if (type === 'email') {
        // eslint-disable-next-line
        checkReg =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    } else if (type === 'phone') {
        checkReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    } else if (value) {
        return value.toString().length >= 1;
    } else {
        return false;
    }
    return checkReg.test(value);
};
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

.c-input {
    width: 100%;
    height: 35px;

    outline: none;
    border: none;
    border-radius: 5px;

    font-size: 16px;

    padding: 5px;
}

.input-wrapper {
    width: 100%;
    height: 100%;

    // padding: 5px 16px;

    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid $c-default-border-color;
    border-radius: 5px;
    box-shadow: $c-box-shadow;

    background-color: $c-white-color;

    .c-input-icon-left {
        padding: 5px 0 5px 5px;
        display: flex;
        justify-content: center;
    }
    .c-input-icon-right {
        padding: 5px 5px 5px 0;
        display: flex;
        justify-content: center;
    }

    &:hover {
        border-color: $c-hover-border-color;
    }
    &.is-danger {
        box-shadow: $c-danger-color 0px 0px 5px;
        border-color: $c-danger-color;
    }
    &.is-success {
        box-shadow: $c-success-color 0px 0px 5px;
        border-color: $c-success-color;
    }
    &.is-disabled {
        border-color: lightgray;
        background-color: lightgray;
        input:disabled {
            cursor: not-allowed;
        }
        ::placeholder {
            color: rgb(165, 164, 164);
        }
    }
}

.input-overlay {
    display: flex;
    flex-direction: column;
    justify-content: start;
    .c-input-label {
        margin-bottom: 0.3rem;
    }
    .c-input-helper-text {
        margin-top: 0.3rem;
        &.is-success {
            color: $c-success-color;
        }
        &.is-danger {
            color: $c-danger-color;
        }
    }
}
</style>
