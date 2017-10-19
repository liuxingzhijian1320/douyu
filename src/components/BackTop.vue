<template>
  <div class="backTop" v-show="scroll" @click="backTop">
    <i class="icon-arrow-up fa fa-arrow-up"></i>
    <!--<div id="outer"></div>-->
    <!--<div id="text">-->
    <!--<i  class="icon-arrow-up fa fa-arrow-up"></i>-->
    <!--</div>-->
    <!--<div id="inner"></div>-->
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    data() {
      return {
        scroll: false
      }
    },
    methods: {
      backTop() {
        $(".backTop").click(function () {
          var sc = $(window).scrollTop();
          $('body,html').animate({ scrollTop: 0 }, 500);
        })
      },
    },
    mounted() {
      var _this = this
      window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
//        console.info(scrollTop)
        if (scrollTop > 300) {
          _this.scroll = true
        } else {
          _this.scroll = false
        }
      }
    }
  }

</script>

<style>
  .backTop {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    background-color: #fff;
    border-radius: 50%;
    width:1rem;
    height: 1rem;
  }

  #outer {
    background-color: rgba(0, 0, 0, 0);
    border: 5px solid rgba(10, 10, 10, 0.9);
    opacity: .9;
    border-right: 5px solid rgba(0, 0, 0, 0);
    border-left: 5px solid rgba(0, 0, 0, 0);
    border-radius: 50%;
    box-shadow: 0 0 35px #808080;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 auto;
    position: fixed;
    right: 0.6rem;
    bottom: 0.6rem;
    -moz-animation: spinPulse 1s infinite linear;
    -webkit-animation: spinPulse 1s infinite linear;
    -o-animation: spinPulse 1s infinite linear;
    -ms-animation: spinPulse 1s infinite linear;
  }

  @keyframes spinPulse {
    0% {
      -webkit-transform: rotate(160deg);
      opacity: 0;
      box-shadow: 0 0 1px #505050;
    }
    50% {
      -webkit-transform: rotate(145deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(-320deg);
      opacity: 0;
    }
  }

  #inner {
    background-color: rgba(0, 0, 0, 0);
    border: 6px solid rgba(20, 20, 20, 0.9);
    opacity: 0.9;
    border-left: 6px solid rgba(0, 0, 0, 0);
    border-right: 6px solid rgba(0, 0, 0, 0);
    border-radius: 50%;
    box-shadow: 0 0 0.15rem #202020;
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 auto;
    position: fixed;
    right: 0.78rem;
    bottom: 0.78rem;
    -moz-animation: spinoffPulse 1s infinite linear;
    -webkit-animation: spinoffPulse 1s infinite linear;

  }

  @keyframes spinoffPulse {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  #text {
    width: 0.92rem;
    height: 0.4rem;
    line-height: 0.3rem;
    margin: 0 auto;
    position: fixed;
    right: 0.92rem;
  }

  .icon-arrow-up {
    width: 100%;
    height: 100%;
    font-size: 0.4rem;
    border: 1px solid #ccc;
    color: #ccc;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
