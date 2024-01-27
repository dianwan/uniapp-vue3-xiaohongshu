"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (uHeader + tab)();
}
const uHeader = () => "./components/uHeader.js";
const tab = () => "./components/tab.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const list = [
      {
        id: 1,
        title: "感觉这姐一点也不上镜头啊",
        url: "/static/01.png",
        top: 0,
        left: 0,
        width: 0,
        height: 0
      },
      {
        id: 2,
        title: "留学生深夜痛哭",
        url: "/static/02.png",
        top: 0,
        left: 0,
        width: 0,
        height: 0
      },
      {
        id: 3,
        title: "热巴小时候",
        url: "/static/03.png",
        top: 0,
        left: 0,
        width: 0,
        height: 0
      },
      {
        id: 4,
        title: "我发现上海公交一个有趣的现象",
        url: "/static/04.png",
        top: 0,
        left: 0,
        width: 0,
        height: 0
      },
      {
        id: 5,
        title: "其实PAPI的现状对我来说就已经是发财了",
        url: "/static/05.png",
        top: 0,
        left: 0,
        width: 0,
        height: 0
      },
      {
        id: 6,
        title: "在摸土豆的时候突然...",
        url: "/static/03.png",
        top: 0,
        left: 0,
        width: 0,
        height: 0
      },
      {
        id: 7,
        title: "其实PAPI的现状对我来说就已经是发财了",
        url: "/static/02.png",
        top: 0,
        left: 0,
        width: 0,
        height: 0
      },
      {
        id: 8,
        title: "美国人同学说我用美颜相机拍照，好像是另一个人",
        url: "/static/04.png",
        top: 0,
        left: 0,
        width: 0,
        height: 0
      },
      {
        id: 10,
        title: "又一位劝不动的客妹😂",
        url: "/static/01.png",
        top: 0,
        left: 0,
        width: 0,
        height: 0
      },
      {
        id: 11,
        title: "乐山大佛：修复前后对比，一比吓一跳",
        url: "/static/05.png",
        top: 0,
        left: 0,
        width: 0,
        height: 0
      }
    ];
    const systemInfo = common_vendor.index.getSystemInfoSync();
    const { windowWidth } = systemInfo;
    const getImgWidth = (windowWidth2, colNum) => {
      const rowGapWidth = 30;
      return (windowWidth2 - rowGapWidth) / colNum;
    };
    const GAP_WIDTH = 10;
    const COL = 2;
    const imgWidth = getImgWidth(windowWidth, COL);
    const loadedCount = common_vendor.ref(0);
    const setLoadedCount = (count) => {
      loadedCount.value = count;
    };
    const flowList = common_vendor.ref(Array.from({ length: COL }).map(() => new Array()));
    const setFlowList = (list2) => {
      flowList.value = list2;
    };
    const flowListCopy = [...flowList.value];
    const updateFlowItem = (event, index) => {
      const { width, height } = event.detail;
      const ratio = width / height;
      list[index].width = imgWidth;
      list[index].height = imgWidth / ratio;
      setLoadedCount(++loadedCount.value);
    };
    const getMinColInfo = () => {
      let minColHeight = Infinity, minColIndex = 0;
      for (let i = 0; i < flowListCopy.length; i++) {
        const currentColHeight = flowListCopy[i].reduce((acc, cur) => {
          const titleRowNum = Math.ceil(cur.title.length / 13);
          return acc + cur.height + titleRowNum * 24 + 20;
        }, 0);
        if (minColHeight > currentColHeight) {
          minColHeight = currentColHeight;
          minColIndex = i;
        }
      }
      return {
        minColIndex,
        minColHeight
      };
    };
    const flowListContainerHeight = common_vendor.ref(0);
    const setFlowListContainerHeight = (height) => {
      flowListContainerHeight.value = height;
    };
    const getContainerHeight = () => {
      let result = 0;
      for (const colData of flowList.value) {
        const lastItem = colData[colData.length - 1];
        result = Math.max(result, lastItem.top + lastItem.height);
      }
      return result + 140;
    };
    const updateFlowList = () => {
      list.forEach((item) => {
        const newItem = { ...item };
        const { minColIndex, minColHeight } = getMinColInfo();
        newItem.left = minColIndex === 0 ? GAP_WIDTH : imgWidth + GAP_WIDTH * 2;
        newItem.top = minColHeight === 0 ? minColHeight + GAP_WIDTH : minColHeight + GAP_WIDTH + flowListCopy[minColIndex].length * GAP_WIDTH;
        flowListCopy[minColIndex].push(newItem);
      });
      console.log(flowListCopy);
      setFlowList([...flowListCopy]);
      setFlowListContainerHeight(getContainerHeight());
    };
    common_vendor.watch(
      loadedCount,
      (loadedCount2) => {
        if (loadedCount2 === list.length) {
          updateFlowList();
        }
      }
    );
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list, (item, index, i0) => {
          return {
            a: index,
            b: item.url,
            c: common_vendor.o((event) => updateFlowItem(event, index), index)
          };
        }),
        b: common_vendor.f(flowList.value, (colList, k0, i0) => {
          return {
            a: common_vendor.f(colList, (item, k1, i1) => {
              return {
                a: `${item.width}px`,
                b: `${item.height}px`,
                c: `url('${item.url}') center center / cover no-repeat`,
                d: common_vendor.t(item.title),
                e: item.id,
                f: `${item.width}px`,
                g: `translate(${item.left}px, ${item.top}px)`
              };
            })
          };
        }),
        c: common_vendor.s(`height: ${flowListContainerHeight.value}`)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/caojian/learn/uniapp-vue3-xiaohongshu/uniapp-vue3-xiaohongshu/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
