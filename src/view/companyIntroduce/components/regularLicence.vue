<template>
    <div class="show_item">
        <div class="show_item_title">
            <p class="title_text_one">正规牌照</p>
            <div class="title_text_two"></div>
            <p class="title_text_three">Licence</p>
        </div>
        <div class="show_item_content">
            <div class="show_content_tab_parent">
                <el-tabs v-model="isActiveRef" stretch class="show_tabs" @tab-click="handleClick">
                    <el-tab-pane label="人民银行备案的企业征信管理机" name="first" class="show_tabs_item">
                        <img class="show_tabs_item_pic" :src=Pic1>
                    </el-tab-pane>
                    <el-tab-pane label="国家税务局备案的电子发票服务商" name="second">
                        <img class="show_tabs_item_pic" :src=Pic2>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Pic1 from '@/images/introduceImages/3-2.png'
import Pic2 from '@/images/introduceImages/3-3.png'

let tabContentBottomText = ['智能化线下尽调服务', '智慧化报告分析服务', '标准化数据采集服务', '在线化审查审批服务']
const isActiveRef = ref('first')
</script>

<style lang="scss">
.show_content_tab_parent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1202px;
    height: 440px;
    background-image: url("../../../images/introduceImages/3-1.png");

    .el-tabs__nav-scroll {
        width: 622px;
        display: flex;
        justify-content: center;
        margin: 0 auto !important;
    }

    .el-tabs__nav-wrap::after {
        position: static !important;
    }

    .el-tabs__header {
        margin: 0;
    }

    .el-tabs__item {
        padding: 0;
        color: rgba(128, 128, 128, 0.93);
        font-size: 18px;
        font-weight: 700;
        line-height: 26.06px;
        border-bottom: 3px solid rgba(128, 128, 128, 1);
    }

    .el-tabs__nav.is-stretch {
        width: 622px;
        
    }

    .el-tabs__item.is-active {
        color: rgba(77, 77, 77, 1);
        border-bottom: 3px solid rgba(42, 130, 228, 1);
    }

    .el-tabs__active-bar {
        display: none;
    }

    .show_tabs_item_pic {
        margin-top: 27.86px;
    }
}
</style>