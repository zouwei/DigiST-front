<template>
	<div>
        <form action="/" >
            <van-search
                v-model="value"
                placeholder="搜索项目"
                show-action
                @search="onSearch"
            >
            <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </form>
        <div class="box">
            <van-icon name="fire-o" color='#2B7CD6'/>
            <span class="hotCommd"> 热门推荐</span>
            <div 
                v-for="hotCommd of hotCommds"
				:key="hotCommd.name">
                <van-tag plain class="tag">{{hotCommd.name}}</van-tag>
            </div>
        </div>
        <div class="clearFloat"></div>
        <div class="box">
            <van-icon name="clock-o" color='#2B7CD6'/>
            <span class="hotCommd"> 搜索历史</span>
            <div >
                <van-tag plain class="tag" >标签</van-tag>
            </div>
        </div>

	</div>
</template>

<script>


export default {
	name: 'SearchInit',
    
    data(){
        return{
            value:'',
            hotCommds:[
                {
                    name:'ETH'
                },{
                    name:'New BTC'
                }
            ]
        }
    },
    methods:{
        onSearch(){

        }

    }
};
</script>

<style lang="scss" scoped>
@import "~style";
.box {
    margin: rem(20);
}
.hotCommd{
    font-family: PingFangSC-Regular;
    @include font-size(30);
    color: #8C8C8C;
    letter-spacing: 0;
}
.tag {
    float: left;
    margin-right: rem(20);
    margin-top: rem(20)
}
.clearFloat{
    clear:both
}
</style>
