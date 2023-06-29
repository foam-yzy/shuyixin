<template>
    <div class="horse_all" >
        <div class="horse_one">
            <div class="horse_item" v-for="item in firstList" @mouseover="handleMouseover" @mouseout="handleMouseout"
                :style="{ transform: `translateX(${-translateX.firstNum}px)` }">
                <div class="horse_item_pic" v-for="pic in item">
                    <img :src="pic">
                </div>
            </div>
        </div>
        <div class="horse_two">
            <div class="horse_item" v-for="item in secondList" @mouseover="handleMouseover" @mouseout="handleMouseout"
                :style="{ transform: `translateX(${-translateX.secondNum}px)` }">
                <div class="horse_item_pic" v-for="pic in item">
                    <img :src="pic">
                </div>
            </div>
        </div>
        <div class="horse_three">
            <div class="horse_item" v-for="item in thirdList" @mouseover="handleMouseover" @mouseout="handleMouseout"
                :style="{ transform: `translateX(${-translateX.thirdNum}px)` }">
                <div class="horse_item_pic" v-for="pic in item">
                    <img :src="pic">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.horse_all {
    height: 445px;
    // background-color: rgba(240, 249, 255, 0.43);
    background-color: gray;
    overflow: hidden;

    .horse_one,
    .horse_two,
    .horse_three {
        padding-top: 21px;
        // width: 4068px;
        height: 90px;
        display: flex;

        .horse_item {
            // overflow: hidden;
            height: 90px;
            display: flex;
            align-items: center;

            .horse_item_pic {
                margin-left: 39px;
                width: 300px;
                height: 90px;
                background-color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

    .horse_two,
    .horse_three {
        margin-top: 4px;
    }
}
</style>
<script setup>
import { onMounted, onUnmounted, ref, reactive } from 'vue';
import PicFirst1 from '@/images/homeImages/horsePicFirst/1-7-1.png'
import PicFirst2 from '@/images/homeImages/horsePicFirst/1-7-2.png'
import PicFirst3 from '@/images/homeImages/horsePicFirst/1-7-3.png'
import PicFirst4 from '@/images/homeImages/horsePicFirst/1-7-4.png'
import PicFirst5 from '@/images/homeImages/horsePicFirst/1-7-5.png'
import PicFirst6 from '@/images/homeImages/horsePicFirst/1-7-6.png'

import PicSecond1 from '@/images/homeImages/horsePicSecond/1-8-1.png'
import PicSecond2 from '@/images/homeImages/horsePicSecond/1-8-2.png'
import PicSecond3 from '@/images/homeImages/horsePicSecond/1-8-3.png'
import PicSecond4 from '@/images/homeImages/horsePicSecond/1-8-4.png'
import PicSecond5 from '@/images/homeImages/horsePicSecond/1-8-5.png'
import PicSecond6 from '@/images/homeImages/horsePicSecond/1-8-6.png'

import PicThird1 from '@/images/homeImages/horsePicThird/1-9-1.png'
import PicThird2 from '@/images/homeImages/horsePicThird/1-9-2.png'
import PicThird3 from '@/images/homeImages/horsePicThird/1-9-3.png'
import PicThird4 from '@/images/homeImages/horsePicThird/1-9-4.png'
import PicThird5 from '@/images/homeImages/horsePicThird/1-9-5.png'
import PicThird6 from '@/images/homeImages/horsePicThird/1-9-6.png'

const firstData = [PicFirst1, PicFirst2, PicFirst3, PicFirst4, PicFirst5, PicFirst6]
const secondData = [PicSecond1, PicSecond2, PicSecond3, PicSecond4, PicSecond5, PicSecond6]
const thirdData = [PicThird1, PicThird2, PicThird3, PicThird4, PicThird5, PicThird6]


// 当前可视化窗口大小
const windowWidth = window.innerWidth || document.body.clientWidth;
//判断是否超出屏幕(dataArr：每一条集合)
const listIsCopy = (dataArr) => {
    if (dataArr.length * 339 >= windowWidth) {
        return dataArr
    } else {
        dataArr.push(...dataArr)
        return listIsCopy(dataArr)
    }
}
const firstList = [listIsCopy(firstData), listIsCopy(firstData)]
const secondList = [listIsCopy(secondData), listIsCopy(secondData)]
const thirdList = [listIsCopy(thirdData), listIsCopy(thirdData)]

const translateX = reactive({ firstNum: 0, secondNum: 0, thirdNum: 0 })

// 图片(数组)删除和添加
const dataAdd = (listData) => {
    listData.push(listData.shift());
}

function step() {

    translateX.firstNum += 2
    if (translateX.firstNum > firstData.length * 339) {
        dataAdd(firstList)
        translateX.firstNum = 0
    }

    translateX.secondNum += 2
    if (translateX.secondNum > secondData.length * 339) {
        dataAdd(secondList)
        translateX.secondNum = 0
    }

    translateX.thirdNum += 2
    if (translateX.thirdNum > thirdData.length * 339) {
        dataAdd(thirdList)
        translateX.thirdNum = 0
    }
    // window.requestAnimationFrame(step)
}


const isCancel = ref({ isCancel: false })

// 动画开始
const beginMove = () => {
    step()
    const cancelData = window.requestAnimationFrame(beginMove)
    if (isCancel.isCancel) {
        console.log(isCancel.isCancel);
        window.cancelAnimationFrame(cancelData)
    }
}
beginMove()

//鼠标悬停事件
const handleMouseover = () => {
    isCancel.isCancel = true
}

const handleMouseout = () => {
    isCancel.isCancel = false
    window.requestAnimationFrame(beginMove)
}
</script>