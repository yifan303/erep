// pages/index/index.js
import treeData from './treeData.js';

Page({
  data: {
    breadcrumb: [{ name: 'ꀟꀝ', nodes: treeData }], // 面包屑导航
  },
  onLoad() {
    this.setData({
      currentNodes: this.data.breadcrumb[0].nodes,
    });
  },
  selectNode(e) {
    const { node } = e.detail;
    if (node.children) {
      // 添加新层级到面包屑
      this.setData({
        breadcrumb: [...this.data.breadcrumb, { name: node.name, nodes: node.children }],
        currentNodes: node.children,
      });
    }
  },
  goToLevel(e) {
    const { index } = e.currentTarget.dataset;
    this.setData({
      breadcrumb: this.data.breadcrumb.slice(0, index + 1),
      currentNodes: this.data.breadcrumb[index].nodes,
    });
  },
});
