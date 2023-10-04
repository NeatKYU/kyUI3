<template>
    <div
        class="wrapper"
        :class="hoverClass"
        :style="{ width: props.width + 'px' }"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
    >
        <Button
            v-if="showArrow"
            class="left-button"
            rounded
            animation
            outlined
            isIconButton
            icon="angle-left"
            :onclick="() => move('left')"
        />
        <Button
            v-if="showArrow"
            class="right-button"
            rounded
            animation
            outlined
            isIconButton
            icon="angle-right"
            :onclick="() => move('right')"
        />
        <div
            class="c-carousel"
            :style="{ width: props.width + 'px', height: props.height + 'px' }"
        >
            <div class="flexbox" ref="track">
                <div
                    v-for="item in props.images"
                    className="img"
                    :key="item"
                    :style="{ backgroundImage: `url(${item})` }"
                />
            </div>
            <div v-if="showIndicator" class="dot-wrapper">
                <div
                    v-for="(item, index) in props.images"
                    :key="item"
                    class="dot"
                    :class="[index === currentIndex ? 'active' : '']"
                    @click="() => moveDirect(index)"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="c-carousel">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import Button from '../button/Button.vue';

const props = defineProps({
    width: {
        type: Number,
        default: 300,
    },
    height: {
        type: Number,
        default: 300,
    },
    images: {
        default: [] as string[],
    },
    showIndicator: {
        type: Boolean,
        default: true,
    },
    showArrow: {
        type: Boolean,
        default: true,
    },
    autoPlay: {
        type: Boolean,
        default: false,
    },
    interval: {
        type: Number,
        default: 3,
    },
});

const track = ref<HTMLDivElement>();
const currentIndex = ref<number>(0);
const isHover = ref<boolean>(false);
const interval = ref<any>(null);

onMounted(() => {
    if (props.autoPlay) {
        interval.value = setInterval(
            () => move('right'),
            props.interval * 1000
        );
    }
});

onUnmounted(() => {
    if (interval.value) {
        clearInterval(interval.value);
    }
});

const hoverClass = computed(() => {
    return {
        'mouse-over': isHover.value,
    };
});

const move = (dir: 'left' | 'right') => {
    if (track.value) {
        if (dir === 'left') {
            if (currentIndex.value === 0) {
                currentIndex.value = props.images.length - 1;
            } else {
                currentIndex.value--;
            }
        } else {
            if (currentIndex.value === props.images.length - 1) {
                currentIndex.value = 0;
            } else {
                currentIndex.value++;
            }
        }
        track.value.style.transform = `translateX(-${
            currentIndex.value * 100
        }%)`;
    }
};

const moveDirect = (index: number) => {
    currentIndex.value = index;
    if (track.value) {
        track.value.style.transform = `translateX(-${
            currentIndex.value * 100
        }%)`;
    }
};

const mouseEnter = () => {
    isHover.value = true;
};
const mouseLeave = () => {
    isHover.value = false;
};
</script>

<style lang="scss" scoped>
.wrapper {
    height: 300px;
    display: inline-flex;

    position: relative;
    /* padding: 0 20px; */
    button {
        opacity: 0;
        background-color: transparent;
        position: absolute;
        top: 50%;
        z-index: 99;
        transform: translate(0%, -50%);
        transition: all 0.5s;

        color: white;
    }
    /* .left-button {} */
    .right-button {
        right: 0;
    }
}
.mouse-over {
    button {
        opacity: 1;
    }
}
.c-carousel {
    width: 300px;
    height: 300px;
    position: relative;

    background-color: transparent;

    overflow: hidden;

    .dot-wrapper {
        width: 100%;
        height: 10%;
        opacity: 0.3;

        display: flex;
        justify-content: center;
        align-items: center;

        gap: 10px;

        background-color: gray;
        position: absolute;
        bottom: 0;
        left: 0;

        .dot {
            width: 10px;
            height: 10px;
            border-radius: 100%;

            background-color: #efefef;

            cursor: pointer;

            &:hover {
                background-color: red;
            }

            transition: 0.5s;
        }

        .active {
            background-color: red;
        }
    }
}

.img {
    width: 100%;
    height: 100%;

    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;

    flex: none;
}

.img:first-child:nth-last-child(n) {
    width: 100%;
}

.flexbox {
    height: 100%;
    display: flex;

    transition: 0.5s;
}
</style>
