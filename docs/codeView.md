# codeView的使用方式

这个组件是为了展示对应功能而开发的具体使用方法按如下，以下代码可直接写到.md文件

## 示例代码

<<< docs/.vuepress/components/exp.md

##效果如下

<codeView>
<template v-slot:view>
<carousel />
</template>
<template v-slot:msg>
    <div>
     <p>这里可以添加一些描述。同时可以使用一些预设的样式</p>
     <p>
        例如：
     </p>
     <p>
        <code>class="red"</code>
        <span class="red">red</span>
     </p>
     <p>
     <code>&lt;code&gt;code标签 &lt;/code&gt;</code> <code>code标签</code>
     </p>
    </div>
   
</template>
<template v-slot:code>
<!-- 注意这里需要上下各空一行 -->

<<< docs/.vuepress/components/carousel.vue

</template>
</codeView>
