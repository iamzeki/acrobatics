import home from './../page/home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/css',
    name: 'css',
    redirect: '/css/test',
    children: [
      {
        path: '/css/test',
        name: 'test'
      }
    ]
  }
];

export default routes