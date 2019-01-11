<template>
  <el-scrollbar class="app-container" style="height: 100%">
    <!--侧边栏-->
    <div class="sidebar">
      <el-scrollbar style="height: 100%">
        <sidebar :menu="routes">
        </sidebar>
      </el-scrollbar>
    </div>
    <!--main-->
    <div class="main">
      <router-view/>
    </div>
  </el-scrollbar>
</template>

<script>
  import Routes from './router/routes'
  import sidebar from './components/sidebar'

  export default {
    name: 'App',
    data() {
      return {
        routes: Routes
      }
    },
    components: {
      sidebar
    }
  }
</script>

<style lang="scss" scoped>
  $sidebarWidth: 320px;
  .app-container {
    .sidebar {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: $sidebarWidth;
      border-right: 1px solid #e4e4e6;
      /deep/ .el-scrollbar__bar {
        right: 0;
      }
    }
    .main {
      padding-left: $sidebarWidth;
    }
    /deep/ .el-scrollbar__wrap {
      overflow-x: auto;
    }
  }
</style>
