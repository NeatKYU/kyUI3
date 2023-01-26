<template>
  <div
      class="input-wrapper"
      :class="[validateClasses, classes]"
  >
      <!-- <c-icon v-if="leftIcon" :icon="leftIcon" class="c-input-icon"/> -->
      <input 
          v-if="type !== 'textarea'"
          @input="updateInputValue"
          :placeholder="placeholder"
          :type="type"
          :disabled="disabled"
          class="c-input"
      >
      <!-- <c-icon v-if="rightIcon" :icon="rightIcon" class="c-input-icon"/> -->

      <textarea
          v-if="type === 'textarea'"
          @input="updateInputValue"
          :placeholder="placeholder"
          :disabled="disabled"
          class="c-textarea"
      ></textarea>
  </div>
</template>

<script lang="ts">
export default {
  name: 'c-input',
  props: {
      value: [Number, String],
      placeholder: String,
      type: {
          type: String,
          default: 'text',
          validator(value: string) {
              return ['text', 'textarea', 'email', 'phone'].includes(value)
          }
      },
      isValidate: {
          type: Boolean,
          default: false,
      },
      disabled: {
          type: Boolean,
          default: false,
      },
      // leftIcon: {
      //     type: String,
      //     default: null,
      // },
      // rightIcon: {
      //     type: String,
      //     default: null,
      // },
  },
  data() {
      return {
          // newValue: this.pValue,
      }
  },
  computed: {
      validateClasses() {
          return {
              'is-danger': this.value !== '' && this.isValidate && !this.checkValidate(this.type, this.value),
              'is-success': this.value !== '' && this.isValidate && this.checkValidate(this.type, this.value)
          }
      },
      classes() {
          return {
              'is-disabled': this.disabled
          }
      }
  },
  methods: {
      updateInputValue(event: any) {
          this.$emit('input', event.target.value);
      },
      checkValidate(type: string, value: any) {
        console.log('check validate ', value)
        let checkReg: RegExp;
        if(type === 'email') {
          // eslint-disable-next-line
          checkReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        } else if(type === 'phone') {
          checkReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        } else if(this.value) {
          return this.value.toString().length >= 1;
        } else {
          return false;
        }
        return checkReg.test(value);
      }
  }
}
</script>

<style lang="scss" scoped>
@import './common';

.c-input {
  width: 100%;
  height: 35px;

  outline: none;
  border: none;
  border-radius: 5px;
  
  font-size: 16px;

  padding: 5px;
}

.c-textarea {
  width: 100%;
  min-height: 150px;
  height: 100%;

  font-size: 16px;

  border: none;
  border-radius: 5px;
  padding: 5px 16px;

  resize: vertical;

  &:focus {
      outline: none;
  }
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

  .c-input-icon {
      padding: 5px;
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
</style>