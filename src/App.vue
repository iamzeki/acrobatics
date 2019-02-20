<template>
  <div class="app-container">
    <!--侧边栏-->
    <div :class="['app-container_sidebar', {'sidebar-hide': isHideSidebar}]"
         @mouseenter="isShowToggle = true"
         @mouseleave="isShowToggle = false">
      <!--收起按钮-->
      <div class="sidebar-toggle"
           v-if="isShowToggle || isHideSidebar"
           @click.stop="isHideSidebar = !isHideSidebar">
        <i :class="`el-icon-d-arrow-${isHideSidebar ? 'right' : 'left'}`"></i>
      </div>
      <el-scrollbar style="height: 100%">
        <sidebar :menu="routes"/>
      </el-scrollbar>
    </div>
    <!--main body-->
    <div class="app-container_main">
      <el-scrollbar style="height: 100%">
        <router-view/>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
  import Routes from './router/routes'
  import sidebar from './components/sidebar'

  export default {
    name: 'App',
    data() {
      return {
        routes: Routes,
        isHideSidebar: false,
        isShowToggle: false
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
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    height: 100%;
    overflow: hidden;
    &_sidebar {
      position: relative;
      flex: $sidebarWidth 0 0;
      transition: .3s ease-out;
      border-right: 1px solid #e4e4e6;
      &.sidebar-hide {
        margin-left: -$sidebarWidth;
      }
      .sidebar-toggle {
        position: absolute;
        top: 50%;
        right: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(100%, -50%);
        width: 22px;
        height: 42px;
        border-radius: 0 6px 6px 0;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        cursor: pointer;
        font-size: 14px;
        opacity: .7;
        &:hover {
          opacity: 1;
        }
      }
    }
    &_main {
      position: relative;
      flex: auto 1 0;
    }
    /deep/ .el-scrollbar__wrap {
      overflow-x: auto;
    }
  }
</style>
