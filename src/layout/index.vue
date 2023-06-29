<template>
    <el-container class="container_layout">
        <div class="container_layout_menu">
            <el-header class="header_menu">
                <img src="@/images/homeImages/logo-pic.png" alt="" class="logo_pic">
                <el-menu default-active="/" :router="true" class="menu" mode="horizontal" :default-active="$route.path">
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item>
                        <a href="https://www.shuexin.com/search#red">
                            企业征信平台
                        </a>
                    </el-menu-item>
                    <el-menu-item index="companyService">业务与服务</el-menu-item>
                    <el-menu-item index="companyIntroduce">公司介绍</el-menu-item>
                    <el-menu-item>
                        <ContactUs />
                    </el-menu-item>
                    <el-menu-item index="aboutUs">测试</el-menu-item>
                </el-menu>
            </el-header>
        </div>


        <el-main class="main">
            <RouterView></RouterView>
            <FooterView />
        </el-main>
    </el-container>
</template> 

<script setup>
import FooterView from './components/FooterView.vue';
import ContactUs from '@/view/contactUs/index.vue'
</script>


<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

#app {
    margin: 0;
    padding: 0;
}

.container_layout {
    width: 1920px;
    font-family: "思源黑体";

    .container_layout_menu {
        border-bottom: 1px solid rgba(51, 51, 51, 0.3);
        height: 60px;
        display: block;
        background-color: red;

        .header_menu {
            padding: 0;
            position: fixed;
            display: flex;
            width: 100%;
            height: 60px;
            border-bottom: 1px solid rgba(51, 51, 51, 0.3);
            z-index: 1000;
            background-color: #fff;

            .logo_pic {
                position: absolute;
                margin-left: 360px;
            }

            .el-menu--horizontal {
                border-bottom: 1px solid rgba(51, 51, 51, 0.3);
            }

            .menu {
                position: absolute;
                margin-left: 960px;
                width: 560px;
                height: 60px;
                width: 600px;

                .el-menu-item {
                    font-size: 16px;
                    font-weight: 400;
                    height: 32px;
                    top: 15px;
                    border-radius: 5px;

                }

                .el-menu-item.is-active {
                    background-color: rgba(62, 129, 222, 1) !important;
                    color: #fff !important;
                }
            }
        }
    }

    .main {
        padding: 0;
        margin-top: 60px;
        width: 100%;
        position: relative;
    }
}
</style>