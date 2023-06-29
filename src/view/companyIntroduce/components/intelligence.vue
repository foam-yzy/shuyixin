<template>
    <div class="show_item">
        <div class="show_item_title">
            <p class="title_text_one">科技资质</p>
            <div class="title_text_two"></div>
            <p class="title_text_three">Intelligence</p>
        </div>
        <div class="show_item_content">
            <div class="item_content">
                <img class="item_content_one_pic" :src=Pic>
                <div class="item_content_two">
                    <div class="content_data" v-for="item in contentData" :key="item">
                        <span class="content_data_item">{{ item }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Pic from '@/images/introduceImages/2-1.png'

const contentData = ['重庆市重点软件企业', '国家信息系统安全等级保护三级证书', '重庆市高新技术企业']
</script>

<style lang="scss">
.item_content {
    margin-top: 35px;

    .item_content_two {
        margin-top: 24px;
        display: flex;
        justify-content: space-between;

        .content_data {
            width: 350px;
            height: 79px;
            border-radius: 20px;
            background: rgba(30, 48, 97, 0.6);

            .content_data_item {
                line-height: 79px;
                font-size: 18px;
                font-weight: 700;
                color: rgba(230, 230, 230, 1);
            }
        }
    }
}
</style>