<template>
    <div class="user-wrapper">
        <public-header>
            <p class="title">个人中心</p>
        </public-header>

        <!--<img :src="headUrl"/>-->

        <div class="avatar-cont">

            <div class="avatar" v-if="headUrl" @click.stop="uploadHeadImg" :style="{backgroundImage:`url(${headUrl})`}">
                <loading v-show="show"></loading>
            </div>
            <div class="fake-avatar" v-if="!headUrl" @click.stop="uploadHeadImg">
                <loading v-show="show"></loading>
            </div>
        </div>

        <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>


        <ul class="user-ul">
            <li class="user-li" @click="changeFace(item)" v-for="item in color" :style="{backgroundColor:`${item}`}"></li>
        </ul>


    </div>
</template>

<script>
  import PublicHeader from 'components/header/Header'
  import loading from 'components/loading/loading'
  import bus from '../../bus.js'


  export default {
    name: 'info',
    data() {
      return {
        show: false,
        headUrl: localStorage.getItem('headImg') || '',
        color: ['red', 'purple', 'green', 'pink', 'orange','#333']
      }
    },
    components: {
      PublicHeader,
      loading
    },
    beforeRouteEnter(to, from, next) {
      next()
    },
    methods: {
      // 打开图片上传
      uploadHeadImg() {
        this.$el.querySelector('.hiddenInput').click()
      },
      //保存图片为base64位
      handleFile(e) {
        let $target = e.target || e.srcElement
        let file = $target.files[0]
        var reader = new FileReader()
        reader.onload = (data) => {
          let res = data.target || data.srcElement
          let img = new Image()
          img.onload = () => {
            // 回调更新父组件数据
            this.show = true
            localStorage.setItem('headImg', res.result)
            setTimeout(() => {
              this.headUrl = localStorage.getItem('headImg')
              this.show = false
              bus.$emit('avatar', this.headUrl)
            }, 1000)
          }
          img.src = res.result
        }
        reader.readAsDataURL(file)
      },

      changeFace(val) {
        bus.$emit('face', val)
        localStorage.setItem('face',val)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

    .avatar-cont {
        width: 1.46rem;
        height: 1.46rem;
        margin: 0 auto;
        margin-top: 1rem;
    }

    .avatar {
        width: 1.5rem;
        height: 1.5rem;
        background-size: cover;
        background-color: #f3f3f3;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .fake-avatar {
        width: 1.46rem;
        height: 1.46rem;
        background-image: url('./images/avatar.jpg');
        background-size: cover;
        border-radius: 50%;
        border: 3px solid rgba(#8a5e99, .1);
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .info-field {
        text-align: center;
        font-size: 16px;
        color: #999;
    }

    /* 隐藏的输入框 */
    .hiddenInput {
        opacity: 0;
        position: absolute;
        display: none;
    }

    .user-ul {
        display: flex;
        width: 100%;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding:0 0.3rem;
        margin-top:1rem;
        .user-li {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
    }


</style>


