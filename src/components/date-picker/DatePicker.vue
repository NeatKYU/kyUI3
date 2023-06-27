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
            <div v-if="!isMonth && !isYear" class="day-wrapper">
                <div v-for="(dayWeek, index) in dayList">
                    <span :key="index">{{ dayWeek }}</span>
                </div>
            </div>
            <div v-if="!isYear && !isMonth" class="body-content day">
                <div v-for="day, index in currentDayList">
                    <Button 
                        v-if="day !== ''" 
                        size="small" animation
                        :class="[
                            checkSelectedButton(parseInt(day)), 
                            dayColorClasses(index), 
                            toDayClasses(parseInt(day))
                        ]"
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
                <div v-for="month, index in monthList" @click="() => {changeMonth(month)}">
                    <Button 
                        :label="month" 
                        outlined
                        :primary="currentMonthClasses(index)"
                    />
                </div>
            </div>
        </div>
        <!-- <div class="footer">

        </div> -->
    </div>
</template>

<script setup lang="ts" name="c-datepicker">
import { onMounted, ref, watch } from 'vue'
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

const monthList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'] as string[];
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
const toDayClasses = (day: number) => {
    const date = new Date();
    const toDayYear = date.getFullYear();
    const toDayMonth = date.getMonth() + 1;
    const toDayDay = date.getDate();

    return {
        'today': toDayYear === currentYear.value && toDayMonth === currentMonth.value && toDayDay === day,
    }
}

const dayColorClasses = (index: number) => {
    const dayOfWeekIndex = index % 7;
    return {
        'red-day': dayList[dayOfWeekIndex] === dayList[0],
        'blue-day': dayList[dayOfWeekIndex] === dayList[dayList.length - 1],
    }
}

const checkSelectedButton = (day: number) => {
    return {
        'is-selected': selectDay.value === day && selectMonth.value === currentMonth.value && selectYear.value === currentYear.value,
    }
}

const currentMonthClasses = (index: number) => {
    return monthList[index] === monthList[currentMonth.value - 1];
}

/**
 * 날짜를 선택했을 때 value 세팅 및 v-model 업데이트
 * checkSelectedButton의 스타일을 주기위해 값 업데이트
 * @param year 선택 기준 날짜
 * @param month 선택 기준 날짜
 * @param day 선택 기준 날짜
 */
const setCurrentDay = (year: number, month: number, day: number) => {
    selectYear.value = year;
    selectMonth.value = month;
    selectDay.value = day;

    const date = year + '-' + month + '-' + day;

    updateInputValue(date);
}

/**
 * 부모에서 내려온 v-model값 update해주는 함수
 * @param date 선택한 날짜 ( 초기값은 오늘 )
 */
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
    const findMonth = monthList.findIndex((item) => item === month)
    currentMonth.value = findMonth + 1;
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
    display: inline-block;
    
    .header {
        width: 100%;
        height: 15%;

        padding: 0px 10px;
        margin-bottom: 10px;

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

            margin-top: 10px;
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

            div {
                width: 33.333%;

                button {
                    width: 100%;
                }
            }

            margin: 10px 0;
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

    .today {
        border: 2px solid black;
        background-color: rgb(202, 202, 202);
    }

    .is-selected {
        background-color: $c-primary-color;
        color: white !important;
    }

    .red-day {
        color: rgb(255, 125, 125);
    }

    .blue-day {
        color: rgb(84, 84, 207);
    }

    .hide {
        display: none;
    }
}

</style>