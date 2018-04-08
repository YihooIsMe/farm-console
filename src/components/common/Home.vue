<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <header-tab></header-tab>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import headerTab from './headerTab.vue';
    export default {
        components:{
            vHead, vSidebar,headerTab
        }
    }
</script>
