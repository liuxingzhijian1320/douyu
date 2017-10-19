<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiper"><img :src="item.room_src" alt=""></div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'

  export default {
    name: 'swiper',
    data() {
      return {
        data: [1, 2, 3, 4, 5, 6],
        mySwiper: null
      }
    },
    props: ['swiper'],
    methods: {
      _initSwiper() {
        this.mySwiper = new Swiper('.swiper-container', {
          autoplay: 5000,//可选选项，自动滑动
        })
      }
    },
    watch: {
      swiper() {
        if (this.mySwiper) {
          this.mySwiper.update(true)
        }
        console.info(this.swiper)
      }
    },
    mounted() {
      this._initSwiper()
      this.mySwiper.update(true)
    }
  }
</script>
<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    height: 4rem;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
      .swiper-slide {
        background-size: cover;
        width: 100%;
        height: 4rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }


</style>
