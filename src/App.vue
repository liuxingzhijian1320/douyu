<template>
    <div id="app">
        <transition name="side">
            <side-menu v-show="show" @close="hideSide" ></side-menu>
        </transition>
        <keep-alive>
            <router-view :userinfo="userinfo" @update-userinfo="updateUserinfo"></router-view>
        </keep-alive>
    </div>
</template>

<script>
  import SideMenu from 'components/sidemenu/SideMenu'
  import bus from './bus.js'

  export default {
    data() {
      return {
        show: false,
        userinfo: {
          headUrl: '',  // 头像链接
          color: '',
        },
      }
    },
    components: {
      SideMenu
    },
//      当组件挂载到页面上之后
    mounted() {
      bus.$on('sideShow', this.side)
    },
    methods: {
      side() {
        this.show = !this.show
      },
      hideSide() {
        this.show = false
      },
      // 更新头像数据
      updateUserinfo(obj) {
        this.userinfo = Object.assign(this.userinfo, obj)
      },
    }
  }
</script>

<style lang="scss">
    @import './assets/styles/normalize.scss';
    @import './assets/styles/reset.scss';
    @import './assets/styles/mixin.scss';
    @import './assets/styles/func.css';

    #app {
        /*padding-top: 0.9rem;*/
    }

    .side-enter-active, .side-leave-active,
    .side-enter-active ul, .side-leave-active ul {
        transition: all .4s linear;
    }

    .side-enter, .side-leave-active {
        opacity: 0;
    }

    .side-enter ul, .side-leave-active ul {
        transform: translateX(-50%);
        opacity: 0;
    }
</style>
