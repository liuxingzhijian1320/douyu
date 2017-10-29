<template>
    <div class="detail">
        detail
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

    mounted() {
      this.getRoomData()
    },
    methods: {
      getRoomData() {
        this.axios.get(`/douyuapi/RoomApi/room/${this.$route.params.id}`)
          .then(res => {
            this.detail = res.data
            console.info('detail', this.detail
            )
          })
          .catch(err => {

          })
      }
    }
  }
</script>

<style lang="scss">

</style>
