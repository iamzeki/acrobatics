<template>
  <div>
    <ul class="sidebar">
      <li v-for="item in menu">
        {{item.name}}
        <sidebar v-if="item.children"
                 :menu="item.children">
        </sidebar>
      </li>
    </ul>
  </div>

</template>

<script>
  import routes from './../../router/routes'

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
    methods: {},
    mounted() {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .sidebar {
    padding: 15px 8px;
    .sidebar {
      padding: 8px 0 8px 15px;
      > li {
        padding-left: 5px;
        border-left: 2px solid #333;
      }
    }
    li {
      padding: 8px 0;
    }
  }
</style>
