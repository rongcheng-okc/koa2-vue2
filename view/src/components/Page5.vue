<template>
    <div>
        <component :is="currentTabComponent"></component>
        <button @click="changeCom('Com1')">Com1</button>
        <button @click="changeCom('Com2')">Com2</button>
    </div>

</template>
<script>
    import Com1 from './Box1'
    import Com2 from './Box2'
    export default {
        data() {
            return {
                currentTabComponent: ''
            }
        },
        components: {
            Com1,
            Com2
        },
        methods: {
            changeCom(value) {
                this.currentTabComponent = value;
            }
        }
    }
</script>