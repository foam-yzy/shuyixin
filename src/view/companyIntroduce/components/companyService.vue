<template>
    <div class="show_item">
        <div class="show_item_title">
            <p class="title_text_one">公司技术服务</p>
            <div class="title_text_two"></div>
            <p class="title_text_three">Service</p>
        </div>
        <div class="show_item_content">
            <div class="item_content">
                <div class="content_left">
                    <div class="content_left_text">
                        <div class="content_left_one">
                            <div class="content_left_text_item" v-for="item in contentLeftText">{{ item }}</div>
                        </div>
                        <div class="content_left_two">
                            <div class="content_two_item" v-for="item in contentLeftBottomText">{{ item }}</div>
                        </div>
                    </div>
                </div>
                <img :src=Pic class="content_right_pic">
            </div>
        </div>
    </div>
</template>

<script setup>
import Pic from '@/images/introduceImages/4-1.png'
const contentLeftText = [
    '数字化助贷-获客服务：大数据精准获客、场景植入式获客、公司自有平台获客。',
    '数字化助贷-产品设计服务：链票贷、活体抵押贷。',
    '数字化助贷：数据服务、模型服务、系统服务、价值和优势。',
    '数字化征信：智慧尽调服务。'
]
const contentLeftBottomText = ['13项技术专利', '71项软件著作权']

</script>

<style lang="scss">
.item_content {
    height: 441.95px;

    .content_left {
        position: absolute;
        left: 356px;
        width: 664px;
        height: 441.95px;
        background: rgba(245, 245, 245, 1);
        z-index: 10;
        display: flex;
        justify-content: center;

        .content_left_text {
            width: 446px;
            height: 187.08px;
            padding: 0;
            display: block;
            padding-top: 91.82px;
            font-weight: 400;
            font-size: 16px;

            .content_left_one {
                text-align: left;

                .content_left_text_item {
                    margin-top: 23px;
                    line-height: 23.17px;
                    color: rgba(1, 6, 48, 1);
                }
            }

            .content_left_two {
                display: flex;
                justify-content: space-evenly;
                margin-top: 38.05px;

                .content_two_item {
                    line-height: 35px;
                    color: rgba(230, 230, 230, 1);
                    width: 150px;
                    height: 35px;
                    background: rgba(52, 106, 168, 0.72);
                    border-radius: 17px;
                }
            }
        }


    }

    .content_right_pic {
        position: absolute;
        z-index: 20;
        margin-top: 53.2px;
        margin-left: 0;
    }
}
</style>