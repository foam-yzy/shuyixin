<template>
    <div class="footer_view">
        <div class="footer_view_top">
            <div class="footer_map" @click="dialogVisible = true">
                <Map />
            </div>
            <el-dialog v-model="dialogVisible" style="width: 1000px; height: 800px;" :show-close="false">
                <div class="" style="width: 1000px; height: 800px;">
                    <Map />
                </div>
            </el-dialog>
            <div class="footer_center_text_left">
                <div class="left_content" v-for="item in footerLeftText">
                    <span>{{ item }}</span>
                </div>
            </div>
            <div class="footer_center_text_line"></div>
            <div class="footer_center_text_right">
                <div class="right_content_one">
                    <img class="right_content_one_pic" src="../../images/homeImages/1-10-1.png">
                    <span class="right_content_one_text">数宜信</span>
                </div>
                <span class="right_content_two" v-for="item in footerRightText">{{ item }}</span>
            </div>
            <div class="footer_QR_code">
                <span class="footer_QR_code_text">关注数宜信</span>
                <img class="footer_QR_code_pic" src="../../images/homeImages/1-10-2.png">
            </div>
        </div>
        <div class="footer_view_bottom">
            <div class="footer_bottom_text" v-text="footerBottomText"></div>
        </div>
    </div>
</template> 

<script setup>
import Map from './Map.vue'
import { ref } from 'vue'

const dialogVisible = ref(false)

const footerLeftText = ['首页', '企业征信', '业务与服务', '公司介绍']
const footerRightText = ['周一至周五 9：00-18：00', '023-6788 6638', '重庆市渝北区黄山大道中段55号双鱼座B座18楼']
const footerBottomText = 'Copyright©2017-2019 shuyixin.cn All Rights Reserved 重庆数宜信信用管理有限公司 | 经营许可证编号 渝ICP备19014044号 渝公网安备 50011302001091号'
</script>


<style lang="scss">
.footer_view {
    position: relative;
    width: 100%;
    background: rgba(42, 46, 65, 1);
    color: rgba(255, 255, 255, 1);
    z-index: 500;

    .footer_view_top {

        display: flex;
        font-size: 18px;
        font-weight: 400;
        line-height: 26.06px;

        .footer_map {
            width: 206px;
            height: 166px;
            padding-left: 398px;
            padding-top: 81px;
        }

        .amap-logo {
            display: none;
            opacity: 0 !important;
        }

        .amap-copyright {
            opacity: 0;
        }

        .el-dialog__body {
            padding: 0;
        }

        .el-dialog__header {
            padding: 0;
            margin-right: 0;
        }

        .footer_center_text_left {
            padding-top: 20px;
            margin-left: 183px;

            .left_content {
                padding-top: 29.33px;
            }
        }

        .footer_center_text_line {
            margin-top: 55px;
            width: 0;
            border-left: 3px solid rgba(229, 229, 229, 1);
            height: 193px;
            margin-left: 87px;
        }

        .footer_center_text_right {
            padding-top: 43px;
            margin-left: 46px;
            text-align: left;

            .right_content_one {
                height: 41px;
                display: flex;
                align-items: center;

                .right_content_one_text {
                    margin-left: 10px;
                }
            }

            .right_content_two {
                display: flex;
                padding-top: 26.67px;
            }
        }

        .footer_QR_code {
            display: flex;
            flex-direction: column;
            margin-left: 61px;

            .footer_QR_code_text {
                padding-top: 35px;
            }

            .footer_QR_code_pic {
                padding-top: 28px;
                width: 154px;
                height: 154px;
            }
        }
    }

    .footer_view_bottom {
        margin-top: 45px;
        padding-bottom: 29px;

        .footer_bottom_text {
            font-size: 12px;
            font-weight: 400;
            line-height: 17.38px;
        }
    }

}
</style>