<template>
  <div class="home-wrapper">
    <public-header>
      <p class="title">斗鱼TV</p>
    </public-header>
    <swiper :swiper="roomList.slice(6,10)"></swiper>
    <div class="home-content">
      <div class="home-ul">
        <home-item v-for="(item,index) in roomList" :item="item" :key="index"></home-item>
      </div>
      <div class="loadMore">
        <span @click="loadMore">点击加载更多</span>
      </div>
    </div>
    <back-top></back-top>
    <loading v-if="showLoading"></loading>
  </div>
</template>

<script>
  import Public from '../../public.js'
  import HomeItem from 'components/home.item/HomeItem'
  import BackTop from 'components/BackTop'
  import swiper from 'components/swiper/swiper'

  export default {
    data() {
      return {
        showLoading: true,
        roomList: [],
        count: 0,
        swiperData: [1, 2, 3, 5]
      }
    },
    mixins: [Public],
    components: {
      HomeItem,
      BackTop,
      swiper
    },
    activated() {
      this._fetchData(this.count)
    },
    methods: {
      _fetchData(page) {
        this.axios.get(`/douyuapi/RoomApi/live?offset=${page}&limit=20`)
          .then(res => {
            this.showLoading = false
            this.roomList = this.roomList.concat(res.data.data)
          })
          .catch(err => {
            this.showLoading = false
          })
      },
      loadMore() {
        this.count++
        this._fetchData(this.count)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-wrapper {
    width: 100%;
    min-height: 100vh;
  }

  .home-content {
    height: 100%;
    width: 100%;
    .home-ul {
      width: 100%;
      padding: 0.3rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  .loadMore {
    margin: 10px;
    text-align: center;
  }

  .loadMore span {
    display: inline-block;
    line-height: 30px;
    padding: 0 20px;
    border-radius: 10px;
    border: 1px solid #000;
  }
</style>
