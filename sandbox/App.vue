<template>
    <main>
      <h1>Welcome to your your sandbox environment</h1>
      <c-input
        v-model="inputValue"
        placeholder="입력하세요"
        left-icon="align-justify"
        is-validate
      />
      <c-button 
        size="large"
        label="label"
        rounded
        left-icon="align-justify"
        right-icon="align-justify"
        @click="clickButton"
      />
      <c-switch size="large"/>
      <c-tooltip text="왼쪽 툴팁입니다!" rounded>
          <span>left</span>
      </c-tooltip>
      <c-tag textValue="primary"></c-tag>
      <c-tag textValue="success" isSuccess size="small"/>
    </main>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const clickButton = () => {
  console.log('click!')
}

const inputValue = ref('');
</script>

<style lang="scss" scoped></style>