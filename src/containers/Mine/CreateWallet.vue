<template>
  <base-container>
    <base-header
      slot="header"
      title="创建钱包"
      :back="true"
    />
	<div class="main" slot="content">
    <van-cell-group>
      <van-field v-model="form.name"
                 placeholder="钱包名称" />
      <van-field v-model="form.pwd"
                clearable
                type="password"
                placeholder="输入密码" />
      <van-field v-model="form.repeatPwd"
                 clearable
                 type="password" placeholder="确认密码" />
      <van-field v-model="form.tips"
                 placeholder="密码提示" />
    </van-cell-group>
    <div class="tips">
      <p>*助记词用于恢复或重置钱包密码，将它准确地抄到纸上，并存放在只有你知道的安全的地方。</p>
    </div>
    <my-button text="创建"></my-button>
	</div>
  </base-container>
</template>

<script>
import MyButton from './components/MyButton'
export default {
  name: "CreateWallet",
  components: {
    MyButton
  },
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
        name: '',
        pwd: '',
        repeatPwd: '',
        tips: '',
      }
		};
	},
};
</script>

<style lang="scss" scoped>
@import "~style";
.tips {
  font-size: 14px;
  color: #F91F01;
  letter-spacing: 0.36px;
  margin: 20px 0;
  p {
    line-height: 18px;
    padding: 10px 20px;
  }
}

</style>
