<template>
	<u-header />
	<tab />
	<view style="display: none">
	    <image
	    	v-for="(item, index) in list"
	    	:key="index"
	    	:src="item.url"
	    	style="display: none"
	    	@load="(event: any) => updateFlowItem(event, index)"
	    />
	</view>
	
	<view class="wrapper" :style="`height: ${flowListContainerHeight}`">
		
		<view v-for="colList in flowList">
			<view v-for="item in colList">
				<view
					class="card-item"
					:key="item.id"
					:style="{ width: `${item.width}px`, transform: `translate(${item.left}px, ${item.top}px)` }"
				>
				  <view
				    class="card-item__thumb"
					:style="{ width: `${item.width}px`, height: `${item.height}px`, background: `url('${item.url}') center center / cover no-repeat` }"
				  />
				  <view class="card-item__title">{{ item.title }}</view>
				  <view class="card-item__info">
				    <view class="card-item_info__author">
				      <image
				        src="https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30r3206evhc6g5pa5v3ngieq7t8psn80?imageView2/2/w/60/format/webp|imageMogr2/strip"
				        class="avatar"
				      />
				      <text class="nickname">爱八卦的小孩</text>
				    </view>
				    <view class="card-item_info__favorite">
				      <view class="at-icon at-icon-heart"></view>
				      <text class="count">1k+</text>
				    </view>
				  </view>
				</view>
			</view>
		</view>

	</view>
</template>

