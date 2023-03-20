<template>
  <div class="swiper">
    <div class="swiper-content">
      <!-- v-show  实现隐藏和显示效果 但实际效果一般-->
      <div class="swiper-item" v-for="(item, index) in props.imageList" :key="item" v-show="n == index"
        @mouseenter="clearGo" @mouseleave="go">
        <img :src="item">
      </div>
    </div>

    <!--  @mouseenter="clearGo" @mouseleave="go" 主要是起到定时器的开关作用 -->
    <span class="up-page">
      <img :src="up" @click="clickPage('up')" @mouseenter="clearGo" @mouseleave="go" />
    </span>
    <span class="next-page">
      <img :src="next" @click="clickPage('next')" @mouseenter="clearGo" @mouseleave="go" />
    </span>

    <!--  下方圆点 同步 props.imageList 图片数量进行遍历， 动态效果则是通过  :class="n == i ? 'active' : ''实现-->
    <div class="page">
      <span v-for="(v, i) in props.imageList" :key="i" :class="n == i ? 'active' : ''" @mouseenter="goIndex(i)"
        @mouseleave="go"></span>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import next from '../assets/images/next.png'
import up from '../assets/images/up.png'
// import { Swiper } from '../swiper/swiper'
const props = defineProps({
  imageList: Array,//图片地址
  time: {//间隔时间
    type: [Number, String],
    default: 2000
  },
});
const n = ref(0);
const interId = ref(null);

const go = () => { //定时器实现自动轮播
  interId.value = setInterval(() => {
    n.value++;
    if (n.value == props.imageList.length) {
      n.value = 0;
    }
  }, props.time)
}

const clearGo = () => {//取消定时
  clearInterval(interId.value)
}

const clickPage = (val) => {//上下张
  if (val == 'up') {
    if (n.value == 0) {
      n.value = props.imageList.length;
    }
    n.value--;
  } else {
    n.value++;
    if (n.value == props.imageList.length) {
      n.value = 0;
    }
  }
}

const goIndex = (e) => { //圆点鼠标划入 展示当前图片 
  console.log(e)
  clearGo()
  n.value = e;
}
onMounted(() => {
  //  相比纯vue，原生方法可实现的效果较多 ，但这里没开发完
  // new Swiper({
  //   content: ".swiper-content",
  //   swiperItem: ".swiper-item",
  //   page: ".page"
  // })
  go();
})
</script>
<style scoped>
.swiper {
  height: 400px;
  width: 800px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}

.swiper-content {
  position: absolute;
  left: 0;
  display: flex;
}

.swiper-item {
  height: 400px;
  width: 800px;
}

img {
  width: 100%;
  height: 100%;
}

.page {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  bottom: 20px;
}

.page>span {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin: 20px;
  border: 1px solid rosybrown;
  border-radius: 50%;
}

.active {
  background-color: gray;
}

.up-page,
.next-page {
  position: absolute;
}

.up-page {
  width: 10%;
  height: 20%;
  top: 38%;
  left: 0;
  transform: translate(-14%);
}

.next-page {
  top: 41%;
  width: 8%;
  height: 16%;
  right: 0;
}
</style>
