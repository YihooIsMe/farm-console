import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/generalManagement',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    name:"综合管理",
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/wordManagement',
                    name:"词条管理",
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/userManagement',
                    name:"用户管理",
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/roleManagement',
                    name:"角色管理",
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/resourceManagement',
                    name:"资源管理",
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
