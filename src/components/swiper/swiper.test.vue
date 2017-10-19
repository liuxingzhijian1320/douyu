<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiper" :style="`backgroundImage:url(${item.room_src}})`"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'

  export default {
    name: 'swiper',
    data() {
      return {
        mySwiper: null,
      }
    },
    props: ['swiper'],
    methods: {
      _initSwiper() {
        this.mySwiper = new Swiper('.swiper-container', {
          autoplay: 5000,
        })
      },
      updateSwiper() {
        this.$nextTick(() => {
          if (this.mySwiper) {
            this.mySwiper.update(true);
          } else {
            this._initSwiper();
          }
        });
      },

    },
    updated() {
      this.updateSwiper();
    },
//    watch:{
//      swiper(){
//        return this.swiper
//      }
//    }
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
        height: 100%;
      }
    }
  }


</style>
