<template>
    <div class="horse_all">
        <!-- <div class="horse_list" :style="{width: firstListWidth}"> -->
        <div class="horse_list">
            <div class="horse_item" v-for="item in firstList"
                :style="{ transform: `translateX(${-translateX.speedNum}px)` }">
                <div class="horse_item_pic" v-for="(pic, key) in item" :key="key">
                    <span>{{ key }}</span>
                    <img :src="pic">
                </div>
            </div>
        </div>
        <!-- <div class="horse_list" :style="{ width: secondListWidth }">
            <div class="horse_item" v-for="item in secondList"
                :style="{ transform: `translateX(${-translateX.secondNum}px)` }">
                <div class="horse_item_pic" v-for="pic in item">
                    <img :src="pic">
                </div>
            </div>
        </div> -->
        <!-- <div class="horse_list" :style="{width: thirdListWidth}">
            <div class="horse_item" v-for="item in thirdList" :style="{ transform: `translateX(${-translateX.num}px)` }">
                <div class="horse_item_pic" v-for="pic in item">
                    <img :src="pic">
                </div>
            </div>
        </div> -->
    </div>
</template>
<style lang="scss" scoped>
.horse_all {
    width: 1920px;
    height: 445px;
    // background-color: rgba(240, 249, 255, 0.43);
    background-color: green;
    overflow: hidden;
    padding-top: -4px;

    .horse_list {
        padding-top: 25px;
        width: 4068px;
        height: 90px;
        display: flex;

        .horse_item {
            overflow: hidden;
            height: 90px;
            display: flex;
            align-items: center;
            width: 2034px;

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

// const firstData = [PicFirst1, PicFirst2, PicFirst3, PicFirst4, PicFirst5, PicFirst6]
const firstData = [PicFirst1, PicFirst2, PicFirst3, PicFirst4]
const secondData = [PicSecond1, PicSecond2, PicSecond3, PicSecond4, PicSecond5, PicSecond6]
const thirdData = [PicThird1, PicThird2, PicThird3, PicThird4, PicThird5, PicThird6]

//判断是否超出屏幕(dataArr：每一条集合)
const listIsCopy = (dataArr) => {
    if (dataArr.length * 339 >= 1920) {
        return dataArr
    } else {
        dataArr.push(...dataArr)
        return listIsCopy(dataArr)
    }
}
const firstList = [listIsCopy(firstData), listIsCopy(firstData)]
const secondList = [listIsCopy(secondData), listIsCopy(secondData)]
const thirdList = [thirdData, thirdData]

const firstListWidth = firstList.length * 339 * 2 + 'px'
const secondListWidth = secondData.length * 339 * 2 + 'px'
// const thirdListWidth = thirdData.length * 339 * 2 + 'px'


const translateX = reactive({ speedNum: 0 })
function step() {
    translateX.speedNum += 2
    // translateX.firstNum += 2
    // translateX.secondNum += 5
    // if (translateX.firstNum >= listIsCopy(firstData).length * 339) {
    //     dataAdd(firstList)
    //     console.log("第一条换",translateX.firstNum, listIsCopy(firstData).length * 339);
    //     translateX.firstNum = 0
    // }
    // if (translateX.secondNum > listIsCopy(secondData).length * 339) {
    //     dataAdd(secondList)
    //     translateX.secondNum = 0
    // }
    if (translateX.speedNum > 339 * firstData.length) {
        dataAdd(firstList)
        translateX.speedNum = 0
    }
    window.requestAnimationFrame(step)
}
step()

const dataAdd = (listData) => {
    // for (const key in listData) {
    // console.log("kduguyjdgui");
    console.log(listData);
    listData.push(listData.shift());
    // }
}

</script>