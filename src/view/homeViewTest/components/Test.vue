<template>
    <div class="test_all" style=" background-color: antiquewhite; display: block; position: relative; clear: both; height: 3072px;">

        <swiper :direction="'vertical'"  :mousewheel="true" :loop="false" :pagination="{
            clickable: true,
        }" :modules="modules" autoplay="true" class="mySwiper" style="z-index: 1000; height: 900px;" autoHeight="true">
            <!-- <swiper-slide class="slide1" style="background-color: green; height: 668px !important;"><CompanyHistory /></swiper-slide>
            <swiper-slide class="slide2" style="background-color: blueviolet; height: 543px !important;"><RegularLicence /></swiper-slide>
            <swiper-slide class="slide3" style="background-color: red; height: 579px;"><Intelligence /></swiper-slide>
            <swiper-slide style="background-color: #fff; height: 579px;"><CompanyService /></swiper-slide>
            <swiper-slide style="background-color: chocolate; height: 703px;"><CompanyBusiness /></swiper-slide> -->
            <!-- <swiper-slide style="background-color: chocolate;"><FooterView /></swiper-slide> -->

            <swiper-slide class="slide1" style="background-color: green; height: 668px !important;"><CompanyHistory /></swiper-slide>
            <swiper-slide class="slide2" style="background-color: blueviolet; height: 543px !important;"><RegularLicence /></swiper-slide>
            <swiper-slide class="slide3" style="background-color: red; height: 579px;"><Intelligence /></swiper-slide>
            <swiper-slide style="background-color: #fff; height: 579px;"><CompanyService /></swiper-slide>
            <swiper-slide style="background-color: chocolate; height: 703px;"><CompanyBusiness /></swiper-slide>

            <!-- <swiper-slide style="background-color: green;"><CompanyHistory /></swiper-slide>
            <swiper-slide style="background-color: blueviolet;"><RegularLicence /></swiper-slide>
            <swiper-slide style="background-color: red;"><Intelligence /></swiper-slide>
            <swiper-slide style="background-color: #fff;"><CompanyService /></swiper-slide>
            <swiper-slide style="background-color: chocolate;"><CompanyBusiness /></swiper-slide>
            <swiper-slide style="background-color: chocolate;"><FooterView /></swiper-slide> -->
        </swiper>
        
    </div>
</template>
  
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

import CompanyHistory from '@/view/companyIntroduce/components/companyHistory.vue'
import RegularLicence from '@/view/companyIntroduce/components/regularLicence.vue'
import Intelligence from '@/view/companyIntroduce/components/intelligence.vue'
import CompanyService from '@/view/companyIntroduce/components/companyService.vue'
import CompanyBusiness from '@/view/companyIntroduce/components/companyBusiness.vue'
import FooterView from '@/layout/components/FooterView.vue';



const modules = [Mousewheel, Pagination];
</script>

<style lang="scss">
.slide1 {
    height: 668px;
}

.silde2 {
    height: 543px;
}

.slide3 {
    height: 579px;
}
// html,
// body {
//     position: relative;
//     height: 100%;
// }


// .swiper {
//     width: 100%;
//     height: 100%;
// }

// .swiper-slide {
//     text-align: center;
//     font-size: 18px;
//     background: #fff;

//     /* Center slide text vertically */
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .swiper-slide img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// }
</style>
  