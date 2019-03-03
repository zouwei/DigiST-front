<template>
  <base-container>
    <base-header
      slot="header"
      title="助记词"
      :back="true"
    />
    <div class="main" slot="content">
      <p class="title">抄写下你的钱包助记词</p>
      <div class="tips">
        <p>*助记词用于恢复或重置钱包密码，将它准确地抄到纸上，并存放在只有你知道的安全的地方。</p>
      </div>
      <div class="mnemonic">
        <p>car teacher pictures last from car teacher
          pictures last from car teacher pictures</p>
      </div>
      <base-button text="开始使用"></base-button>
    </div>
  </base-container>

</template>

<script>

  import BaseButton from "../../components/BaseButton"
  export default {
    name: "Mnemonic",
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
    .mnemonic {
      width: 100%;
      background: #F4F4F4;
      border-radius: 12px;
      margin: 20px auto;
      padding: 15px 10px;
    }
  }

</style>
