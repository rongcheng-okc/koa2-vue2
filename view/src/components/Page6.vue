<template>
    <div>
        <div v-demo="{ color: 'white', text: 'hello!' }"></div>
        <h1>I am testing plugin.</h1>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    data() {
        return {}
    },
    created() {
        this.$myGlobalMethod();
        console.log('------++++++++-------');
        Vue.myGlobalMethod();
    },
    directives: {
        demo(el, binding) {
            console.log(binding.value.color) // => "white"
            console.log(binding.value.text)  // => "hello!"
        }
    }
}
</script>

