<template>
  <div class="home">
    <p class="orange">WELCOME</p>
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
  .home {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .orange {
    font-size: 78px;
    color: #fff;
    animation: orange 1.5s ease-in-out infinite alternate;
  }

  @keyframes orange {
    to {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff5722, 0 0 70px #ff5722, 0 0 80px #ff5722, 0 0 100px #ff5722, 0 0 150px #ff5722;

    }
    from {
      filter: brightness(110%);
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff5722, 0 0 35px #ff5722, 0 0 40px #ff5722, 0 0 50px #ff5722, 0 0 75px #ff5722;
    }
  }
</style>
