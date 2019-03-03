/**
* Created By WiFi_Uncle ON 23:06
*/
<template>
    <div class="main">
      <div >
        <div class="head inline-block">
          <img src="http://img5.duitang.com/uploads/item/201409/23/20140923094045_BNYji.thumb.700_0.png" alt="">
        </div>
        <div class="inline-block">
          <p>Amy Walker</p>
        </div>
      </div>
      <div >
        <ul class="sub-menu">
          <li class="flex item" v-for="(item, i) in subMenu" :key="i" @click="goto(item.url)">
            <span class="inline-block flex1 text-align-left" >{{item.name}}</span>
            <i class="inline-block flex1 text-align-right" >》</i>
          </li>
        </ul>
      </div>
    </div>
</template>


<script>

  export default {
    name: 'Mine',
    data() {
      return {
        subMenu: [{
          name: '钱包',
          url: '/mine/importWallet'
        },{
          name: '身份认证',
          url: '/mine/wallet'
        },{
          name: '统计分析',
          url: '/'
        },{
          name: '通知',
          url: '/'
        }]
      }
    },
    methods: {
      goto (url) {
        this.$router.push({path: url});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
  @import "../../assets/scss/common.scss";
  .main {
    background-color: $mainBackgroundColor;
    height: 100%;

    .head {

    }
    .sub-menu {
      .item {
        height: 88px;
        background: #FFFFFF;
        font-size: 16px;
        line-height: 45px;
        margin-bottom: 10px;
      }
    }
  }
</style>
