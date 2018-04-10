<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" background-color="#324157" text-color="#fff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'generalManagement',
                        title: '综合管理'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '基础数据',
                        subs: [
                            {
                                index: 'wordManagement',
                                title: '词条管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '系统设置',
                        subs: [
                            {
                                index: 'userManagement',
                                title: '用户管理'
                            },
                            {
                                index: 'roleManagement',
                                title: '角色管理'
                            },
                            {
                                index: 'resourceManagement',
                                title: '资源管理'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
    .el-menu-item, .el-submenu__title{
        height:45px !important;
        line-height:45px !important;
    }
</style>
