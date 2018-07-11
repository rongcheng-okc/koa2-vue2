<template>
  <div class="box">
    <h1>I am box {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Box1',
  data () {
    return {
      msg: '1'
    }
  }
}
</script>

<style scoped>
.box {
    height: 50px;
    color: white;
    background-color: #42b983;
}
.box {
    line-height: 50px;
}
</style>
