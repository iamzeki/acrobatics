<template>
  <!--下划线波浪效果-->
  <div class="wave-line-box pt20 pb20 pl20">
    <a class="wave-line" href="javascript:">波浪线</a>
  </div>
</template>

<script>
  export default {
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
  .wave-line-box {

  }
  .wave-line {
    padding: 2px;
    color: red;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='%23ff0000' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/%3E%3C/svg%3E") repeat-x 0 100%;
      background-size: 20px auto;
      animation: waveMove 1s infinite linear;
    }
  }

  @keyframes waveMove {
    from {
      background-position: 0 100%;
    }
    to {
      background-position: -20px 100%;
    }
  }
</style>
