<template>
    <div class="service_item">
        <div class="item_title">
            <div class="title_left">智慧尽调服务</div>
            <div class="title_center"></div>
            <div class="title_right">Windom</div>
        </div>
        <div class="item_main">
            <div class="windom_service_content">
                <div class="windom_item" v-for="item in windomItemData">
                    <div class="windom_item_top">
                        <span class="windom_item_top_text">{{item.title}}</span>
                    </div>
                    <div class="windom_item_circle">
                        <div class="windom_item_circle_text">
                            <div class="windom_item_circle_one">{{item.num}}</div>
                            <div class="windom_item_circle_two">{{item.text}}</div>
                            <div class="windom_item_circle_line"></div>
                            <div class="windom_item_circle_three">{{item.content}}
                            </div>
                        </div>
                    </div>
                    <img :src=item.pic class="windom_item_line">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import pic1 from "@/images/serviceImages/5-1.png";
import pic2 from "@/images/serviceImages/5-2.png";
import pic3 from "@/images/serviceImages/5-3.png";
import pic4 from "@/images/serviceImages/5-4.png";

const windomItemData = [
    {title: '征', num: '01', text: '提供多维度全量企业大数据', content: '采用实时定位、照相录影、数据采集、OCR识别等技术，将线下尽调的图像、文件等资料及时存储、转化为电子材料。', pic: pic1},
    {title: '信', num: '02', text: '提供多维度全量企业大数据', content: '采用通过公开采集、RPA授权采集、OCR智能识别等技术，为金融机构尽调提供丰富数据支撑。', pic: pic2},
    {title: '服', num: '03', text: '在线化审查审批服务', content: '基于金融机构组织架构和业务审批流，系统支持联审会投票、领导审批、行长签批等多级审查权限和流程自定义配置。', pic: pic3},
    {title: '务', num: '04', text: '智慧化报告分析服务', content: '充分运用大数据技术，建立金融产品模型和指标体系，从企业基本情况、经营情况、债项情况等多维度一键快速生成尽调报告。', pic: pic4}
]

</script>

<style lang="scss">
.item_main {
    .windom_service_content {
        margin-top: 130px;
        margin-left: 619.64px;
        display: flex;

        .windom_item {
            position: relative;
            width: 252.05px;
            height: 485.01px;
            border-radius: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .windom_item_top {
                position: absolute;
                top: 0;
                width: 108.02px;
                height: 64.4px;
                background: linear-gradient(127.39deg, rgba(158, 192, 255, 1) 0%, rgba(1, 51, 143, 1) 100%);
                z-index: 1;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                border-bottom-left-radius: 50px;
                border-bottom-right-radius: 50px;

                .windom_item_top_text {
                    position: absolute;
                    top: 5.71px;
                    left: 44.19px;
                    height: 19.56px;
                    font-size: 19.64px;
                    font-weight: 700;
                    line-height: 28.44px;
                    color: rgba(255, 255, 255, 1);
                }
            }

            .windom_item_circle {
                position: absolute;
                top: 44.02px;
                width: 193.13px;
                height: 415.71px;
                border-radius: 96.56px;
                background: rgba(255, 255, 255, 0.9);
                box-shadow: 0px 1.64px 3.27px 12.27px rgba(218, 231, 255, 0.25);
                z-index: 2;
                display: flex;
                justify-content: center;

                .windom_item_circle_text {
                    width: 142.39px;

                    .windom_item_circle_one {
                        padding-top: 36.68px;
                        font-size: 39.28px;
                        font-weight: 700;
                        line-height: 56.88px;
                        color: rgba(34, 81, 166, 1);
                    }

                    .windom_item_circle_two {
                        height: 83.14px;
                        line-height: 56.88px;
                        font-size: 19.64px;
                        font-weight: 700;
                        color: rgba(40, 60, 86, 1);
                    }

                    .windom_item_circle_line {
                        margin-top: 24.45px;
                        width: 100%;
                        height: 0;
                        border: 1.64px solid rgba(218, 231, 255, 1);
                    }

                    .windom_item_circle_three {
                        margin-top: 14.67px;
                        font-size: 14.73px;
                        font-weight: 400;
                        line-height: 21.28px;
                        color: rgba(40, 60, 86, 1);
                    }
                }
            }
        }

        .windom_item:nth-child(2n+1) {
            .windom_item_line {
                position: absolute;
                bottom: 0;
                left: -3.28px;
                width: 252.05px;
                height: 344.8px;
            }
        }

        .windom_item:nth-child(1) {
            .windom_item_line {
                left: 0;
            }
        }

        .windom_item:nth-child(2n) {
            .windom_item_line {
                position: absolute;
                left: -1.64px;
                top: 25.27px;
                width: 252.05px;
                height: 229.87px;
            }
        }

        .windom_item:nth-child(4) {
            .windom_item_line {
                left: -4.92px;
            }
        }

        // .windom_item:nth-child(1) {
        //     background-image: url('@/images/serviceImages/5-1.png');
        //     display: flex;
        //     align-items: center;
        //     justify-content: flex-end;
        //     bottom: 0;
        // }

        // .windom_item::after {
        //     content: "";
        //     position: absolute;
        //     bottom: 0;
        //     width: 100%;
        //     height: 485.01px;
        //     border-bottom-left-radius: 96.56px;
        //     border-bottom-right-radius: 96.56px;
        //     border-bottom: 1.64px solid red;
        //     z-index: 1;
        // }

        // .windom_item::before {
        //     content: "";
        //     position: absolute;
        //     top: 50%;
        //     width: 100%;
        //     height: 30%;
        //     border-left: 1.64px solid red;
        //     border-right: 1.64px solid red;
        //     // border-bottom: 1.64px solid red;
        //     z-index: 1;
        // }
    }
}
</style>