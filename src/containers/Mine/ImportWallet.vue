<template>
	<base-container>
		<base-header
		 slot="header"
		 title=""
		>
			<div
			 slot="bottom"
			 class="tab-container"
			>
				<div
				 v-for="item in tabs"
				 :key="item.name"
				 class="tab"
				 :class="{active: item.name === renderComponentName}"
				 @click="renderComponentName = item.name"
				>{{item.title}}</div>
			</div>
		</base-header>
		<component
		 slot="content"
		 :is="renderComponentName"
     v-model="walletForm[renderComponentName]"
		/>
    <div class="display-none">
      <div class="button" @click="importWallet">导入钱包</div>
      <p class="tips">点击按钮即表明我已阅读并同意<a class="clause">用户使用条款</a></p>
    </div>
	</base-container>
</template>

<script>
import TipsWord from "./components/TipsWord";
import Wallet from "./components/Wallet";
import PrivateKey from "./components/PrivateKey";
export default {
	name: "WalletIndex",
	components: {
    TipsWord,
    Wallet,
    PrivateKey
	},

	data() {
		return {
			renderComponentName: "TipsWord",
			tabs: [{
					title: "助记词",
					name: "TipsWord"
				},{
					title: "官方钱包",
					name: "Wallet"
				},{
					title: "私钥",
					name: "PrivateKey"
				}
			],
      walletForm: {
        TipsWord: {},
        Wallet: {},
        PrivateKey: {},
      },
		};
	},
  methods:{
    importWallet () {
      this.$toast.success({
        message: "导入成功",
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/common.scss";
  @import "~style";

.tab-container {
	display: flex;
	margin-top: rem(16);
}
.tab {
	position: relative;
	flex: 1;
	padding-bottom: rem(24);
	opacity: 0.5;
	text-align: center;
	color: #fff;
	@include font-size(30);
	&.active {
		opacity: 1;
		&:after {
			content: "";
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translate3d(-50%, 0, 0);
			width: rem(50);
			height: rem(6);
			background-color: #fff;
		}
	}
}
.button {
  padding: rem(19) 0;
  margin-bottom: rem(40);
  text-align: center;
  @include font-size(36);
  color: #fff;
  background-image: linear-gradient(44deg, #222cc3 0%, #2b7cd6 100%);
  border-radius: rem(12);
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
