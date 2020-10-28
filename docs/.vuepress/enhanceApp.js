// .vuepress/enhanceApp.js
// 全局注册 Element 组件库
import Vue from 'vue'
import Element from 'element-ui'
import VueHighlightJS from 'vue-highlightjs'
// import 'highlight.js/styles/vs.css';
// import './styles/color-brewer.css';


export default ({
  Vue,
  options,
  router
}) => {
  console.log("注册全局组件")
Vue.use(VueHighlightJS)
Vue.use(Element)
}