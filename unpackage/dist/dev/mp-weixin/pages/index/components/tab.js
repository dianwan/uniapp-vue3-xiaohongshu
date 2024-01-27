"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tab",
  setup(__props) {
    const tabList = [
      {
        name: "推荐",
        id: "tab-1"
      },
      {
        name: "穿搭",
        id: "tab-2"
      },
      {
        name: "美食",
        id: "tab-3"
      },
      {
        name: "彩妆",
        id: "tab-4"
      },
      {
        name: "影视",
        id: "tab-5"
      },
      {
        name: "职场",
        id: "tab-6"
      },
      {
        name: "情感",
        id: "tab-7"
      },
      {
        name: "家居",
        id: "tab-8"
      },
      {
        name: "游戏",
        id: "tab-9"
      },
      {
        name: "旅行",
        id: "tab-10"
      },
      {
        name: "健身",
        id: "tab-11"
      }
    ];
    const current = common_vendor.ref("tab-1");
    const setCurrent = (id) => {
      current.value = id;
    };
    const handleTap = (id) => {
      if (id === current.value) {
        return;
      }
      setCurrent(id);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tabList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(($event) => handleTap(item.id)),
            c: common_vendor.n(`tabs__item ${current.value === item.id ? "active" : ""}`)
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4702cf16"], ["__file", "/Users/caojian/learn/uniapp-vue3-xiaohongshu/uniapp-vue3-xiaohongshu/pages/index/components/tab.vue"]]);
wx.createComponent(Component);
