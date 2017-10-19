<template>
  <header class="header">
    <i class="fa fa-bars icon" aria-hidden="true" @click="showSide"></i>
    <slot></slot>
    <i class="fa fa-user-o icon" aria-hidden="true" @click="goUser" v-if="!avatar"></i>
    <img :src="avatar" class="avatar" alt="" v-if="avatar" @click="goUser">
  </header>
</template>

<script>
  import bus from '../../bus.js'

  export default {
    name: 'header',
    data() {
      return {
        showAvatar: false,
        avatar: localStorage.getItem('headImg')
      }
    },
    methods: {
      showSide() {
        bus.$emit('sideShow')
      },
      goUser() {
        this.$router.push({ path: '/user' })
      }
    },
    mounted() {
      bus.$on('avatar', (val) => {
        this.avatar = val
      })
    }
  }
</script>
<!--加上scoped属性 css样式就变为私有的-->
<style scoped lang="scss">
  .header {
    height: 0.9rem;
    background: #333;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    /*padding:0 0.3rem;*/
    color: #fff;
    line-height: 0.9rem;
    font-size: 0.32rem;
    margin-bottom: 0.9rem;
    display: flex;
    .icon {
      color: #999;
      padding: 0.2rem;
      /*background-color: #fff;*/
      width: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .title {
    margin-left: 0.3rem;
    display: inline-block;
    flex: 1;
  }

  .avatar {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    margin: 0.2rem 0.2rem 0 0;
  }
</style>
