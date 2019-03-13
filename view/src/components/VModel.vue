<template>
    <input type="text" v-bind:value="value" v-on:change="$emit('change', $event.target.value)">
</template>

<script>
    export default {
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            value: String
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>