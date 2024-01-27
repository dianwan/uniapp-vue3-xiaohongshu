<template>
	<scroll-view :scroll-x="true" :scroll-y="false">
		<view class="tabs">
			<view 
				v-for="item in tabList" key={item.id} 
				@tap="handleTap(item.id)" 
				:class="`tabs__item ${current === item.id ? 'active' : ''}`"
			>
				<text>{{ item.name }}</text>
			</view>
		</view>
	</scroll-view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	const tabList = [
	  {
	    name: '推荐',
	    id: 'tab-1',
	  },
	  {
	    name: '穿搭',
	    id: 'tab-2',
	  },
	  {
	    name: '美食',
	    id: 'tab-3',
	  },
	  {
	    name: '彩妆',
	    id: 'tab-4',
	  },
	  {
	    name: '影视',
	    id: 'tab-5',
	  },
	  {
	    name: '职场',
	    id: 'tab-6',
	  },
	  {
	    name: '情感',
	    id: 'tab-7',
	  },
	  {
	    name: '家居',
	    id: 'tab-8',
	  },
	  {
	    name: '游戏',
	    id: 'tab-9',
	  },
	  {
	    name: '旅行',
	    id: 'tab-10',
	  },
	  {
	    name: '健身',
	    id: 'tab-11',
	  },
	]
	
	const current = ref('tab-1')
	const setCurrent = (id: string) => {
		current.value = id
	}
	const handleTap = (id: string) => {
	    if (id === current.value) { return }
	    setCurrent(id)
	}
</script>

<style lang="less" scoped>
	.tabs {
	width: 1200upx;
	  height: 40px;
	  padding: 0 10px;
	  display: flex;
	}
	
	.tabs__item {
	  width: 64px;
	  line-height: 40px;
	  height: 40px;
	  text-align: center;
	  font-size: 14px;
	  color: #999;
	}
	
	.active {
	  background: #f7f7f7;
	  border-radius: 20px;
	  font-weight: 600;
	  color: #333;
	}
</style>