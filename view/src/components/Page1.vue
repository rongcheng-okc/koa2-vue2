<template>
    <div class="hello">
        <router-view></router-view>
        <div class="top">
          <span>{{ timer }}</span>
        </div>
        <div class="bottom"></div>
        <input type="text" v-model="inputId" class="input-text">
        <button class="btn" @click="btnClick">获取数据</button>
        <ul class="ul">
          <li v-for="(item, index) in peopleList" :key="index">
            {{index}}> &emsp; {{item.name}} -- {{item.age}}
          </li>
        </ul>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: 'Page1',
        created() {
          this.getList();
          var _this = this;
          var clock = setInterval(function() {
            _this.timer ++;
            if(_this.timer > 500) clearInterval(clock);
          }, 1000);
        },
        data() {
            return {
                timer: 0,
                inputId: '',
                peopleList: [],
                host: 'http://127.0.0.1:3000'
            }
        },
        methods: {
            btnClick() {
              this.getList();
            },
            getList() {
                let url = this.host + '/api/getList1?id=' + this.inputId; 
                let _this = this;
                axios.get(url)
                    .then(function (response) {
                        console.log(response);
                        _this.peopleList = response.data;
                    })
                    .catch(function (error) {
                        console.warn(error);
                    });
            },
            
        }
    }
</script>

<style scoped>
    .input-text {
      width: 200px;
      line-height: 30px;
    }
    .btn {
      margin-top: 30px;
      border: solid 1px greenyellow;
      border-radius: 5px;
      line-height: 30px;
      background-color: tomato;
      color: white;
    }
    .top {
      background-color: greenyellow;
      height: 200px;
      font-size: 30px;
      color: white;
    }
    .top span {
      position: relative;
      top: 80px;
    }
    .bottom {
      background-color: aquamarine;
      height: 200px;
      margin-bottom: 20px;
    }
    .ul {
      list-style: none;
    }
    .ul li {
      text-align: left;
      line-height: 30px;
    }
</style>
