<template>
  <div class="classify-wrapper">
    <public-header>
      <p class="title">全部分类</p>
    </public-header>
    <div class="classify-content">
      <ul class="ul">
        <li class="li" v-for="(item,index) in gameList">
          <div class="avatar" :style="{backgroundImage:`url(${item.game_icon})`}"></div>
          <p class="name">{{item.game_name}}</p>
        </li>
      </ul>
    </div>
    <loading v-if="showLoading"></loading>
    <back-top></back-top>
  </div>
</template>

<script>
  import Public from '../../public.js'
  import BackTop from 'components/BackTop'

  export default {
    name: 'classify',
    data() {
      return {
        gameList: [],
        showLoading: true
      }
    },
    components: {
      BackTop
    },
    mixins: [Public],
    created() {
      this.axios.get('/douyuapi/RoomApi/game')
        .then(res => {
          this.gameList = res.data.data
          setTimeout(() => {
            this.showLoading = false
          }, 2000)
        })
        .catch(err => {

        })
    }
  }

</script>

<style scoped lang="scss">
  .classify-wrapper {
    width: 100%;
    min-height: 100vh;
  }

  .classify-content {
    margin-top: 0.9rem;
    .ul {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
    }
    .li {
      width:2.5rem;
      padding:0.3rem 0;
    }
    .avatar {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      margin: 0 auto;
    }
    .name {
      margin-top: 0.3rem;
      font-size:0.32rem;
    }
  }
</style>
