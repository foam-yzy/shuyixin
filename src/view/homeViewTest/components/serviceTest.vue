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
                :class="['menu_item', optionMenu.isActive == 'section5' ? 'menu_active' : '']" style="border:0;">智慧尽调服务
            </li>
        </ul>
    </div>
    <div>
        <div id="section1" style="height: 500px; background-color: lightblue;">
        </div>
        <div id="section2" style="height: 500px; background-color: gray;">
        </div>
    </div>
</template>
  
<script setup>
import { ref, reactive, watchEffect } from 'vue';

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

    .left_menu_one {
        margin-top: 28px;
    }

    .menu_one_title,
    .menu_two_title {
        height: 70px;
        font-size: 20px;
        font-weight: 700;
        line-height: 70px;
        color: rgba(1, 6, 48, 1);
    }

    .menu_item {
        list-style: none;
        text-align: center;
        height: 70px;
        font-size: 18px;
        font-weight: 400;
        line-height: 70px;
        color: rgba(1, 6, 48, 1);
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