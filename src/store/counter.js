//store/counter.js
import { defineStore } from "pinia";
import { ref, watch, onMounted, computed } from 'vue';


//vue3.x 项目   推荐  很nice 
export const useCounterStore = defineStore('counter', () => { //第一个参数为id，第二个（）=>{} 理解为vue3.x 的setup函数
    const name = ref("Eduardo");
    const nameTow = ref("wangming")
    const setName = () => {
        name.value = "pinia> onMounted"
    }
    watch(name, (e) => { //可以用watch
        console.log('监听到了！', e)
    })
    const names = computed(() => {
        return name.value + nameTow.value
    })
    onMounted(() => {//生命周期函数
        setName()
    })
    return {
        name,
        names,
        setName
    }
})

//选项式 这种用法类似vuex
export const useMessageStore = defineStore('message', { //第一个参数为id，也可以这样defineStore（{id：'counter',state....配置项}）
    state: () => ({ age: 20, ages: 30 }),//推荐简写方式
    getters: {
        addAge(state) {
            return state.age + state.ages;
        }
    },
    actions: {
        //useCounterStore() 可以访问其他的store
        getMessage(e) {
            this.$state.age = e;
        }
    }
})
