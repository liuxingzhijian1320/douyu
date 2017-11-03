<template>
    <div class="hotnews" ref="hotnews">

        <ul class="hot-ul">
            <li v-for="item in hot" class="hot-li">
                <div class="avatar"><img :src="item.avatar_small" alt=""></div>
                <div class="desc">{{item.nickname}}</div>
            </li>
        </ul>

    </div>
</template>
<script>
  import $ from 'jquery'

  export default {
    name: 'hotnews',
    data() {
      return {
        timer: null
      }
    },
    props: ['hot'],

    methods: {
      scrollup(id, height) {
        var ul = $(id);
        var liFirst = ul.find('.hot-li:first');
        $(id).animate({ top: height }).animate({ "top": 0 }, 0, () => {
          var clone = liFirst.clone();
          $(id).append(clone);
          liFirst.remove();
        })
      },

      initTime() {

        clearInterval(this.timer)

        this.timer = setInterval(() => {
          this.scrollup('.hot-ul', '-0.8rem')
        }, 2000)

      }

    },
    activated() {
      this.initTime()
    },
    destroyed() {
//      this.timer = null;
//      clearInterval(this.timer)
    }
  }
</script>
<style scoped lang="scss">

    .hotnews {
        position: relative;
        width: 100%;
        height: 0.8rem;
        overflow: hidden;
        .hot-ul {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            .hot-li {
                width: 100%;
                height: 0.8rem;
                line-height: 0.8rem;
                color: #333;
                padding-left: 0.3rem;
                font-size: 0.3rem;
                display: flex;
                .avatar {
                    padding-top: 0.1rem;
                    width: 0.6rem;
                    height: 0.7rem;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
                .desc {
                    flex: 1;
                    padding-left: 0.3rem;
                }
            }
        }
    }
</style>
