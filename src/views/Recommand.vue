<template>
    <div class="mr-root">
        <public-header>
            <p class="title">推荐</p>
        </public-header>
        <div class="mr-content">
            该页面正在开发中,敬请期待...
        </div>


        <!--<div class="delete_div">-->
            <!--<slider_delete :sliderConf="sliderConf">-->
                <!--<div class="content">wrwe</div>-->
            <!--</slider_delete>-->
            <!--<div class="delete_button">删除</div>-->
        <!--</div>-->


    </div>
</template>

<script>
  import PublicHeader from 'components/header/Header'
  import SliderDelete from "components/slider.delete/slider.delete.vue";

  export default {
    data() {
      return {
        sliderConf: {//滑动配置
          distance: 1.4,
        }
      }
    },
    components: {
      PublicHeader,
      "slider_delete": SliderDelete,
    }
  }
</script>

<style>
    .mr-content {
        margin-top: 0.9rem;
    }

    .content{
        background-color: black;
        width: 10rem;
        height: 3rem;
    }
    .delete_button{
        position: absolute;
        background-color: red;
        right: 0;
        width: 1.4rem;
        height: 3rem;
    }
    .delete_div{
        position: relative;
        height:5rem;
    }
</style>
