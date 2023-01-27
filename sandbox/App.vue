<template>
    <main>
      <h1>Welcome to your your sandbox environment</h1>
      <Input
        v-model="inputValue"
        placeholder="입력하세요"
        left-icon="align-justify"
        is-validate
      />
    </main>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import Input from "../src/components/input/Input.vue";

const inputValue = ref('');
</script>

<style lang="scss" scoped></style>