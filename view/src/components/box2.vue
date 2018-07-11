<template>
  <div class="box">
    <h1>I am box {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Box2',
  data () {
    return {
      msg: '2'
    }
  }
}
</script>

<style scoped>
.box {
    height: 50px;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
}
.box {
    line-height: 50px;
}
</style>
