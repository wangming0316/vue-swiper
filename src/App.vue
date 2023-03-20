<template>
  <swiper :image-list="imageList" />
  <!-- <button @click="set">变更</button> -->
  <!-- <p>{{ store.name }}</p>
  <p> {{ store.names }}</p>
  <p> {{ message.age }}</p> -->
</template>

<script setup>
import { ref } from 'vue';
import swiper from './components/swiper.vue'
import sai from './assets/images/sai.jpg'
import tutu from './assets/images/tutu.png'
import weicao from './assets/images/weicao.png'
import { useCounterStore, useMessageStore } from "./store/counter"
const imageList = [sai, tutu, weicao];
// const store = useCounterStore();
// const message = useMessageStore()
// console.log("message", message.addAge)
// const set = () => {
//   //变更得第一种方法  
//   // store.name = 'wwwwmmm'

//   // store.$state = {
//   //   message: 'New Message',
//   //   randomMessages: ['msg1', 'msg2', 'msg3'],
//   // }
//   //变更得第二种方法  参数为:{}=>{}  全量更新 state

//   // store.$patch((state) => {
//   //   state.name = 'wwwwmmm'
//   // })

//   //变更得第三种方法  参数为:{}     全量更新 state

//   // store.$patch({
//   //   name:'wwwwmmm'
//   // })
//   // console.log('啦啦啦', store.name)

//   //选项式
//   // message.getMessage(90);
//   // message.age = 100;
//   console.log("store", store)
//   message.$patch({
//     age: 500
//   })
//   // message.age = 900
// }
// message.$subscribe((mutation, state) => {
//   /*
//       * mutation主要包含三个属性值：
//       *   events：当前state改变的具体数据，包括改变前的值和改变后的值等等数据
//       *   storeId：是当前store的id
//       *   type：用于记录这次数据变化是通过什么途径，主要有三个分别是
//       *         “direct” ：通过 action 变化的 或是 message.age = 900这样直接修改
//                 ”patch object“ ：通过 $patch 传递对象的方式改变的
//                 “patch function” ：通过 $patch 传递函数的方式改变的
//       *
//       * */
//   // 我们就可以在此处监听store中值的变化，当变化为某个值的时候，去做一些业务操作之类的
//   console.log('mutation:' + JSON.stringify(mutation), "state:" + state)
// }, { detached: false })
//第二个参数options对象，是各种配置参数
    //detached:布尔值，默认是 false，正常情况下，当订阅所在的组件被卸载时，订阅将被停止删除，
    // 如果设置detached值为 true 时，即使所在组件被卸载，订阅依然在生效
    //参数还有immediate，deep，flush等等参数 和vue3 watch的参数是一样的，
</script>
<style scoped></style>
