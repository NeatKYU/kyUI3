<template>
    <main>
      <h1>Welcome to your your sandbox environment</h1>
      <Input
        v-model="inputValue"
        placeholder="입력하세요"
        left-icon="align-justify"
        is-validate
      />
      <Button 
        size="large"
        label="label"
        rounded
        left-icon="align-justify"
        right-icon="align-justify"
        @click="clickButton"
      />
    </main>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { Input } from "../src/components/input/index";
import { Button } from '../src/components/button/index';

const clickButton = () => {
  console.log('click!')
}

const inputValue = ref('');
</script>

<style lang="scss" scoped></style>