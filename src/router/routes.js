export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('@pages/home/home'),
    children: [
      // 测试页面配置
      {
        path: '/test-page1',
        name: 'test-page1',
        component: () => import('@pages/test-page1/test-page1')
      },
      // 测试页面注释
      {
        path: '/test-page',
        name: 'test-page',
        component: () => import('@pages/test-page/test-page')
      },
      {
        path: '/sample',
        name: 'sample',
        component: () => import('@pages/sample/sample')
      },
      {
        path: '/other-pages',
        name: 'other-pages',
        component: () => import('@pages/other-pages/other-pages')
      },
    ]
  },
  {
    path: '/404',
    name: '404',
    component: require('@pages/_404/_404').default,
    props: true
  },
  {
    path: '*',
    redirect: '404'
  }
]

// function lazyLoadView(AsyncView) {
//   const AsyncHandler = () => ({
//     component: AsyncView,
//     loading: require('@pages/_loading/_loading').default,
//     delay: 400,
//     error: require('@pages/_timeout/_timeout').default,
//     timeout: 10000
//   })
//
//   return Promise.resolve({
//     functional: true,
//     render(h, {data, children}) {
//       // 将属性和方法传递给所有展示组件
//       return h(AsyncHandler, data, children)
//     }
//   })
// }
