import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Box1 from '@/components/Box1'
import Box2 from '@/components/Box2'

import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'
import Page3 from '@/pages/Page3'
import Page4 from '@/pages/Page4'
import Page5 from '@/pages/Page5'
import Page6 from '@/pages/Page6'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'page3',
      component: Page3
    },
    {
      path: '/page4',
      name: 'page4',
      component: Page4
    },
    {
      path: '/page5',
      name: 'page5',
      component: Page5
    },
    {
      path: '/page6',
      name: 'page6',
      component: Page6
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'box1',
          component: Box1
        },
        {
          path: 'box2',
          component: Box2
        }
      ]
    },
  ]
})