<script lang="ts" setup>
	import { ref, watch } from 'vue'
	import uHeader from './components/uHeader.vue'
	import tab from './components/tab.vue'
	
	interface FlowItem {
	  id: number,
	  url: string,
	  title: string,
	  width: number;
	  height: number;
	  top: number;
	  left: number;
	}

	const list = [
	  {
	    id: 1,
	    title: "感觉这姐一点也不上镜头啊",
	    url: '/static/01.png',
	    top: 0,
	    left: 0,
	    width: 0,
	    height: 0,
	  },
	  {
	    id: 2,
	    title: "留学生深夜痛哭",
	    url: '/static/02.png',
	    top: 0,
	    left: 0,
	    width: 0,
	    height: 0,
	  },
	  {
	    id: 3,
	    title: "热巴小时候",
	    url: '/static/03.png',
	    top: 0,
	    left: 0,
	    width: 0,
	    height: 0,
	  },
	  {
	    id: 4,
	    title: "我发现上海公交一个有趣的现象",
	    url: '/static/04.png',
	    top: 0,
	    left: 0,
	    width: 0,
	    height: 0,
	  },
	  {
	    id: 5,
	    title: "其实PAPI的现状对我来说就已经是发财了",
	    url: '/static/05.png',
	    top: 0,
	    left: 0,
	    width: 0,
	    height: 0,
	  },
	  {
	    id: 6,
	    title: "在摸土豆的时候突然...",
	    url: '/static/03.png',
	    top: 0,
	    left: 0,
	    width: 0,
	    height: 0,
	  },
	  {
	    id: 7,
	    title: "其实PAPI的现状对我来说就已经是发财了",
	    url: '/static/02.png',
	    top: 0,
	    left: 0,
	    width: 0,
	    height: 0,
	  },
	  {
	    id: 8,
	    title: "美国人同学说我用美颜相机拍照，好像是另一个人",
	    url: '/static/04.png',
	    top: 0,
	    left: 0,
	    width: 0,
	    height: 0,
	  },
	  {
	    id: 10,
	    title: "又一位劝不动的客妹😂",
	    url: '/static/01.png',
	    top: 0,
	    left: 0,
	    width: 0,
	    height: 0,
	  },
	  {
	    id: 11,
	    title: "乐山大佛：修复前后对比，一比吓一跳",
	    url: '/static/05.png',
	    top: 0,
	    left: 0,
	    width: 0,
	    height: 0,
	  },
	];
	
	const systemInfo = uni.getSystemInfoSync()
	const { windowWidth } = systemInfo
	
	const getImgWidth = (windowWidth: number, colNum) => {
	    const rowGapWidth = 30; // 10 * 3
	    return (windowWidth - rowGapWidth) / colNum;
	}
	const GAP_WIDTH = 10
	const COL = 2
	const imgWidth = getImgWidth(windowWidth, COL)
	
	const loadedCount = ref(0)
	const setLoadedCount = (count: number) => {
		loadedCount.value = count
	}
	const flowList = ref<FlowItem[][]>(Array.from({ length: COL }).map(() => new Array()))
	const setFlowList = (list: FlowItem[][]) => {
		flowList.value = list
	}
	const flowListCopy = [...flowList.value]
	const updateFlowItem = (event: any, index: number) => {
	    const { width, height } = event.detail;
	    const ratio = width / height;
	    list[index].width = imgWidth;
	    list[index].height = imgWidth / ratio;
	    setLoadedCount(++loadedCount.value);
	};
	
	const getMinColInfo = () => {
	    let minColHeight: number = Infinity, minColIndex: number = 0;
	    for (let i = 0; i < flowListCopy.length; i++) {
	      const currentColHeight = flowListCopy[i].reduce((acc, cur) => {
	        // 13 = 写死的一行标题字数
	        // 24 标题行高 + 20 作者&收藏行高
	        const titleRowNum = Math.ceil(cur.title.length / 13)
	          return acc + cur.height + titleRowNum * 24 + 20
	        },0);
	      if (minColHeight > currentColHeight) {
	        minColHeight = currentColHeight;
	        minColIndex = i;
	      }
	    }
	    return {
	      minColIndex,
	      minColHeight,
	    };
	};
	
	const flowListContainerHeight = ref(0)
	const setFlowListContainerHeight = (height: number) => {
		flowListContainerHeight.value = height
	}
	
	const getContainerHeight = () => {
	    let result: number = 0
	    for (const colData of flowList.value) {
	      const lastItem = colData[colData.length - 1]
	      result = Math.max(result, lastItem.top + lastItem.height)
	    }
	    return result + 140 // 最后一行给出一些偏移值(计算误差)
	};
	
	const updateFlowList = () => {
	    list.forEach((item) => {
	      const newItem = { ...item }
	      const { minColIndex, minColHeight } = getMinColInfo();
	
	      newItem.left = minColIndex === 0
	        ? GAP_WIDTH
	        : imgWidth + GAP_WIDTH * 2
	
	
	      newItem.top = minColHeight === 0
	        ? minColHeight + GAP_WIDTH
	        : minColHeight + GAP_WIDTH + (flowListCopy[minColIndex].length * GAP_WIDTH)
	
	        flowListCopy[minColIndex].push(newItem);
	    });
		console.log(flowListCopy)
	    setFlowList([...flowListCopy]);
	    setFlowListContainerHeight(getContainerHeight())
	};
	
	watch(
	  loadedCount,
	  (loadedCount) => {
			if (loadedCount === list.length) {
				updateFlowList()
			}
	  }
	)

</script>

<style lang="less" scoped>
	@import '~@/styles/var.less';
	
	.scrollview {
	  height: 100vh;
	}
	
	.wrapper {
	  padding: 0 10px;
	  position: relative;
	}
	
	.card-item {
	  position: absolute;
	  left: 0;
	  right: 0;
	}
	
	.card-item__thumb {
	  width: 197px;
	  height: 263px;
	  border-radius: 12px;
	}
	
	.card-item__title {
	  font-size: 14px;
	  line-height: 18px;
	  font-weight: 500;
	  padding-top: 6px;
	}
	
	.card-item__info {
	  display: flex;
	  justify-content: space-between;
	  margin-top: 6px;
	}
	
	.card-item_info__author {
	  display: flex;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  padding-right: 12px;
	}
	
	.avatar {
	  width: 20px;
	  height: 20px;
	  border-radius: 20px;
	  margin-right: 6px;
	}
	
	.nickname {
	  font-size: 12px;
	  color: #999;
	}
	
	.card-item_info__favorite {
	  display: flex;
	}
	
	.count {
	  font-size: 12px;
	  color: #999;
	  margin-left: 3px;
	}

</style>