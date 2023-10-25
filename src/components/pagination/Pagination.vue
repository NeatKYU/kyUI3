<template>
    <div class="c-pagination">
        <ButtonGroup>
            <Button
                v-if="isEndButton"
                @click="prevEnd"
                icon="angles-left"
                :disabled="isStartDisable"
                outlined isIconButton rounded
                size="small"
            />
            <Button
                @click="prev"
                icon="angle-left"
                :disabled="isStartDisable"
                outlined isIconButton rounded
                size="small"
            />
        </ButtonGroup>
        <div class="flex">
            <ButtonGroup>
                <div
                    v-for="page in sPageList"
                    @click="move(page)"
                    :key="page"
                    class="c-pagination-item"
                    :class="paginationClass(page)"
                >
                    {{ page }}
                </div>
            </ButtonGroup>
        </div>
        <ButtonGroup>
            <Button
                @click="next"
                icon="angle-right"
                :disabled="isEndDisable"
                outlined isIconButton rounded
                size="small"
            />
            <Button
                v-if="isEndButton"
                @click="nextEnd"
                icon="angles-right"
                :disabled="isEndDisable"
                outlined isIconButton rounded
                size="small"
            />
        </ButtonGroup>
    </div>
</template>

<script setup lang="ts" name="c-pagination">
import { computed, onMounted, ref } from 'vue';
import { Button, ButtonGroup } from '../button/index';

const emit = defineEmits(['changePage']);

const props = defineProps({
    totalCount: {
        type: Number,
        default: 0,
        required: true,
    },
    // 게시물 몇개씩 보여줄지
    perPage: {
        type: Number,
        default: 10,
    },
    // 페이지네이션 버튼 개수 몇개 세팅 할건지
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
    },
    isEndButton: {
        type: Boolean,
        default: false,
    },
});

const sTotalPage = ref<number>(1);
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
    };
};

const move = (page: number) => {
    sCurrentPage.value = page;
    updatePage(page);
};

const updatePage = (currentPage: number) => {
    emit('changePage', currentPage);
};

const setPageList = (start: number, end: number) => {
    sPageList.value = [];
    for (let i = start; i <= end; i++) {
        sPageList.value.push(i);
    }
};

const next = () => {
    if (sTotalPage.value > sCurrentPage.value) {
        sCurrentPage.value += 1;
        updatePage(sCurrentPage.value);

        if (sEndPage.value < sCurrentPage.value) {
            sStartPage.value = sCurrentPage.value;
            sEndPage.value =
                sTotalPage.value < sStartPage.value + props.showPage
                    ? sTotalPage.value
                    : sStartPage.value + props.showPage - 1;
            setPageList(sStartPage.value, sEndPage.value);
        }
    }
};

const prev = () => {
    if (sCurrentPage.value > 1) {
        sCurrentPage.value -= 1;
        updatePage(sCurrentPage.value);

        if (sStartPage.value > sCurrentPage.value) {
            sStartPage.value = sCurrentPage.value - props.showPage + 1;
            sEndPage.value = sCurrentPage.value;
            setPageList(sStartPage.value, sEndPage.value);
        }
    }
};

const nextEnd = () => {
    sEndPage.value = sTotalPage.value;
    sCurrentPage.value = sTotalPage.value;
    sStartPage.value = sTotalPage.value - props.showPage;
    updatePage(sCurrentPage.value);
    setPageList(sStartPage.value, sEndPage.value);
};

const prevEnd = () => {
    sStartPage.value = 1;
    sCurrentPage.value = 1;
    sEndPage.value = props.showPage;
    updatePage(1);
    setPageList(sStartPage.value, sEndPage.value);
};

onMounted(() => {
    sTotalPage.value =
        Math.ceil(props.totalCount / props.perPage) === 0
            ? 1
            : Math.ceil(props.totalCount / props.perPage);
    if (sTotalPage.value < props.showPage) {
        for (let i = 1; i <= sTotalPage.value; i++) {
            sPageList.value.push(i);
        }
    } else {
        for (let i = 1; i <= props.showPage; i++) {
            sPageList.value.push(i);
        }
    }
});
</script>

<style lang="scss">
@import '../../styles/common.scss';

.c-pagination {
    display: flex;
    gap: 10px;
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
        background-color: $c-primary-hover-color;
    }
}
</style>
