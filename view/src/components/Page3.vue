<template>
<div>
<ObjectProp :obj0="obj0" :obj1="obj1" :array0="array0" :array1="array1"></ObjectProp>
    <button @click="changeObj0">changeObj0</button>
    <button @click="changeObj1">changeObj1</button>
    <button @click="changeArray0">changeArray0</button>
    <button @click="changeArray1">changeArray1</button>
</div>
</template>

<script>
import ObjectProp from './ObjectProp'
export default {
    data() {
        return {
            obj0: {
                name: 'RC',
                age: '27'
            },
            obj1: {
                child0: {
                    name: 'child0'
                },
                child1: {
                    name: 'child1'
                }
            },
            array0: ['YF', 'YGY', 'RC'],
            array1: [
                {
                    name: 'array1-child0'
                },
                {
                    name: 'array1-child1'
                }
            ],
        }
    },
    components: {
        ObjectProp
    },
    methods: {
        changeObj0() {
            this.obj0 = {
                name: 'RC',
                age: '27',
                sex: 1
            };
            // this.$set('obj0', 'sex', 1);
            // this.obj0.sex = 1; // 这样不能响应
        },
        changeObj1() {
            this.obj1.child2 = {
                name: 'child2'
            };
        },
        changeArray0() {
            this.array0.push('Girl');
        },
        changeArray1() {
            this.array1.push({
                name: 'array1-child2'
            });
        },
    }
}
</script>

