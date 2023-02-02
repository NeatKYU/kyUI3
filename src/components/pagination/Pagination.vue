<template>
    <div class="c-pagination">
        <c-button 
            @click="prev" 
            leftIcon="angle-left" 
            :disabled="isStartDisable" 
            :rounded="rounded"
        />
        <div class="flex">
            <div 
                v-for="page in sPageList"
                @click="move(page)"
                :key="page" 
                class="c-pagination-item"
                :class="paginationClass(page)"
            >
                {{ page }}
            </div>
        </div>
        <c-button 
            @click="next" 
            rightIcon="angle-right" 
            :disabled="isEndDisable" 
            :rounded="rounded"
        />
    </div>
</template>

<script setup lang="ts" name="c-pagination">
import { computed, onMounted, ref } from 'vue';

const emit = defineEmits(['changePage']);

const props = defineProps({
    totalCount: {
        type: Number,
        default: 0,
        required: true,
    },
    perPage: {
        type:Number,
        default: 10,
    },
    showPage: {
        type: Number,
        default: 10,
    },
    currentPage: {
        type: Number,
        default: 1,
        required: true,
    },
    rounded: {
        type: Boolean,
        default: false,
    }
})

const sTotalPage = ref<number>(1);
const sCurrentShowPage = ref<number>(1);
const sCurrentPage = ref<number>(1);
const sStartPage = ref<number>(1);
const sEndPage = ref<number>(props.showPage);
const sPageList = ref<number[]>([]);

const isEndDisable = computed(() => sTotalPage.value === sCurrentPage.value);
const isStartDisable = computed(() => sCurrentPage.value === 1);

const paginationClass = (page: number) => {
    return {
        'is-active': sCurrentPage.value === page,
        'is-rounded': props.rounded,
    }
}

const move = (page: number) => {
    sCurrentPage.value = page;
    updatePage(page);
}

const updatePage = (currentPage: number) => {
    emit('changePage', currentPage)
}

const setPageList = (start: number, end: number) => {
    sPageList.value = [];
    for (let i = start; i <= end; i++) {
        sPageList.value.push(i)
    }
}

const next = () => {
    // console.log('next!')
    if(sTotalPage.value > sCurrentPage.value) {
        sCurrentPage.value += 1;
        updatePage(sCurrentPage.value);

        if(sEndPage.value < sCurrentPage.value){
            sStartPage.value = sCurrentPage.value;
            sEndPage.value = sTotalPage.value < (sStartPage.value + props.showPage) ? sTotalPage.value : sStartPage.value + props.showPage - 1;
            setPageList(sStartPage.value, sEndPage.value);
        }
    }
}

const prev = () => {
    // console.log('prev!')
    if(sCurrentPage.value > 1){
        sCurrentPage.value -= 1;
        updatePage(sCurrentPage.value);

        if(sStartPage.value > sCurrentPage.value){
            sStartPage.value = sCurrentPage.value - props.showPage + 1;
            sEndPage.value = sCurrentPage.value;
            setPageList(sStartPage.value, sEndPage.value);
        }
    }
}

onMounted(() => {
    sTotalPage.value = Math.ceil(props.totalCount / props.perPage) === 0 ? 1 : Math.ceil(props.totalCount / props.perPage);
    if(sTotalPage.value < props.showPage){
        for(let i=1; i<=sTotalPage.value; i++) {
            sPageList.value.push(i)
        }
    } else {
        for(let i=1; i<=props.showPage; i++) {
            sPageList.value.push(i)
        }
    }
})
</script>

<style lang="scss">
@import '../../styles/common.scss';

.c-pagination {
    display: flex;
    gap: 20px;
}
.c-pagination-item {
    width: 40px;
    height: 40px;

    border: 1px solid $c-default-border-color;
    border-radius: $c-border-radius;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &.is-active {
        background-color: $c-primary-color;
        color: $c-white-color;
        pointer-events: none;
    }

    &.is-rounded {
        border-radius: $c-rounded-border-radius;
    }

    &:hover {
        border-color: $c-primary-hover-color;
    }
}

.c-pagination-prev-btn,
.c-pagination-next-btn {
    
}
</style>
