<template>
    <div class="wrapper" :style="{width: (props.width + props.contentPadding*2)+'px'}">
        <Button 
            class="left-button" 
            rounded animation outlined isIconButton 
            icon="angle-left" 
            :onclick="() => move('left')"
        />
        <Button 
            class="right-button" 
            rounded animation outlined isIconButton 
            icon="angle-right" 
            :onclick="() => move('right')"
        />
        <div class="c-carousel" :style="{width: props.width+'px', height: props.height+'px'}">
            <div class="flexbox" ref="track">
                <div v-for="item in props.imageSrcList" className="img" :key="item" :style="{backgroundImage: `url(${item})`}"/>
            </div>
            <div class="dot-wrapper">
                <div 
                    v-for="item, index in props.imageSrcList" 
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
import { defineProps, ref } from 'vue'
import Button from '../button/Button.vue'

const props = defineProps({
    width: {
        type: Number,
        default: 300,
    },
    height: {
        type: Number,
        default: 300,
    },
    contentPadding: {
        type: Number,
        default: 20,
    },
    imageSrcList: {
        default: [] as string[]
    },
})

const track = ref<HTMLDivElement>();
const currentIndex = ref<number>(0);

const move = (dir: 'left' | 'right') => {
    if (track.value) {
        if (dir === 'left') {
            if (currentIndex.value === 0) {
                currentIndex.value = props.imageSrcList.length-1;
            } else {
                currentIndex.value--;
            }
            // console.log('move left', currentIndex.value)
        } else {
            if (currentIndex.value === props.imageSrcList.length-1) {
                currentIndex.value = 0;
            } else {
                currentIndex.value++;
            }
            // console.log('move right', currentIndex.value, props.imageSrcList.length)
        }
        track.value.style.transform = `translateX(-${currentIndex.value * 100}%)`;
    }
}

const moveDirect = (index: number) => {
    currentIndex.value = index;
    if (track.value) {
        track.value.style.transform = `translateX(-${currentIndex.value * 100}%)`;
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    width: 340px;
    height: 300px;
    display: inline-flex;

    position: relative;
    padding: 0 20px;
    button {
        background-color: transparent;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;

        color: white;
    }
    .left-button {
        left: 40px;
    }
    .right-button {
        right: 0;
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
        height: 15%;
        opacity: 0.3;

        display: flex;
        justify-content: center;
        align-items: center;

        gap: 10px;

        background-color: gray;
        position: absolute;
        bottom: 0;
        left: 0;

        /* &:hover {
            background-color: gray;
        }

        transition: 0.5s; */

        .dot {
            width: 15px;
            height: 15px;
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