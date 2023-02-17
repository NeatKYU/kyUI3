<template>
    <div class="c-datepicker" :style="{width: props.width+'px', height: props.height+'px'}">
        <input :value="modelValue" class="hide"/>
        <div class="header">
            <Button isIconButton icon="angle-left" @click="prevMonth"/>
            <ButtonGroup>
                <Button :label="currentYear.toString()" @click="() => { openYear(currentYear) }"/>
                <Button :label="currentMonth.toString()" @click="openMonth"/>
            </ButtonGroup>
            <Button isIconButton icon="angle-right" @click="nextMonth"/>
        </div>
        <div class="body">
            <div class="day-wrapper">
                <div v-for="(dayWeek, index) in dayList">
                    <span :key="index">{{ dayWeek }}</span>
                </div>
            </div>
            <div v-if="!isYear && !isMonth" class="body-content day">
                <div v-for="day in currentDayList">
                    <Button 
                        v-if="day !== ''" 
                        size="small" animation
                        :class="[checkDayforButtonEffect(parseInt(day))]"
                        @click="setCurrentDay(currentYear, currentMonth, parseInt(day))"
                    >
                        {{ day }}
                    </Button>
                    <div v-else/>
                </div>
            </div>
            <div v-else-if="isYear && !isMonth" class="body-content year">
                <div>
                    <Button 
                        v-for="year in currentYearList" 
                        @click="() => {changeCurrentYear(year)}" 
                        full outlined
                        :label="year"
                    />
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
import { defineProps, onMounted, ref, watch, defineEmits } from 'vue'
import { Button } from '../button/index'
import { ButtonGroup } from '../button-group';

const props = defineProps({
    modelValue: String,
    width: {
        type: Number,
        default: 300,
    },
    height: {
        type: Number,
        default: 300,
    }
})

const emit = defineEmits(['update:modelValue']);

const monthList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] as string[];
const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentYear = ref<number>(new Date().getFullYear());
const currentMonth = ref<number>(new Date().getMonth() + 1);
const currentDay = ref<number>(new Date().getDate());

// user select value 관리용
const selectYear = ref<number>(new Date().getFullYear());
const selectMonth = ref<number>(new Date().getMonth() + 1);
const selectDay = ref<number>(new Date().getDate());

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

const checkDayforButtonEffect = (day: number) => {
    return {
        'is-selected': selectDay.value === day && selectMonth.value === currentMonth.value && selectYear.value === currentYear.value,
    }
}

const setCurrentDay = (year: number, month: number, day: number) => {
    selectYear.value = year;
    selectMonth.value = month;
    selectDay.value = day;

    const date = year + '-' + month + '-' + day;

    updateInputValue(date);
}

const updateInputValue = (date: string) => {
    emit('update:modelValue', date);
}

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

const nextMonth = () => {
    isYear.value = false;
    isMonth.value = false;
    if (currentMonth.value === 12) {
        currentMonth.value = 1;
        currentYear.value++;
    } else {
        currentMonth.value++;
    }
}

const prevMonth = () => {
    isYear.value = false;
    isMonth.value = false;
    if (currentMonth.value === 1) {
        currentMonth.value = 12;
        currentYear.value--;
    } else {
        currentMonth.value--;
    }
}

onMounted(() => {
    currentDayList.value = getDayList(currentYear.value, currentMonth.value);
})
</script>

<style lang="scss">
@import '../../styles/common.scss';

.c-datepicker {

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
            /* align-items: center; */
            overflow-y: scroll;
        }

        .year::-webkit-scrollbar {
            width: 4px;
        }
        .year::-webkit-scrollbar-thumb {
            height: 30%;
            border-radius: 20px;
            background-color: $c-default-border-color;
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

    .is-selected {
        background-color: $c-primary-color;
    }

    .hide {
        display: none;
    }
}

</style>