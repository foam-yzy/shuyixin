<template>
    <div class="service_item">
        <div class="item_title">
            <div class="title_left">数据服务</div>
            <div class="title_center"></div>
            <div class="title_right">Data</div>
        </div>
        <div class="item_main">
            <el-carousel class="data_service_content" arrow="never" interval="2000">
                <el-carousel-item v-for="item in contentData">
                    <div class="content_item">
                        <div class="left_content">
                            <div class="content_title">{{ item.title }}</div>
                            <div class="content_text">{{ item.text }}</div>
                        </div>
                        <div class="right_pic">
                            <img :src=item.pic style="object-fit: cover;border-radius: 48px;">
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script setup>
import pic1 from '@/images/serviceImages/3-1.png'
import pic2 from '@/images/serviceImages/3-2.png'
import pic3 from '@/images/serviceImages/3-3.png'

const contentData = [
    { title: '提供多维度全量企业大数据', text: '数据资源覆盖广、更新快。可提供发票数据、财税数据、行业数据、工商司法数据、专利知产数据、政务类数据、征信数据等。', pic: pic1 },
    { title: '提供AI数据采集服务', text: '自研RPA采集系统,提供发票数据授权采集、加工、解析服务。具备OCR识别、PDF识别能力,支持多场景数据采集需求。', pic: pic2 },
    { title: '创新衍生指标支撑风险建模', text: '以发票数据为核心，结合人行征信数据、公开数据、知识产权数据、财税报表数据，衍生出:收入稳定性、收入成长性、盈利能力、客户稳定性、客户集中度、客户健康度、行业竞争力、回款稳定性、收入负债率、利润负债率。', pic: pic3 },
]
</script>

<style lang="scss">
.item_main {
    .data_service_content {
        margin-top: 92px;
        margin-left: 588px;
        width: 1116px;
        height: 500px;

        .content_item {
            display: flex;
            justify-content: space-between;

            .left_content {
                width: 396px;
                text-align: left;
                display: flex;
                flex-direction: column;
                justify-content: center;

                .content_title {
                    width: 250px;
                    font-size: 32px;
                    font-weight: 700;
                    line-height: 45px;
                }

                .content_text {
                    margin-top: 21.12px;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 26px;
                }
            }

            .right_pic {
                width: 600px;
                height: 500px;
                border-radius: 48px;
            }
        }

        .el-carousel__container {
            height: 500px;
        }

        .el-carousel__indicators {
            margin-left: 258px;
            height: 20px;
            width: 600px;
            bottom: 15px;

            .el-carousel__indicator--horizontal {
                padding: 0;
                padding-left: 51.5px;
            }

            .el-carousel__indicator button {
                width: 20px;
                height: 20px;
                background: rgba(218, 231, 255, 1);
                border: 0;
                border-radius: 50%;
            }

            .el-carousel__indicator.is-active button {
                background: rgba(40, 111, 191, 1);
            }
        }
    }
}
</style>