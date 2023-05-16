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

      <c-dropdown>
        <template #trigger>
          <c-button right-icon="caret-down">
            select
          </c-button>
        </template>
        <template #item>
          <c-dropdown-item icon="star" @click="clickButton">
            test1
          </c-dropdown-item>
          <c-dropdown-item>
            test2
          </c-dropdown-item>
          <c-dropdown-item>
            test3
          </c-dropdown-item>
        </template>
      </c-dropdown>

      <c-avatar>
        <img src="../assets/img/logo.png"/>
      </c-avatar>

      <c-datepicker v-model="dateValue">
        
      </c-datepicker>
      <div>date picker value = {{ dateValue }}</div>
      <c-spinner size="small" color="blue"></c-spinner>
      <c-spinner color="blue" progressColor="#d1d1d1"></c-spinner>
      <c-spinner size="large" speed="2s"></c-spinner>

      <c-carousel :width="300" :imageSrcList="imageSrcList"></c-carousel>
    </main>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const inputValue = ref('');
const currentPage = ref(1);
const selectDropdownItem = '';
const dropdownList = ['dropdown test', 'korea', 'USA'];
const imageSrcList = ['https://fakeimg.pl/250', 'https://fakeimg.pl/200', 'https://fakeimg.pl/300']
const dateValue = ref<string>(new Date().toString());

const clickButton = () => {
  console.log('click!')
}

const changePage = (page: number) => {
  currentPage.value = page;
}

</script>

<style lang="scss" scoped></style>