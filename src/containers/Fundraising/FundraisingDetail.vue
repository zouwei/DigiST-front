<template>
	<base-container>
		<base-header
		 slot="header"
		 title="详情"
		 :back="true"
		>
			<adaptation-img
			 slot="right"
			 class="collection"
			 src="collection-detail.png"
			 alt="collection-detail"
			/>
		</base-header>
		<!-- 滚动外层盒子 -->
		<div
		 slot="content"
		 class="full scroll"
		>
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
					<span class="value">{{projectDetail.project_val}}</span>
				</li>
				<li class="detail-item">
					<span class="label">项目代币</span>
					<span class="value">{{projectDetail.project_token}}</span>
				</li>
				<li class="detail-item">
					<span class="label">筹集规模</span>
					<span class="value">{{projectDetail.project_scale}}</span>
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
					<span class="value">{{projectDetail.equity_income}}</span>
				</li>
				<li class="detail-item">
					<span class="label">提前退出窗口</span>
					<span class="value">{{projectDetail.exit_early}}</span>
				</li>
				<li class="detail-item">
					<span class="label">智能合约类型</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">牌照类型</span>
					<span class="value">100亿元</span>
				</li>
			</ul>
			<!-- 目标 -->
			<ul class="detail-list">
				<li class="detail-item">
					<span class="label">目标</span>
					<span class="value">{{projectDetail.vote_target}}</span>
				</li>
				<li class="detail-item">
					<span class="label">已筹集</span>
					<span class="value">{{projectDetail.subscribed_quantity}}</span>
				</li>
				<li class="detail-item">
					<span class="label">剩余</span>
					<span class="value">100亿元</span>
				</li>
				<li class="detail-item">
					<span class="label">参与人数</span>
					<span class="value">{{projectDetail.subscribed_frequency}}</span>
				</li>
			</ul>
			<div
			 ref="numberOfPeople"
			 class="number-of-people"
			/>
			<div
			 ref="funds"
			 class="funds"
			/>
		</div>
	</base-container>
</template>

<script>
// 引入 ECharts 主模块
const echarts = require("echarts/lib/echarts");
// 两个主题
require("echarts/lib/theme/light");
require("echarts/lib/theme/dark");
// 引入标题组件
require("echarts/lib/component/title");
// 引入柱状图
require("echarts/lib/chart/bar");
// 引入折线图
require("echarts/lib/chart/line");

export default {
	name: "FundraisingDetail",

	data() {
		return {
			projectDetail: {},
			fundsOption: {
				title: {
					text: "募资资金",
					textStyle: {
						align: "center",
						fontSize: 16
					},
					top: 10
				},
				grid: {
					left: "15%"
				},
				xAxis: {
					type: "category",
					boundaryGap: false,
					data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					axisTick: {
						show: false
					},
					axisLine: {
						show: false
					}
				},
				yAxis: {
					type: "value",
					axisTick: {
						show: false
					},
					axisLine: {
						show: false
					},
					splitLine: {
						show: false
					}
				},
				series: [
					{
						data: [820, 932, 901, 934, 1290, 1330, 1320],
						type: "line",
						smooth: true,
						itemStyle: {
							opacity: 0
						},
						lineStyle: {
							color: "#4D85E6"
						},
						areaStyle: {
							color: "#4D85E6"
						}
					}
				]
			},
			numberOfPeopleOption: {
				title: {
					text: "募资人数",
					textStyle: {
						align: "center",
						fontSize: 16
					},
					top: 10
				},
				xAxis: {
					type: "category",
					data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					axisTick: {
						show: false
					},
					axisLine: {
						show: false
					}
				},
				yAxis: {
					type: "value",
					show: false
				},
				series: [
					{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: "bar",
						label: {
							normal: {
								show: true
							}
						}
					}
				]
			}
		};
	},

	methods: {
		initEcharts() {
			const numberOfPeople = echarts.init(
				this.$refs.numberOfPeople,
				"light"
			);
			numberOfPeople.setOption(this.numberOfPeopleOption);
			const funds = echarts.init(this.$refs.funds, "dark");
			funds.setOption(this.fundsOption);
		},
		async getDetail() {
			this.$toast.loading({
				forbidClick: true,
				message: "",
				duration: 0
			});
			try {
				const { data } = await this.$http.get(
					`/ws_digist/fundraising/getFundraisingDetail/${
						this.$route.params.id
					}`
				);
				this.$toast.clear();
				const { code, result, msg } = data;
				if (+code === 0) {
					this.projectDetail = result;
					console.log(result);
				} else {
					this.$toast({
						message: msg,
						forbidClick: true
					});
				}
			} catch (e) {
				this.$toast({
					message: "数据获取失败，请重试！",
					forbidClick: true
				});
				console.log(
					`/ws_digist/fundraising/getFundraisingDetail/${
						this.$route.params.id
					}:`,
					e
				);
			}
		}
	},

	created() {
		this.getDetail();
	},

	mounted() {
		this.initEcharts();
	}
};
</script>

<style lang="scss" scoped>
@import "~style";

.collection {
	display: block;
	width: rem(36);
}
.detail-container {
	overflow-y: auto;
}
.out-scroll {
	min-height: 100%;
	background-color: #f4f4f4;
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
.number-of-people {
	height: rem(634);
	background-color: #fff;
}
.funds {
	height: rem(828);
	// background-color: #000;
}
</style>
