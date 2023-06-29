<template>
    <div class="service_item">
        <div class="item_title">
            <div class="title_left">产品设计服务</div>
            <div class="title_center"></div>
            <div class="title_right">Maas</div>
        </div>
        <div class="item_main">
            <div class="produce_service_content">
                <div class="content_left">
                    <div class="content_left_top">
                        <div class="content_circle_top">
                            <div class="circle_top_pic">
                                <img :src=pic1>
                            </div>
                            <div class="circle_text">
                                <div class="circle_text_item" v-for="item in ['准入授信', '业务办理', '贷后管理']">{{ item }}</div>
                            </div>
                        </div>
                        <div class="content_small_circle"></div>
                    </div>
                    <div class="content_left_bottom">
                        <div>
                            <div class="content_text">
                                <div class="text_title">客群定位：</div>
                                <div class="text_main">有多年养殖经验，信用良好，有着一定规模的养殖户、养殖企业。面向牛羊养殖户，利用物联网技术提供的抵押贷款产品。</div>
                            </div>
                            <div class="content_line"></div>
                        </div>
                    </div>
                </div>
                <div class="content_right">
                    <div class="content_right_top">
                        <div>
                            <div class="content_line"></div>
                            <div class="content_text">
                                <div class="text_title">客群定位：</div>
                                <div class="text_main">与优质企业有稳定业务关系的中小企业。<br>以发票数据为基础，针对与优质核心企业有稳定业务往来的中小企业，提供的数字化信用贷款产品。
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_right_bottom">
                        <div class="content_circle_top">
                            <div class="circle_text">
                                <div class="circle_text_item" v-for="item in ['大数据准入 ', '活体监控', '保险兜底', '抵押登记']">{{ item }}
                                </div>
                            </div>
                            <div class="circle_top_pic">
                                <img :src=pic2>
                            </div>
                        </div>
                        <div class="content_small_circle"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import pic1 from '@/images/serviceImages/2-1.png'
import pic2 from '@/images/serviceImages/2-2.png'

</script>

<style lang="scss" scoped>
.produce_service_content {
    margin-top: 37px;
    padding-left: 573px;
    width: 974px;
    display: flex;

    .content_left {

        .content_left_top {

            .content_circle_top {

                .circle_top_pic {
                    padding-right: 116px;
                }

                .circle_text {
                    padding-top: 67.6px;
                    padding-left: 184px;

                    .circle_text_item {
                        margin-top: 20px;
                    }
                }
            }

            .content_small_circle {
                position: absolute;
                margin-left: 18.5px;
                margin-top: 226px;
                top: 0;
            }
        }

        .content_left_bottom {
            .content_text {
                width: 470px;
            }

            .content_line {
                margin-top: 39px;
            }
        }
    }

    .content_right {
        margin-left: 54px;

        .content_right_bottom {
            float: right;
            .content_circle_top {
                .circle_text {
                    padding-left: 32px;
                    padding-top: 86px;

                    .circle_text_item {
                        margin-top: 5.6px;
                    }
                }

                .circle_top_pic {
                    padding-left: 100px;
                    padding-top: 50px;
                }
            }

            .content_small_circle {
                margin-left: 228.5px;
                margin-top: 239px;
            }
        }

        .content_right_top {
            .content_text {
                margin-top: 40px;
            }
        }
    }

    .content_left_top,
    .content_right_bottom {
        width: 300px;
        height: 300px;
        background: rgba(218, 231, 255, 0.4);
        border: 0.8px solid rgba(218, 231, 255, 0.4);
        border-radius: 50%;
        position: relative;

        .content_circle_top {
            width: 100%;

            .circle_text {
                font-size: 16px;
                font-weight: 400;
                line-height: 23.17px;
                color: rgba(0, 44, 167, 1);
                position: absolute;
                text-align: left;
            }

            .circle_top_pic {
                padding-top: 50px;
                width: 200px;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 100;
                position: absolute;
            }
        }

        .content_small_circle {
            width: 50px;
            height: 50px;
            background: rgba(0, 44, 167, 1);
            border: 0.8px solid rgba(0, 44, 167, 1);
            border-radius: 50%;
            position: absolute;
        }
    }

    .content_left_bottom,
    .content_right_top {
        height: 300px;
        display: flex;
        align-items: center;

        .content_text {
            width: 470px;
            text-align: left;

            .text_title {
                font-size: 20px;
                font-weight: 700;
                line-height: 28.96px;
            }

            .text_main {
                margin-top: 20px;
                font-size: 16px;
                font-weight: 400;
                line-height: 23.17px;
            }
        }

        .content_line {
            width: 460px;
            height: 0px;
            border: 4px solid rgba(0, 44, 167, 1);
        }
    }
}
</style>