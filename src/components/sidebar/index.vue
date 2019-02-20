<template>
  <ul class="sidebar">
    <li v-for="item in menu"
        :class="{active: $route.path === item.path}"
        @click.stop="toPath(item)">
      <div class="item">
        {{item.text || item.name}}
        <i class="el-icon-arrow-down" v-if="item.children"></i>
      </div>
      <sidebar v-if="item.children"
               :menu="item.children">
      </sidebar>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'sidebar',
    props: {
      menu: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {}
    },
    components: {},
    methods: {
      toPath({path}) {
        this.$router.push({path})
      }
    },
    mounted() {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .sidebar {
    padding: 15px 15px;
    li {
      padding: 8px 0;
      cursor: pointer;
      border-bottom: 1px solid #eee;
      &:last-of-type {
        border-bottom: 0;
      }
      &.active {
        color: #409EFF;
        cursor: default;
        .item {
          border-right: 2px solid #409EFF;
        }
      }
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 2px 0;
      }
      > .sidebar {
        padding: 8px 0 8px 30px;
        li {
          //border-bottom: 0;
          display: flex;
          align-items: center;
          &:before {
            display: inline-block;
            width: 5px;
            height: 5px;
            margin-right: 6px;
            border-radius: 100%;
            border: 1px solid #333;
            content: '';
          }
          &.active {
            &:before {
              border-color: #409EFF;
            }
          }
        }
      }
    }
  }
</style>
