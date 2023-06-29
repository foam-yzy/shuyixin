<template>
    <el-carousel :height="300" :interval="4000" :indicator-position="outside" class="carousel_style"
        @mouseenter="mouseoverCarousel" @mouseleave="mouseoutCarousel">
        <el-carousel-item v-for="(item, index) in carouselData" :key="index" class="carousel_item">
            <img :src="item.imgSrc" class="carousel_item_pic" />
            <div :class="item.className">
                <p>{{ item.contentTextP }}</p>
                <pre>{{ item.contentTextPre }}</pre>
            </div>
        </el-carousel-item>
        <div class="carousel_hovering_text" :style="{ opacity: (isView.show ? 1 : null) }">
            <div class="text_content">
                <div v-for="(item, index) in HoverText" :key="index" class="item_text_content">
                    <div class="item_text_one">
                        <div class="item_text_num">{{ item.num }}</div>
                        <div class="item_text_add">+</div>
                    </div>
                    <div class="item_text_two"></div>
                    <div class="item_text_three">{{ item.contentText }}</div>
                </div>
            </div>
        </div>
    </el-carousel>
</template>
  
<script setup>
import { ref, reactive, watch } from "vue"
import Pic1 from '@/images/homeImages/1-1.png'
import Pic2 from '@/images/homeImages/1-2.png'
import Pic3 from '@/images/homeImages/1-3.png'

const carouselData = [
    { imgSrc: Pic1, caption: 'caption_one', className: "carousel_item_center_text", contentTextP: '信用科技服务专家', contentTextPre: '创新   拼搏   成长   协同' },
    { imgSrc: Pic2, caption: 'caption_two', className: "carousel_item_center_text", contentTextP: '业务优势', contentTextPre: '支持私有化部署，基础数据采集与建模，基于供应链场景下业务全生命周期分析及管理，实现企业健康分析，风险预警等重要价值' },
    { imgSrc: Pic3, caption: 'caption_three', className: "carousel_item_center_text carousel_item_center_text2", contentTextP: '团队优势', contentTextPre: '由各大银行背景、类金融机构专家组件的团队，可从营销、产品、风控、技术、大数据、贷后管理各环节，为银行提供供应链金融业务全流程专家顾问服务' },
]

const num1 = ref(0)
const num2 = ref(0)
const num3 = ref(0)

const startAutoIncrement = (startNum, endNum, speed, endTime) => {
    const addNum = Math.ceil(((endNum - startNum.value) * speed) / (1000 * endTime));
    startNum.value += 1
    // intervalId(startNum, endNum, speed, endTime)
};
// 封装数据增长方法
const intervalId = (startNum, endNum, speed, endTime) => {
    startAutoIncrement(startNum, endNum, speed, endTime)
    console.log(startNum.value);
    // if (startNum.value >= endNum) {
    //     startNum.value = endNum
    //     clearInterval(intervalId)
    // }
    window.requestAnimationFrame(intervalId)
}

const HoverText = reactive([
    { num: num1, contentText: '服务企业' },
    { num: num2, contentText: '合作用户' },
    { num: num3, contentText: '覆盖省市' }
])

const isView = reactive({ show: false })
// 鼠标移入轮播图显示服务企业...
const mouseoverCarousel = () => {
    isView.show = true
    intervalId(num1, 80000, 300, 10)
    // startAutoIncrement(num2, 32, 310, 10)
    // startAutoIncrement(num3, 500, 20, 10)
}
// 鼠标移出轮播图关闭服务企业显示...
const mouseoutCarousel = () => {
    isView.show = false
    clearInterval(intervalId)
    num1.value = 0
    num2.value = 0
    num3.value = 0
}
</script>

<style lang="scss">
.carousel_style {
    height: 700px;
    width: 100%;

    .el-carousel__container {
        height: 700px;

        .el-carousel__arrow--left {
            left: 276px;
        }

        .el-carousel__arrow--right {
            right: 276px;
        }

        .el-carousel__arrow {
            position: absolute;
            width: 80px;
            height: 155px;
            border-radius: 10px;
            background-color: rgba(44, 74, 115, 0.6);
        }

        .el-carousel__arrow i {
            font-size: 50px;
        }
    }

    .carousel_hovering_text {
        opacity: 0;
        margin: 0;
        position: absolute;
        z-index: 120;
        background-color: rgba(44, 74, 115, 0.64);
        width: 100%;
        height: 190px;
        bottom: 0;
        display: flex;
        justify-content: center;

        .text_content {
            width: 1200px;
            display: flex;
            justify-content: space-evenly;

            .item_text_content {
                color: rgba(255, 255, 255, 1);
                font-weight: 700;

                .item_text_one {
                    display: flex;

                    .item_text_num {
                        padding-top: 37px;
                        font-size: 36px;
                        line-height: 52.13px;
                    }

                    .item_text_add {
                        padding-top: 60px;
                        font-size: 24px;
                        line-height: 34.75px;
                        width: 15px;
                        height: 35px;
                    }
                }

                .item_text_two {
                    margin: 0 auto;
                    margin-top: 2px;
                    width: 20px;
                    height: 1px;
                    border-top: 1px solid #fff;
                    background-color: #fff;
                }

                .item_text_three {
                    margin-top: 5px;
                    line-height: 26.06px;
                    font-size: 18px;
                }

                // }
            }
        }
    }

    .carousel_item {
        display: flex;
        width: 100%;
        justify-content: center;

        .carousel_item_pic {
            width: 100%;
            object-fit: cover;
        }
    }

    .carousel_item_center_text {
        position: absolute;
        z-index: 120;

        p {
            margin: 0;
            font-size: 42px;
            font-weight: 500;
            line-height: 60.82px;
            color: rgba(56, 56, 56, 1);
            padding-top: 220px;
        }

        pre {
            width: 660px;
            font-size: 20px;
            font-weight: 500;
            color: rgba(56, 56, 56, 1);
            white-space: pre-wrap;
        }
    }

    .carousel_item_center_text2 {
        p {
            color: #fff;
        }

        pre {
            color: #fff;
        }
    }
}
</style>
  

  