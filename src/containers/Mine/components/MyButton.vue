<template>
    <div class="main">
      <div class="btn">
        <base-button text="导入钱包" style=""></base-button>
      </div>
      <p class="tips">点击按钮即表明我已阅读并同意<a class="clause">用户使用条款</a></p>
    </div>
</template>

<script>
  import BaseButton from "../../../components/BaseButton"
  export default {
    name: "MyBotton",
    components: {
      BaseButton
    },
    props: {

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
    margin-top: 30px;
    .btn {
      width: 90%;
      margin: 0 auto;
    }
  }
  .tips {
    text-align: center;
    @include font-size(20);
    color: #8c8c8c;
  }
  .clause {
    color: #2b70c3;
    text-decoration: underline;
  }
</style>
