<template>
    <div class="left_menu">
        <ul class="left_menu_one">
            <div class="menu_one_title">数字化助贷服务</div>
            <li @click="handleAnchorClick('section1')"
                :class="['menu_item', optionMenu.isActive == 'section1' ? 'menu_active' : '']">获客服务</li>
            <li @click="handleAnchorClick('section2')"
                :class="['menu_item', optionMenu.isActive == 'section2' ? 'menu_active' : '']">产品设计服务</li>
            <li @click="handleAnchorClick('section3')"
                :class="['menu_item', optionMenu.isActive == 'section3' ? 'menu_active' : '']">数据服务</li>
            <li @click="handleAnchorClick('section4')"
                :class="['menu_item', optionMenu.isActive == 'section4' ? 'menu_active' : '']">模型服务</li>
        </ul>
        <ul class="left_menu_two">
            <div class="menu_two_title">数字化征信服务</div>
            <li @click="handleAnchorClick('section5')"
                :class="['menu_item', optionMenu.isActive == 'section5' ? 'menu_active' : '']">智慧尽调服务
            </li>
            <li @click="handleAnchorClick('section6')"
                :class="['menu_item', optionMenu.isActive == 'section6' ? 'menu_active' : '']">企业报告
            </li>
        </ul>
    </div>
    <div class="container" ref="scrollContainer">
        <div id="section1">
            <CustomerService />
        </div>
        <div id="section2">
            <ProduceService />
        </div>
        <div id="section3">
            <DataService />
        </div>
        <div id="section4">
            <ModelService />
        </div>
        <div id="section5">
            <WindomService />
        </div>
        <div id="section6">
            <CompanyReport />
        </div>
    </div>
</template>
  
<script setup>
import './index.css'

import { ref, reactive, watchEffect, onMounted } from 'vue';
import CustomerService from './components/customerService.vue'
import ProduceService from './components/produceService.vue'
import DataService from './components/dataService.vue'
import ModelService from './components/modelService.vue'
import WindomService from './components/windomService.vue'
import CompanyReport from './components/companyReport.vue'
import { useRoute } from 'vue-router'


const optionMenu = reactive({ isActive: null });
const scrollTo = ref(null);

const handleAnchorClick = (name) => {
    scrollTo.value = name;
    console.log(name);
    optionMenu.isActive = name
};

watchEffect(() => {
    if (scrollTo.value) {
        const element = document.getElementById(scrollTo.value);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            scrollTo.value = null;
        }
    }
});

// 接受跳转传参
const route = useRoute()
//query
const chooseName = route.query.chooseName;
handleAnchorClick(chooseName)

// const handleScroll = (index) => {
//     console.log(index);
//     // activeMenu.value = index;
//     // const targetDiv = document.querySelector(`.${index}`);
//     // window.scrollTo({
//     //     top: targetDiv.offsetTop,
//     //     behavior: 'smooth'
//     // });
// }

const scrollContainer = ref(null);

const handleScroll = (event) => {
    // 在这里处理滚动事件
    console.log("滚动事件触发了");
    // event对象包含有关滚动的相关信息，例如滚动位置
    // console.log("滚动位置：", event.target.scrollTop);
};

onMounted(() => {
    scrollContainer.value.addEventListener('scroll', handleScroll);
});

</script>

<style lang="scss">
.left_menu {
    width: 300px;
    height: 850px;
    background-color: rgba(218, 231, 255, 1);
    position: fixed;
    z-index: 120;
    top: 146px;
    left: 60px;
    box-shadow: 0 4px 8px 0 rgb(7 17 27 / 10%);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    color: rgba(1, 6, 48, 1);

    .left_menu_one {
        margin-top: 28px;
    }

    .menu_one_title,
    .menu_two_title {
        height: 70px;
        font-size: 20px;
        font-weight: 700;
        line-height: 70px;
    }

    .menu_item {
        list-style: none;
        text-align: center;
        height: 70px;
        font-size: 18px;
        font-weight: 400;
        line-height: 67px;
        border-bottom: 3px solid rgba(218, 231, 255, 1);
    }

    .menu_item:hover {
        cursor: pointer;
    }

    .menu_active {
        background-color: #fff;
        border-bottom: 3px solid rgba(49, 130, 237, 1);
    }
}
</style>