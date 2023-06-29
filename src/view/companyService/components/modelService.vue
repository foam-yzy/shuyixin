<template>
    <div class="service_item">
        <div class="item_title">
            <div class="title_left">模型服务</div>
            <div class="title_center"></div>
            <div class="title_right">Maas</div>
        </div>
        <div class="item_main">
            <div class="model_service_content">
                <div v-text=textData class="model_content_text"></div>
                <img :src=pic class="model_content_pic">
            </div>
        </div>
    </div>
</template>

<script setup>
import pic from '@/images/serviceImages/4-1.png'

const textData = '数据资源覆盖广、更新快。可提供发票数据、财税数据、行业数据、工商司法数据、专利知产数据、政务类数据、征信数据等。'

</script>

<style lang="scss" scoped>
.item_main {
    .model_service_content {
        margin-left: 589px;
        margin-top: 94px;
        width: 900px;
        font-size: 24px;
        font-weight: 700;
        line-height: 34.75px;
        color: rgba(56, 56, 56, 1);
        text-align: left;
    }

    .model_content_pic {
        margin-top: 73px;
        margin-left: 31px;
        width: 908px;
        height: 456.8px;
    }
}
</style>