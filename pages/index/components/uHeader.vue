<template>
	<view class="new-header" v-if="!isVisibleSearch">
		<image class="new-header__logo" src="/static/new-logo.png" />
		<view class="new-header__buttons" @tap="setIsVisibleSearch(true)">
			<icon size="20" type="search" />
		</view>
	</view>
	
	<view class="new-header" v-else>
		<view class="new-header__search-input">
		    <input v-model="searchContent" @input="handleSearchInput" class="input" type="text" placeholder='登录探索更多内容'/>
		    <view class="icon-search" @tap="fetchSearchingResult">
		        <icon size='20' type='search' />
		    </view>
			<view class="icon-clear" v-if="searchContent" @tap="setSearchContent('')">
				<icon size='20' type='clear' />
			</view>
		</view>
		<view @tap="cancelSearch">取消</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	const isVisibleSearch = ref(false)
	const setIsVisibleSearch = (isVisible: boolean) => {
		isVisibleSearch.value = isVisible
	}
	const fetchSearchingResult = () => {
		console.log('todo')
	}
	const handleSearchInput = (event: Event) => {
	    setSearchContent((event.target as HTMLInputElement).value)
	}
	const setSearchContent = (content: string) => {
		searchContent.value = content
	}
	
	const searchContent = ref('')
	const cancelSearch = () => {
		setIsVisibleSearch(false)
		setSearchContent('')
	}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.new-header {
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 12px 0 16px;
}

.new-header__logo {
  width: 67px;
  height: 24px;
}

.new-header__buttons {
  display: flex;
}

.new-header__search-input {
  position: relative;

  .input {
    background: #f7f7f7;
    border-radius: 20px;
    height: 40px;
    line-height: 40px;
    width: 226px;
    padding: 0 84px 0 16px;
    caret-color: @red;
  }

  .icon-search {
    position: absolute;
    right: 16px;
    top: 10px;
  }

  .icon-clear {
    position: absolute;
    right: 48px;
    top: 10px;
  }
}
</style>
