<template>
    <div>
        <h3 class="tal">一层对象</h3>
        <ol>
            <li v-for="(item, index) in obj0" :key="index">{{item}}</li>
        </ol>
        <h3 class="tal">多层对象</h3>
        <ol>
            <li v-for="(item, index) in computedObj1" :key="index">{{item}}</li>
        </ol>
        <h3 class="tal">数组值为基本类型</h3>
        <ol>
            <li v-for="(item, index) in array0" :key="index">{{item}}</li>
        </ol>
        <h3 class="tal">数组值为对象</h3>
        <ol>
            <li v-for="(item, index) in array1" :key="index">{{item}}</li>
        </ol>
    </div>

</template>

<script>
    export default {
        data() {
            return {};
        },
        props: {
            obj0: Object,
            obj1: Object,
            array0: Array,
            array1: Array,
        },
        computed: {
            computedObj1() {
                console.log(this.obj1);
                return this.obj1;
            }
        },
        watch: {
            obj0(a) {
                console.log(a);
            },
            obj1(a) {
                console.log(a);
            }
        }
    }
</script>

<style scoped>
.tal {
    text-align: left;
}
</style>
