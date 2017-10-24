<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiper"><img :src="item.room_src" alt=""></div>
      <!--<div class="swiper-slide" v-for="item in test"><img :src="item.room_src" alt=""></div>-->
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
        mySwiper: null,
        test:[
          "https://rpic.douyucdn.cn/acrpic/171024/288016_0921.jpg",
          "https://rpic.douyucdn.cn/acrpic/171024/748396_0924.jpg",
          "https://rpic.douyucdn.cn/acrpic/171024/453751_0922.jpg",
          "https://rpic.douyucdn.cn/acrpic/171024/79663_0920.jpg"
        ]
      }
    },
    props: ['swiper'],
    methods: {
      _initSwiper() {
        this.$nextTick(()=>{
        this.mySwiper = new Swiper('.swiper-container', {
          autoplay: 5000,//可选选项，自动滑动
        })
        })
      },
      _updateSwiper(){
        this.$nextTick(()=>{
          this.mySwiper.update(true);
        })
      },
      swiperUpdate(){
        if(this.mySwiper ){
          this._updateSwiper();
        }else{
          this._initSwiper();
        }
      },
    },

    watch: {
      swiper() {
          this.swiperUpdate();
      }
    },
    mounted() {
      this.swiperUpdate();
    }
  }
</script>
<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    height: 4rem;
    margin-top: 0.9rem;
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
