<template>
    <div class="detail">

        <div class="video" @click="showMessage">
            <i class="fa fa-play-circle-o"></i>
            <div class="status"><span class="room_status">{{detail.room_status == 1 ? '开播' : '关播'}}</span></div>
        </div>

        <div class="info">主播：{{detail.owner_name}}</div>
        <div class="info">观看人数：{{detail.online}}</div>


    </div>
</template>

<script>
  export default {
    data() {
      return {
        detail: {}
      }
    },
    components: {},

    activated() {
      this.getRoomData()


    },
    methods: {
      getRoomData() {
        this.axios.get(`/douyuapi/RoomApi/room/${this.$route.params.id}`)
          .then(res => {
            this.detail = res.data.data
            console.info('detail', this.detail)

            this.setTitle(this.detail.owner_name)

          })
          .catch(err => {
            MessageBox.alert(err)
          })
      },
      showMessage() {
        MessageBox.alert('查看assets/pdf的接口文档')
      },
      statusHandler(val) {
        if (val == 1) {
          return '开播'
        } else {
          return '关播'
        }
      }
    }
  }
</script>

<style lang="scss">
    .detail {
        height: 100vh;
        width: 100%;
    }

    .video {
        height: 3rem;
        width: 100%;
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        i {
            font-size: 0.8rem;
            color: #fff;
        }
        .status {
            position: absolute;
            width: 0;
            height: 0;
            border-top: 1.2rem solid red;
            border-left: 1.2rem solid transparent;
            right: 0;
            top: 0;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            .room_status {
                margin-right: 0.8rem;
                margin-top: -1.65rem;
                font-size: 0.3rem;
                transform: rotate(-45deg);
            }
        }
    }

    .info {
        padding-left: 0.3rem;
        line-height: 1.7;
        font-size: 0.3rem;
    }
</style>
