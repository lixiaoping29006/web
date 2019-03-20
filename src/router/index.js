import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import FlowStatement from '@/components/flow/FlowStatement'
// import FlowStatistics from '@/components/flow/FlowStatistics'
// import RealTimeStatus from '@/components/endstation/RealTimeStatus'
// import HistoryStatus from '@/components/endstation/HistoryStatus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    // {
    //   path: '/flow-statement',
    //   name: '端站流量报表',
    //   component: FlowStatement  
    // },
    // {
    //   path: '/flow-tatistics',
    //   name: '实时流量统计',
    //   component: FlowStatistics  
    // },
    // {
    //   path: '/real-timeStatus',
    //   name: '端站实时状态',
    //   component: RealTimeStatus  
    // },
    // {
    //   path: '/history-status',
    //   name: '端站历史状态',
    //   component: HistoryStatus  
    // }
  ]
})
