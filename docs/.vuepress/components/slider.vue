<template>
  <div class="demo-block demo-zh-CN demo-carousel">
    <div class="source">
      <slot name="view"></slot>
    </div>
    <div class="codeBox" :class="showCode?'showCode':''">
      <div class="code">
        <div class="description">
        <slot name="msg"></slot>
        </div>
        <!-- <div style="height:100px"></div> -->
        <slot name="code"></slot>
      </div>
      <div class="toggle" @click="showCode=!showCode">{{showCode?'隐藏代码':'显示代码'}}</div>
    </div>
    
    <!-- <div class="highlight">
      <pre  v-highlightjs="code">
        <code class="html hljs xml">
        </code>
      </pre>
      <pre></pre>
    </div> -->
  </div>
</template>
<script>
export default {
  mounted(){
    this.$nextTick(()=>{
    console.log(this.$refs)
    })
  },
  data(){
    return{
      code:'',
      showCode:false
    }
  }
}
</script>
<style lang="less">
@import "a.css";
@import "styles/common.css";
// @import "styles/color-brewer.css";
@import "https://shadow.elemecdn.com/npm/highlight.js@9.3.0/styles/color-brewer.css";
@import "https://element.eleme.cn/element-ui.832ef6b.css";
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
code{
  border: none;
}
.toggle{
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  
  border-top: 1px solid #eaeefb;
}
.codeBox{
  max-height: 41px;
  display: flex;
  flex-direction: column;
  transition: max-height 0.5s ;
}
.showCode{
  max-height: 2000px;
}
.code{
  flex: 1;
  overflow: hidden;
}
</style>