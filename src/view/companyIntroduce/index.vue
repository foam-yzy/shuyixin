<template>
    <!-- <div class="top2" :style="{ transform: `translateY(${-translateY.num}px)` }"> -->
    <div class="top2">

        <div id="slideOne" class="slide1">
            <CompanyHistory />
        </div>
        <div class="slide2">
            <RegularLicence />
        </div>
        <div class="slide3">
            <Intelligence />
        </div>
        <div class="slide4">
            <CompanyService />
        </div>
        <div class="slide5">
            <CompanyBusiness />
        </div>
        <div class="slide">
            <!-- {{ item.name }} -->
            <child-component v-for="item in pageData" :key="item.id" :data="item.name" />
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

import './index.css'
import CompanyHistory from './components/companyHistory.vue'
import RegularLicence from './components/regularLicence.vue'
import Intelligence from './components/intelligence.vue'
import CompanyService from './components/companyService.vue'
import CompanyBusiness from './components/companyBusiness.vue'

const pageData = [
    { id: 1, name: CompanyHistory },
    { id: 2, name: RegularLicence },
    { id: 3, name: Intelligence },
    { id: 4, name: CompanyService },
    { id: 5, name: CompanyBusiness }
]

const translateY = reactive({ num: 0 })

window.addEventListener('scroll', function () {
    // 获取移动方向
    const moveNum = window.pageYOffset;
    // console.log("方向", moveNum);
    translateY.num = moveNum

    const xxx1 = document.getElementsByClassName("slide1").offsetHeight
    const xxx2 = document.getElementById("slideOne").offsetHeight
    console.log(xxx1, xxx2);

    if (moveNum >= 200) {
        translateY.num = moveNum + 340
    }
});

</script>

<style lang="scss" scoped>
.top2 {
    scroll-behavior: smooth;
    // overflow-y: scroll;
    // scroll-snap-type: y mandatory;

    .slide {
        animation: slideIn 0.5s ease-in-out;
        // scroll-snap-align: start;
    }
}
</style>