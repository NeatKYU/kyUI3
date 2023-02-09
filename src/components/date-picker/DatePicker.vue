<template>
    <div class="c-datepicker">
        <div class="header">
            <Button isIconButton icon="angle-left"/>
            <ButtonGroup>
                <Button :label="currentYear.toString()" @click="() => { openYear(currentYear) }"/>
                <Button :label="currentMonth.toString()" @click="openMonth"/>
            </ButtonGroup>
            <Button isIconButton icon="angle-right"/>
        </div>
        <div class="body">
            <div class="day-wrapper">
                <div v-for="(dayWeek, index) in dayList">
                    <span :key="index">{{ dayWeek }}</span>
                </div>
            </div>
            <div v-if="!isYear && !isMonth" class="body-content day">
                <div v-for="day in currentDayList">
                    <Button v-if="day !== ''" size="small">{{ day }}</Button>
                    <div v-else/>
                </div>
            </div>
            <div v-else-if="isYear && !isMonth" class="body-content year">
                <div v-for="year in currentYearList" @click="() => {changeCurrentYear(year)}">
                    {{ year }}
                </div>
            </div>
            <div v-else class="body-content month">
                <div v-for="month in monthList" @click="() => {changeMonth(month)}">
                    <Button :label="month"/>
                </div>
            </div>
        </div>
        <!-- <div class="footer">

        </div> -->
    </div>
</template>

<script setup lang="ts" name="c-datepicker">
import { computed, defineEmits, defineProps, onMounted, ref, watch } from 'vue'
import { Button } from '../button/index'
import { Dropdown, DropdownItem } from '../dropdown/index'
import { ButtonGroup } from '../button-group';

const props = defineProps({
    width: {
        type: Number,
        default: 300,
    },
    height: {
        type: Number,
        default: 400,
    }
})

const monthList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] as string[];
const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentYear = ref<number>(new Date().getFullYear());
const currentMonth = ref<number>(new Date().getMonth() + 1);
const currentDay = ref<number>(new Date().getDate());
const isMonth = ref<boolean>(false);
const isYear = ref<boolean>(false);
const currentYearList = ref<string[]>([]);
const currentDayList = ref<string[]>([]);

watch(
    [currentYear, currentMonth],
    () => {
        currentDayList.value = getDayList(currentYear.value, currentMonth.value);
    }
)

/**
 * 년도 리스트를 생성하는 함수 현재 기준으로 앞뒤로 백년씩 계산
 * 그렇게 생성된 리스트를 반환한다.
 * @param currentYear 현재 년도
 */
const genYearList = (currentYear: string | number) => {
    let year: number;
    const limitYear = 100;
    if (typeof currentYear === 'string') {
        year = parseInt(currentYear);
    } else {
        year = currentYear;
    }
    const yearList = [] as string[];
    for (let i = year - limitYear; i < year + limitYear; i++) {
        yearList.push(i.toString());
    }
    return yearList;
}

const getDayList = (year: number, month: number) => {
    let dayList = [];
    const lastday = new Date(year, month, 0).getDate();
    const weekday = new Date(year, month - 1).getDay();
    dayList = [];
    for (let i = 1; i < weekday+1; i++) {
        dayList.push('');
    }
    for (let i = 1; i <= lastday; i++) {
        dayList.push(i.toString())
    }

    return dayList;
}

const openMonth = () => {
    isMonth.value = !isMonth.value;
    isYear.value = false;
}

const changeMonth = (month: string) => {
    currentMonth.value = parseInt(month);
    isMonth.value = false;
}

const openYear = (year: number) => {
    isYear.value = !isYear.value;
    isMonth.value = false;
    currentYearList.value = genYearList(year);
}

const changeCurrentYear = (year: string) => {
    currentYear.value = parseInt(year);
    isYear.value = false;
}

onMounted(() => {
    currentDayList.value = getDayList(currentYear.value, currentMonth.value);
})
</script>

<style lang="scss">
@import '../../styles/common.scss';

.c-datepicker {
    width: 300px;
    height: 300px;

    border-radius: 10px;
    box-shadow: $c-strong-box-shadow;
    padding: 10px 5px;
    
    .header {
        width: 100%;
        height: 15%;

        padding: 0px 10px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .body {
        width: 100%;
        height: 70%;

        display: flex;
        flex-direction: column;
        padding: 0px 10px;

        &-content {
            width: 100%;
            height: 100%;
        }

        .day {
            display: flex;
            flex-wrap: wrap;
            justify-content: start;

            div {
                width: 14.285%;
                display: flex;
                justify-content: center;
            }
        }

        .year {
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-y: scroll;

            div {
                width: 100%;
            }
            div:hover {
                background-color: $c-primary-hover-color;
            }
        }

        .month {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            gap: 9px;

            padding: 3px 10px;
        }

        .day-wrapper {
            width: 100%;
            height: 10%;

            display: flex;
            margin-bottom: 10px;

            div {
                min-width: 14.285%;
                display: flex;
                justify-content: center;
                /* align-items: center; */
            }
        }
    }

    .footer {
        background-color: black;
        width: 100%;
        height: 15%;
    }
}

</style>