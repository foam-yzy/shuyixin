<template>
    <div class="show_item">
        <div class="show_item_title">
            <p class="title_text_one">公司业务概括</p>
            <div class="title_text_two"></div>
            <p class="title_text_three">Business</p>
        </div>
        <div class="show_item_content">
            <div class="business_content">
                <img :src=Pic class="content_left_pic">
                <div class="content_right">
                    <div class="content_right_item content_right_one">
                        <div class="one_left">
                            <div class="content_text">服务内容</div>
                        </div>
                        <div class="one_right">为金融机构提供“一揽子服务”：获客、产品设计、风险建模、数据服务和系统建设。</div>
                    </div>
                    <div class="content_right_item content_right_two">
                        <div class="two_left">金融机构只需按照放贷规模支付获客费用和数据费用。</div>
                        <div class="two_right">
                            <div class="content_text">服务模式</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Pic from '@/images/introduceImages/5-1.png'
</script>

<style lang="scss">
.business_content {
    margin-top: 35px;
    margin-bottom: 50px;
    width: 1200px;
    height: 515px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .content_left_pic {
        line-height: 0;
        z-index: 20;
    }

    .content_right {
        position: absolute;
        margin-left: 534px;
        width: 664px;
        height: 515px;
        background: rgba(245, 245, 245, 1);
        z-index: 10;

        .content_right_item {
            width: 499px;
            height: 151px;
            float: right;
            color: rgba(1, 6, 48, 1);
            align-items: center;
        }

        .content_right_one {
            margin-top: 89px;
            margin-right: 16px;
            display: block;
            background: linear-gradient(90deg, rgba(40, 111, 191, 1) 0%, rgba(255, 255, 255, 0.67) 100%);
            border-top-right-radius: 93px;
            border-bottom-right-radius: 93px;
            display: flex;
            align-items: center;

            .one_left {
                margin-left: 45px;
            }

            .one_right {
                margin-left: 45px;
            }
        }

        .content_right_two {
            margin-right: 82px;
            margin-top: 51px;
            border-top-left-radius: 93px;
            border-bottom-left-radius: 93px;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.67) 0%, rgba(40, 111, 191, 1) 100%);
            display: flex;
            justify-content: flex-end;

            .two_right {
                margin-right: 46px;
            }

            .two_left {
                margin-right: 45px;
            }
        }

        .one_left,
        .two_right {
            width: 81px;
            height: 96px;
            border-radius: 24px;
            background: rgba(255, 255, 255, 1);
            display: flex;
            justify-content: center;
            align-items: center;

            .content_text {
                width: 50px;
                height: 72px;
                line-height: 34.75px;
                font-size: 24px;
                font-weight: 400;
            }
        }

        .one_right,
        .two_left {
            width: 251px;
            height: 69px;
            font-size: 16px;
            font-weight: 400;
            line-height: 23.17px;
            text-align: left;
            vertical-align: top;
        }

    }
}
</style>