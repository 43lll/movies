import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Login from '@/components/Login.vue'
import Reg from '@/components/Reg.vue'
import AdminLogin from '@/components/AdminLogin.vue'
import Center from '@/components/Center.vue'
import Management from '@/components/Management.vue'
import Manager from '@/components/manage/Manager.vue'
import movies from '@/components/manage/movies.vue'
import statistical from '@/components/manage/statistical.vue'
import category from '@/components/category.vue'
import detail from '@/components/detail.vue'
import His from '@/components/center/His.vue'
import Collect from '@/components/center/Collect.vue'
import Se from '@/components/center/Se.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Index },
    { path: '/Login', component: Login },
    { path: '/Reg', component: Reg },
    { path: '/Adm', component: AdminLogin },
    {
      path: '/Center', component: Center,
      children: [
        { path: '/Center/History', component: His },
        { path: '/Center/Collect', component: Collect },
        { path: '/Center/Seave', component: Se },
      ]
    },
    {
      path: '/Management', component: Management,
      children: [
        { path: '/Management/Manager', component: Manager },
        { path: '/Management/movies', component: movies },
        { path: '/Management/statistical', component: statistical },
      ]
    },
    { path: '/category', component: category },
    { path: '/detail', component: detail },


  ]
})
