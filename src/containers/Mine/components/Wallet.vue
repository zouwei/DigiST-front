<template>
  <div>
    <van-cell-group>
      <van-field v-model="form.keyStore"
                 type="textarea"
                 class="mnemonic" placeholder="输入助记词，按空格分隔" />
      <van-field
        v-model="form.pwd"
        clearable
        type="password"
        placeholder="输入密码" />
    </van-cell-group>
    <p class="text-align-center tips">*直接复制粘贴以太坊官方钱包keystore文件内容至输入框。</p>
    <my-button ></my-button>
  </div>
</template>

<script>
  import formWatchMixins from './formWatchMixins'
  import MyButton from './MyButton'
  export default {
    name: "Wallet",
    components: {
      MyButton
    },
    mixins: [formWatchMixins],
    props: {
      value: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data() {
      return {
        form: {
          keyStore: '',
          pwd: '',
        }
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "~style";
  .mnemonic {
    height: 80px;
  }
  .tips {
    margin-top: 10px;
    font-size: 12px;
    color: #FA2400 ;
  }
</style>
