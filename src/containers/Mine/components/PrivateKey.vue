<template>
  <div>
    <van-cell-group>
      <van-field v-model="form.privateKey"
                 type="textarea"
                 class="mnemonic" placeholder="PrivateKey" />
      <van-field
        v-model="form.pwd"
        clearable
        type="password"
        placeholder="输入密码" />
      <van-field v-model="form.repeatPwd"
                 clearable
                 type="password" placeholder="确认密码" />
    </van-cell-group>
    <my-button ></my-button>

  </div>
</template>

<script>

  import formWatchMixins from './formWatchMixins'
  import MyButton from './MyButton'
  export default {
    name: "PrivateKey",
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
          privateKey: '',
          pwd: '',
          repeatPwd: '',
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

</style>
