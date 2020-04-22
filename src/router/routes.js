// import Home from "../components/Home"
// import Shopcar from "../components/Shopcar"
// import About from "../components/About"
//路由的懒加载
const Home = () => import('../components/Home')
const Shopcar = () => import('../components/Shopcar')
const About = () => import('../components/About')
const Details = () => import('../components/Details')

export default [
  {
    path: '',
    redirect: '/home',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/Shopcar',
    component: Shopcar,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于我'
    }
  },
  {
    path: '/details',
    component: Details,
    meta: {
      title: '游戏详情'
    }
  }
]
