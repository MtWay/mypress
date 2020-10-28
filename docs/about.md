# Hello about

## h2

# h1
### h3

text

<!-- <slider/> -->

<slider>
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
</slider>

<slider>
<template v-slot:view>
<carousel />
</template>

<template v-slot:code>
<!-- 注意这里需要上下各空一行 -->

<<< docs/.vuepress/components/carousel.vue

</template>
</slider>

<span v-for="i in 3">{{ i }} </span>

<!-- <<< docs/.vuepress/components/test.js

<<< docs/.vuepress/components/carousel.vue


```
<<< @/../@vuepress/components/carousel.vue
```

```
<<< @/../@vuepress/components/test.js
``` -->