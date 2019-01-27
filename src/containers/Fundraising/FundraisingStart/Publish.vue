<template>
	<div class="review">
		<!-- 介绍 -->
		<div class="introduction">
			<div class="logo">
				<img
				 src="/static/imgs/example-2.jpg"
				 alt="logo"
				>
				<span class="company-name">{{projectDetail.project_name}}</span>
			</div>
			<p class="text">{{projectDetail.project_description}}</p>
		</div>
		<!-- 详情 -->
		<ul class="detail-list">
			<li class="detail-item">
				<span class="label">项目估值</span>
				<span class="value">{{projectDetail.project_val}}元</span>
			</li>
			<li class="detail-item">
				<span class="label">项目代币</span>
				<span class="value">{{projectDetail.project_token}}</span>
			</li>
			<li class="detail-item">
				<span class="label">筹集规模</span>
				<span class="value">{{projectDetail.project_scale}}元</span>
			</li>
			<li class="detail-item">
				<span class="label">筹集模式</span>
				<span class="value">{{projectDetail.project_mode}}</span>
			</li>
			<li class="detail-item">
				<span class="label">最低认购</span>
				<span class="value">{{projectDetail.minimum_subscription}}</span>
			</li>
			<li class="detail-item">
				<span class="label">投资年限</span>
				<span class="value">{{projectDetail.investment_period}}</span>
			</li>
			<li class="detail-item">
				<span class="label">股权收益权</span>
				<span class="value">{{projectDetail.equity_income}}%</span>
			</li>
			<li class="detail-item">
				<span class="label">提前退出窗口</span>
				<span class="value">{{projectDetail.exit_early}}</span>
			</li>
		</ul>
		<!-- <ul class="detail-list">
			<li class="detail-item">
				<span class="label">智能合约类型</span>
				<van-radio-group v-model="radio">
					<van-radio name="1">S3</van-radio>
					<van-radio name="2">DS</van-radio>
				</van-radio-group>
			</li>
		</ul> -->
		<div class="submit-container">
			<div
			 class="submit-button"
			 @click="publishToken"
			>发布</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Publish",

	props: ["projectDetail"],

	data() {
		return {
			radio: "1",
			form: {
				id: this.projectDetail.id,
				user_id: this.$root.globalData.userId,
				address: this.$root.globalData.walletId
			}
		};
	},

	methods: {
		async publishToken() {
			this.$toast.loading({
				forbidClick: true,
				message: "",
				duration: 0
			});
			try {
				const { data } = await this.$http.post(
					"/ws_digist/fundraising/publishToken",
					this.form
				);
				this.$toast.clear();
				const { code, msg } = data;
				if (+code === 0) {
					setTimeout(() => {
						this.$router.replace("/fundraising");
					}, 2000);
					this.$toast({
						message: "发布成功",
						forbidClick: true,
						duration: 2000
					});
				} else {
					this.$toast({
						message: msg,
						forbidClick: true
					});
				}
			} catch (e) {
				this.$toast({
					message: "数据获取失败，请重试",
					forbidClick: true
				});
				console.log("/ws_digist/fundraising/publishToken", e);
			}
		}
	},

	created() {
		console.log(this.projectDetail);
	}
};
</script>

<style lang="scss" scoped>
@import "~style";

.van-radio {
	display: inline-block;
	& + .van-radio {
		margin-left: rem(20);
	}
}
.review {
	padding-bottom: rem(60);
	background-color: #f4f4f4;
}
.submit-container {
	padding: rem(40) rem(20) 0;
}
.submit-button {
	border-radius: rem(12);
	line-height: rem(88);
	text-align: center;
	color: #fff;
	background-image: linear-gradient(44deg, #222cc3 0%, #2b7cd6 100%);
}
.tips {
	text-align: center;
	@include font-size(20);
	color: #8c8c8c;
}
.introduction {
	padding: rem(30);
	margin-bottom: rem(20);
	background-color: #fff;
}
.logo {
	margin-bottom: rem(30);
	img {
		width: rem(80);
		height: rem(80);
		margin-right: rem(20);
		vertical-align: middle;
	}
}
.company-name {
	@include font-size(30);
}
.text {
	@include font-size(24);
	color: #999;
}
.detail-list {
	margin-bottom: rem(20);
	background-color: #fff;
}
.detail-item {
	display: flex;
	justify-content: space-between;
	padding: rem(22) rem(30);
}
.label {
	@include font-size(32);
	color: #333;
}
.value {
	@include font-size(32);
	color: #999;
}
</style>
