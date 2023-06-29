<template>
    <div class="service_item">
        <div class="item_title">
            <div class="title_left">企业报告</div>
            <div class="title_center"></div>
            <div class="title_right">Reports</div>
        </div>
        <div class="item_main">
            <el-carousel class="report_service_content" arrow="never" interval="2000">
                <el-carousel-item v-for="item in contentData">
                    <div class="content_item">
                        <img :src=item.pic class="item_pic">
                        <div class="item_text">{{ item.text }}</div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script setup>
import pic1 from '@/images/serviceImages/6-1.png'
import pic2 from '@/images/serviceImages/6-2.png'
import pic3 from '@/images/serviceImages/6-3.png'

const contentData = [
    { pic: pic1, text: '企业基础征信报告' },
    { pic: pic2, text: '企业信用与风险评估报告' },
    { pic: pic3, text: '企业授权评估报告' }
]

</script>

<style lang="scss">
.item_main {
    .report_service_content {
        margin-left: 556px;
        margin-top: 58px;
        width: 800px;
        height: 526px;

        .el-carousel__container {
            height: 526px;
        }

        .el-carousel__indicators {
            top: 26px;
            right: 0;
            height: 32px;
            width: 800px;
            text-align: right;

            .el-carousel__indicator--horizontal {
                padding: 0;
                margin-right: 20px;
            }

            .el-carousel__indicator--horizontal:last-child {
                margin-right: 46px;
            }

            .el-carousel__indicator button {
                width: 32px;
                height: 32px;
                background: rgba(218, 231, 255, 1);
                border: 0;
                border-radius: 50%;
            }

            .el-carousel__indicator.is-active button {
                background: rgba(49, 130, 237, 1);
            }
        }

        .content_item {
            position: relative;
            width: 800px;
            height: 526px;

            .item_pic {
                width: 800px;
                height: 526px;
                z-index: 100;
            }

            .item_text {
                position: absolute;
                z-index: 120;
                width: 800px;
                height: 92px;
                background-color: rgba(204, 204, 204, 1);
                left: 0;
                bottom: 0;
                font-size: 24px;
                font-weight: 500;
                line-height: 92px;
                color: rgba(1, 6, 48, 0.93);

            }
        }
    }
}
</style>