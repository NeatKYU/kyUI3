<template>
    <div class="textarea-overlay">
        <label v-if="props.label" class="c-textarea-label">{{
            props.label
        }}</label>
        <div class="textarea-wrapper" :class="[classes]">
            <textarea
                :value="modelValue"
                @input="updateTextAreaValue"
                :placeholder="placeholder"
                :disabled="disabled"
                :maxlength="maxLength"
                :rows="rows"
                class="c-textarea"
                :style="{ resize: isResize ? 'vertical' : 'none' }"
            ></textarea>
        </div>
    </div>
</template>

<script setup lang="ts" name="c-textarea">
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: [Number, String],
    placeholder: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    rows: {
        type: Number,
        default: 5,
    },
    maxLength: {
        type: Number,
        default: 500,
    },
    isResize: {
        type: Boolean,
        default: false,
    },
});

const classes = computed(() => {
    return {
        'is-disabled': props.disabled,
    };
});

const updateTextAreaValue = (event: any) => {
    emit('update:modelValue', event.target.value);
};
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
.c-textarea {
    width: 100%;
    height: 100%;

    font-size: 16px;

    border: none;
    border-radius: 5px;
    padding: 5px 16px;

    &:focus {
        outline: none;
    }
}
.textarea-wrapper {
    width: 100%;
    height: 100%;

    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid $c-default-border-color;
    border-radius: 5px;
    box-shadow: $c-box-shadow;

    background-color: $c-white-color;

    &:hover {
        border-color: $c-hover-border-color;
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

.textarea-overlay {
    display: flex;
    flex-direction: column;
    justify-content: start;
    .c-textarea-label {
        margin-bottom: 0.3rem;
    }
}
</style>
