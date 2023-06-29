<template>
    <div class="show_item">
        <div class="show_item_title">
            <p class="title_text_one">公司历史</p>
            <div class="title_text_two"></div>
            <p class="title_text_three">History</p>
        </div>
        <div class="show_item_content show_item_history">
            <div class="show_item_background"></div>
            <div class="show_item_left">
                <img class="show_item_pic" src="../../../images/introduceImages/1-1.png" alt="">
            </div>
            <div class="show_item_right">
                <div class="show_item_right_content">
                    <div class="right_content">
                        <div class="right_content_one">
                            <img src="../../../images/introduceImages/1-2.png">
                            <div class="right_content_one_text" style="width: 173px;">成立于<br />2017年02月06日</div>
                        </div>
                        <div class="right_content_two">
                            <img src="../../../images/introduceImages/1-3.png">
                            <div class="right_content_two_text">由重庆正大软件（集团）有限公司和重庆科学城投资控股有限公司（国有）合资组建</div>
                        </div>
                        <div class="right_content_three">
                            <img src="../../../images/introduceImages/1-2.png">
                            <div class="right_content_three_text">是人民银行批准的企业征信管理机构、税务局备案的电子发票服务商</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import pic1 from '../../../images/introduceImages/1-2.png'
import pic2 from '../../../images/introduceImages/1-3.png'
const contentData = [
    { pic: pic1, text: '成立于2017年02月06日' },
    { pic: pic2, text: '由重庆正大软件（集团）有限公司和重庆科学城投资控股有限公司（国有）合资组建' },
    { pic: pic1, text: '是人民银行批准的企业征信管理机构、税务局备案的电子发票服务商' }
]
</script>

<style lang="scss">
.show_item_history {
    height: 565px;
}

.show_item_background {
    top: -32px;
    position: absolute;
    width: 1200px;
    height: 511px;
    background-color: rgba(248, 252, 255, 1);
    z-index: 10;
}

.show_item_left {
    width: 1200px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    z-index: 200;

    .show_item_pic {
        width: 582px;
        height: 390px;
        z-index: 20;
        margin-top: 113px;
    }
}

.show_item_right {
    width: 1200px;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    z-index: 150;

    .show_item_right_content {
        width: 664px;
        height: 515px;
        background-color: rgba(245, 245, 245, 1);
        margin-top: 50px;

        .right_content {
            padding-top: 176px;
            display: flex;
            justify-content: flex-end;
            font-size: 16px;
            font-weight: 400;
            line-height: 23.17px;
            color: rgba(1, 6, 48, 1);

            .right_content_one {
                width: 173px;
                margin-right: 21px;
            }

            .right_content_two {
                width: 189px;
                margin-right: 24px;
            }

            .right_content_three {
                width: 138px;
                padding-right: 24.5px;
            }

            .right_content_two_text {
                margin-top: 15.92px;
            }

            .right_content_one_text,
            .right_content_three_text{
                margin-top: 18.92px;
            }

            .right_content_two_text,
            .right_content_three_text{
                text-align: left;
            }
        }
    }
}
</style>