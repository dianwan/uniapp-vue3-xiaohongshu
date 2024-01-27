"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "uHeader",
  setup(__props) {
    const isVisibleSearch = common_vendor.ref(false);
    const setIsVisibleSearch = (isVisible) => {
      isVisibleSearch.value = isVisible;
    };
    const fetchSearchingResult = () => {
      console.log("todo");
    };
    const handleSearchInput = (event) => {
      setSearchContent(event.target.value);
    };
    const setSearchContent = (content) => {
      searchContent.value = content;
    };
    const searchContent = common_vendor.ref("");
    const cancelSearch = () => {
      setIsVisibleSearch(false);
      setSearchContent("");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !isVisibleSearch.value
      }, !isVisibleSearch.value ? {
        b: common_vendor.o(($event) => setIsVisibleSearch(true))
      } : common_vendor.e({
        c: common_vendor.o([($event) => searchContent.value = $event.detail.value, handleSearchInput]),
        d: searchContent.value,
        e: common_vendor.o(fetchSearchingResult),
        f: searchContent.value
      }, searchContent.value ? {
        g: common_vendor.o(($event) => setSearchContent(""))
      } : {}, {
        h: common_vendor.o(cancelSearch)
      }));
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fb2f4c36"], ["__file", "/Users/caojian/learn/uniapp-vue3-xiaohongshu/uniapp-vue3-xiaohongshu/pages/index/components/uHeader.vue"]]);
wx.createComponent(Component);
