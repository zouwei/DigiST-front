<template>
  <base-container>
    <base-header
      slot="header"
      title="备份钱包"
      :back="true"
    />
      <div class="main" slot="content">
      <p class="title">立即备份你的钱包</p>
      <div class="tips">
        <p>*备份钱包：导出（助记词）并抄写到安全的地方，不要保存到网络上，然后就可以尝试转入转出小额资产，开始使用。</p>
      </div>
      <base-button text="备份钱包"></base-button>
    </div>
  </base-container>

</template>

<script>

  import BaseButton from "../../components/BaseButton"
  export default {
    name: "BackupWallet",
    components: {
      BaseButton
    },
    data() {
      return {
      };
    },

  };
</script>

<style lang="scss" scoped>
  @import "~style";
  .main {
    padding: 0 20px;
    .title {
      font-size: 18px;
      color: #1B2944;
      letter-spacing: 0.45px;
      text-align: center;
      padding-top: 30px;
    }
    .tips {
      font-size: 14px;
      color: #F91F01;
      letter-spacing: 0.36px;
      margin: 20px 0;
      p {
        line-height: 18px;
      }
    }
  }

</style>
