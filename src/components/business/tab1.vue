<template>
  <div class="demo">
    tab1
    <span>color</span>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require('../../assets/images/1111.png'),
      value: 3,
    };
  },
  mounted() {
    console.warn(process.env);
  },
};
</script>

<style lang="css" scoped>
</style>