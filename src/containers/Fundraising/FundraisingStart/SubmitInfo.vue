<template>
	<div class="submit-info">
		<van-cell-group>
			<van-field
			 v-model="form.company_name"
			 placeholder="公司全称"
			/>
			<van-field
			 v-model="form.project_name"
			 placeholder="项目名称（项目展示使用）"
			/>
			<van-field
			 v-model="form.corporate"
			 placeholder="公司法人名称"
			/>
			<van-field
			 v-model="form.company_contact"
			 type="tel"
			 placeholder="公司联系方式"
			/>
			<van-field
			 v-model="form.company_emergency_contact"
			 type="tel"
			 placeholder="公司紧急联系方式"
			/>
			<van-field
			 v-model="form.pledged_stock"
			 placeholder="质押股票（%），该项决定项目上线估值"
			/>
			<van-field
			 v-model="form.project_scale"
			 placeholder="筹集规模（募资款项金额）"
			/>
			<van-field
			 v-model="form.company_description"
			 type="textarea"
			 placeholder="公司简介"
			 :autosize="{ minHeight: 100 }"
			/>
		</van-cell-group>
		<div class="submit-container">
			<div
			 class="submit-button"
			 @click="initiateFundraising"
			>提交审核</div>
		</div>
		<p class="tips">点击按钮即表明我已了解平台只提供当前募资方案</p>
	</div>
</template>

<script>
export default {
	name: "SubmitInfo",

	data() {
		return {
			form: {
				company_name: "",
				project_name: "",
				corporate: "",
				company_contact: "",
				company_emergency_contact: "",
				pledged_stock: "",
				project_scale: "",
				company_description: ""
			}
		};
	},

	methods: {
		async initiateFundraising() {
			this.$toast.loading({
				forbidClick: true,
				message: "",
				duration: 0
			});
			try {
				const { data } = await this.$http.post(
					"/ws_digist/fundraising/initiateFundraising",
					this.form
				);
				this.$toast.clear();
				const { code, result, msg } = data;
				if (+code === 0) {
					setTimeout(() => {
						this.$emit("change-step", "Publish", result);
					}, 2000);
					this.$toast({
						message: '提交成功',
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
				console.log("/ws_digist/fundraising/initiateFundraising", e);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import "~style";

.submit-info {
	padding-bottom: rem(60);
}
.submit-container {
	padding: 0 rem(20);
	margin: rem(80) 0 rem(40);
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
</style>
