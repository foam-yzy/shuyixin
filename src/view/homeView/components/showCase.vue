<template>
    <div class="show_all">
        <div class="show_item">
            <div class="show_item_text">
                <p class="title_text_one">业务与服务</p>
                <div class="title_text_two"></div>
                <p class="title_text_three">Services Business</p>
            </div>
            <span class="title_content">全方位助力银行助贷企业征信服务</span>
            <div class="show_content_pic">
                <div class="show_content_circle">
                    <div class="show_content_circle_top show_content_circle_item" @click="handleClickPush('section1')">获客服务</div>
                    <div class="show_content_circle_center">
                        <div class="circle_center_left show_content_circle_item" @click="handleClickPush('section4')">模型服务</div>
                        <div class="circle_center_center"></div>
                        <div class="circle_center_right show_content_circle_item" @click="handleClickPush('section3')">数据服务</div>
                    </div>
                    <div class="show_content_circle_bottom">
                        <div class="circle_bottom_left show_content_circle_item" @click="handleClickPush('section5')">智慧尽调服务</div>
                        <div class="circle_bottom_right show_content_circle_item" @click="handleClickPush('section2')">产品设计服务</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="show_item">
            <div class="show_item_text">
                <p class="title_text_one">合作案例</p>
                <div class="title_text_two"></div>
                <p class="title_text_three">Collaboration Cases</p>
            </div>
            <span class="title_content">无需金融机构前期投入，不承担任何风险，极大降低创新成本和投入风险</span>
            <div class="show_content_pic">
                <div class="show_content_tab_parent">
                    <div class="show_content_tabs">
                        <el-tabs v-model="isActiveRef" stretch class="show_tabs" @tab-click="handleClick">
                            <el-tab-pane label="担保机构" name="first" class="show_tabs_item">
                                <div class="show_tabs_first">
                                    <div class="tabs_content_top">担保机构解决方案</div>
                                    <div class="tabs_content_center">通过先进的人工智能手段，整合企业海量数据
                                        ，采用实时定位、照相录影、数据采集、OCR识别等技术，为金融客户经理提供一体化、线上化的智能尽调服务，有助于提升金融机构的风控水平及服务质量，是金融尽调的效率加速器。
                                    </div>
                                </div>
                                <div class="tabs_content_bottom">
                                    <div v-for="(item, index) in tabContentBottomText" :key="index"
                                        class="tabs_content_bottom_item">
                                        <img src="@/images/homeImages/1-6-1.png" class="bottom_item_icon">
                                        <span class="bottom_item_text">{{ item }}</span>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="银行机构" name="second">Config</el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

let tabContentBottomText = ['智能化线下尽调服务', '智慧化报告分析服务', '标准化数据采集服务', '在线化审查审批服务']
const isActiveRef = ref('first')

//首先在setup中定义
const router = useRouter()
const handleClickPush = (value) => {
    router.push({ path: '/companyService', query: { chooseName: value } })
    console.log(value);
}

</script>
  
<style lang="scss">
.show_all {
    width: 100%;

    .show_item {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .show_item_text {
            width: 100%;
            padding-top: 30px;
            display: flex;
            justify-content: center;
            font-size: 36px;
            font-weight: 700;
            line-height: 52.13px;

            .title_text_one {
                color: rgba(42, 58, 122, 1);
            }

            .title_text_two {
                margin-left: 10px;
                margin-top: 10px;
                width: 0;
                height: 43px;
                border-left: 2px solid rgba(166, 166, 166, 1);
            }

            .title_text_three {
                margin-left: 10px;
                color: rgba(166, 166, 166, 1);
                white-space: nowrap;
            }
        }

        .title_content {
            margin-top: 15px;
            font-size: 20px;
            font-weight: 400;
            line-height: 28.96px;
        }

        .show_content_pic {
            width: 100%;
            margin-top: 35px;
            display: flex;
            justify-content: center;

            .show_content_circle {
                width: 1200px;
                height: 585px;
                border-radius: 125px;
                background: rgba(235, 242, 247, 1);
                display: flex;
                flex-direction: column;
                align-items: center;

                .show_content_circle_top {
                    margin-top: 48px;
                }

                .show_content_circle_center {
                    margin-top: 53.76px;
                    display: flex;

                    .circle_center_left {
                        margin-top: 56.91px;
                    }

                    .circle_center_center {
                        margin: 0 48.13px 0 46.83px;
                        width: 280px;
                        height: 280px;
                        background-image: url("../../../images/homeImages/1-5rhomb.png");
                        background-size: cover;
                        object-fit: cover;
                    }

                    .circle_center_right {
                        margin-top: 56.91px;
                    }
                }

                .show_content_circle_bottom {
                    margin-top: 6.19px;
                    display: flex;

                    .circle_bottom_left {
                        margin-right: 234.38px;
                    }
                }
            }

            .show_content_circle_item {
                width: 187.5px;
                height: 75.03px;
                line-height: 75.03px;
                font-size: 24px;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
                border-radius: 14.06px;
                background: linear-gradient(180deg, rgba(74, 150, 232, 1) 0%, rgba(212, 229, 245, 1) 100%);
                box-shadow: 0px 1.87px 3.75px 0px rgba(0, 0, 0, 0.25);

                animation: BoxJump 2s infinite;
            }

            .show_content_tab_parent {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 1200px;
                height: 670px;
                background-image: url("../../../images/homeImages/1-6.png");

                .show_content_tabs {
                    width: 1123.43px;
                    height: 573.26px;
                    background: rgba(248, 252, 255, 0.17);

                    .el-tabs__nav-scroll {
                        width: 78.5% !important;
                        margin: 0 auto !important;
                    }

                    .el-tabs__nav-wrap::after {
                        position: static !important;
                    }

                    .el-tabs__header {
                        margin: 0;
                    }

                    .el-tabs__item {
                        color: rgba(42, 58, 122, 1);
                        width: 440.87px;
                        font-size: 18px;
                        font-weight: 700;
                        height: 73.65px;
                        border-radius: 4.81px 0px, 0px, 4.81px;
                        background-color: #fff;
                    }

                    .el-tabs__item.is-active {
                        line-height: 26.06px;
                        color: white;
                        font-size: 24px;
                        background-color: rgba(72, 129, 194, 1);
                    }

                    .el-tabs__active-bar {
                        display: none;
                    }

                    .show_tabs_item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: #fff;

                        .show_tabs_first {
                            margin-top: 60.08px;
                            text-align: left;
                            width: 821.35px;
                        }

                        .tabs_content_top {
                            font-size: 28.8px;
                            font-weight: 500;
                            line-height: 41.7px;
                        }

                        .tabs_content_center {
                            margin-top: 35px;
                            font-size: 19.2px;
                            font-weight: 500;
                            line-height: 27.8px;
                        }

                        .tabs_content_bottom {
                            // margin-top: 69.47px;
                            display: flex;
                            flex-wrap: wrap;
                            width: 821.35px;
                            font-size: 21.6px;
                            font-weight: 500;

                            .tabs_content_bottom_item {
                                margin-top: 69.27px;
                                width: 410.675px;
                                display: flex;

                                .bottom_item_icon {
                                    padding-left: 39.89px;
                                    width: 30.67px;
                                    height: 31.85px;
                                }

                                .bottom_item_text {
                                    margin-left: 27.96px;
                                    line-height: 31.28px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@keyframes BoxJump {
    0% {
        transform: translate(0px, 0px);
    }

    50% {
        transform: translate(0px, -20px);
    }

    100% {
        transform: translate(0px, 0px);
    }
}
</style>
  