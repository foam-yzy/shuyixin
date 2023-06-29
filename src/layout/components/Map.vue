<template>
    <div :id=containerId style="padding: 0px;margin: 0px;width: 100%;height: 100%;"></div>
</template>
  
<script setup>
import { onMounted } from 'vue'
import AMapLoader from "@amap/amap-jsapi-loader";
const containerId = Math.random().toString(36).slice(-8)
//进行地图初始化
function initMap() {
    AMapLoader.load({
        key: "899fe8e72eb83d73f9d2d61fc4d37dd7",
        version: "2.0",
    })
        .then((AMap) => {
            const map = new AMap.Map(containerId, {
                viewMode: "3D",
                zoom: 12,
                center: [116.3, 39.9], //初始化地图中心点位置
            });
        })
}
onMounted(() => initMap())
</script>
  
<style scoped>
</style>
  
  