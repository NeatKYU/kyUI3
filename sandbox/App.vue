<template>
    <main>
      <h1>Welcome to your your sandbox environment</h1>
      <c-input
        v-model="inputValue"
        placeholder="입력하세요"
        left-icon="align-justify"
        is-validate
      />
      <c-button-group>
        <c-button 
          size="small"
          label="label"
          isIconButton
          @click="clickButton"
        />
        <c-button 
          label="label"
          isIconButton
          @click="clickButton"
        />
        <c-button 
          size="large"
          label="label"
          isIconButton
          animation
          @click="clickButton"
        />
      </c-button-group>
      <c-switch size="large"/>
      <c-tooltip text="왼쪽 툴팁입니다!" rounded>
          <span>left</span>
      </c-tooltip>
      <c-tag textValue="primary"></c-tag>
      <c-tag textValue="success" isSuccess size="small"/>

      <c-pagination 
          @changePage="changePage" 
          :totalCount=1032
          :perPage=10
          :showPage=5
          :currentPage="currentPage"
          isEndButton
      />

      <c-dropdown title="select" :dropdownList="dropdownList">
      </c-dropdown>

      <c-avatar>
        <img src="../assets/img/logo.png"/>
      </c-avatar>

      <c-datepicker>
        
      </c-datepicker>
      <c-spinner size="small"></c-spinner>
      <c-spinner ></c-spinner>
      <c-spinner size="large"></c-spinner>
    </main>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const inputValue = ref('');
const currentPage = ref(1);
const selectDropdownItem = '';
const dropdownList = ['dropdown test', 'korea', 'USA'];

const clickButton = () => {
  console.log('click!')
}

const changePage = (page: number) => {
  currentPage.value = page;
}

</script>

<style lang="scss" scoped></style>