import Home from './../page/home'
import Css from './../page/css'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/css',
    name: 'CSS',
    redirect: '/css/waterfallFlow',
    component: Css,
    children: [
      {
        path: '/css/waterfallFlow',
        name: 'waterfallFlow',
        text: '瀑布流布局(flex)',
        component: () => import('./../page/css/waterfallFlow')
      }
    ]
  }
];

export default routes