<template>
  <div class="demo">
    tab2
    <span>color</span>
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
span{
  color: blue;
}

</style>