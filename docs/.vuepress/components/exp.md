<codeView>
<template v-slot:view>
<!-- 这里填需要展示的组件 -->
<carousel />
</template>
<template v-slot:msg>
    <div>
     <p>这里可以添加一些描述。同时可以使用一些预设的样式</p>
    </div>
</template>
<template v-slot:code>
<!-- 注意这里需要上下各空一行 这里引用需要展示的组件把他的源码展示出来 -->

<<< docs/.vuepress/components/carousel.vue

</template>
</codeView>