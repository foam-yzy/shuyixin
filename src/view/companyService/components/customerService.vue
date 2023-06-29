<template>
    <div class="service_item">
        <div class="item_title">
            <div class="title_left">获客服务</div>
            <div class="title_center"></div>
            <div class="title_right">Caught</div>
        </div>
        <div class="item_main">
            <el-carousel class="caught_service_content" arrow="never" interval="2000">
                <el-carousel-item v-for="item in contentData">
                    <div class="content_item">
                        <div class="left_content">
                            <div class="content_title">{{ item.title }}</div>
                            <div class="content_text">{{ item.text }}</div>
                        </div>
                        <div class="right_pic">
                            <img :src=item.pic>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script setup>
import pic1 from '@/images/serviceImages/1-1.png'
import pic2 from '@/images/serviceImages/1-2.png'
import pic3 from '@/images/serviceImages/1-3.png'

const contentData = [
    { title: '大数据精准获客：', text: '通过产品准入授信模型，隐私计算，利用税票等大数据精准筛选准客户，形成客户白名单。', pic: pic1 },
    { title: '场景植入式获客：', text: '通过将“链信慧”工具植入物业管理、医药采购、核心企业购销管理系统，提供信用管理、协同开票和融资申请功能。', pic: pic2 },
    { title: '公司自有平台获客：', text: '农品慧：由农委和税务局共建的农产品交易综合服务平台及代开发票平台，年交易规模将达到800亿元。农牧慧：肉牛全产业链交易服务平台，涵盖牛犊、饲料、肉牛、保险、碳汇等交易。', pic: pic3 },
]
</script>

<style lang="scss">
.item_main {
    .caught_service_content {
        margin-left: 595px;
        margin-top: 126px;
        width: 800px;
        height: 460px;

        .content_item {
            display: flex;
            justify-content: space-between;

            .left_content {
                width: 350px;
                text-align: left;

                .content_title {
                    padding-top: 114px;
                    font-size: 30px;
                    font-weight: 400;
                    line-height: 43.44px;
                    color: rgba(42, 58, 122, 1);
                    border-bottom: 4px solid rgba(42, 58, 122, 1);
                }

                .content_text {
                    margin-top: 13.88px;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 23.17px;
                    color: rgba(0, 0, 0, 1);
                }
            }

            .right_pic {
                width: 400px;
                height: 350px;
            }
        }

        .el-carousel__indicators {
            /* padding-top: 105px; */
            left: 285px;
            height: 20px;

            .el-carousel__indicator--horizontal {
                padding: 0;
            }

            .el-carousel__indicator button {
                width: 110px;
                height: 20px;
                background: rgba(202, 218, 250, 1);
                border: 0;
                border-radius: 0;
            }

            .el-carousel__indicator.is-active button {
                background: rgba(42, 58, 122, 1);
            }
        }
    }
}
</style>