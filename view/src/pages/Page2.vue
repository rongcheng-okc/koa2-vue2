<template>
    <div>
        <h3>Here is a custom v-model components.</h3>
        <!-- <VModelInput :value="placeholder" @change="dealValueChange"></VModelInput> -->
        <VModelInput v-model="placeholder"></VModelInput>
    </div>
</template>
<script>
import VModelInput from '../components/VModel'
export default {
    data() {
        return {
            placeholder: 'RC'
        }
    },
    components: {
        VModelInput
    },
    methods: {
        dealValueChange(e) {
            this.placeholder = e;
            console.log(e);
        }
    }
}
</script>

