function install(Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue.myGlobalMethod' + JSON.stringify(options));
    }
  
    // 2. 添加全局资源
    // Vue.directive('my-directive', {
    //   bind (el, binding, vnode, oldVnode) {
    //     // 逻辑...
    //   }
    // })
  
    // 3. 注入组件
    // Vue.mixin({
    //   created: function () {
    //     // 逻辑...
    //   }
    // })
  
    // 4. 添加实例方法
    Vue.prototype.$myGlobalMethod = function (methodOptions) {
      console.log('Vue.prototype.$myGlobalMethod');
    }
  }

  const TestPlugin = { install }; 

  export default TestPlugin;