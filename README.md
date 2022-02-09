# h5-mobile-template

一个 ` vite + vue3 + ts ` 开箱即用现代开发模板

<br />
<br />

## 特点

1. `Vite`
2. `Vue3`
3. 文件路由
4. `VueUse` 支持
5. `TypeScript`
6. `Windi CSS`
7. 暗黑模式支持
8. `pinia` 状态管理
9. 路径别名 `@` 支持
10. 使用命令行创建模板文件
11. `tsx` 支持
12. `gzip` 资源压缩支持

<br />
<br />

## 克隆模板

1. Github

```shell
git clone git@github.com:effortcheep/vue3-mobile-template.git
```

<br />
<br />

## `node` 版本推荐

因为该模板完全面向现代，所以推荐大家使用 `node` 版本 `v12.20.0`。

<br />
<br />
<br />

## 使用

1. 安装依赖
```shell
npm install

# 或者 npm install
# 或者 yarn
```

2. 开发
```shell
npm run dev
```

3. 预览
```shell
npm preview
```

4. 打包

```shell
npm build
```

5. 类型检查
```shell
npm run tsc
```

6. 自动创建
```shell
npm run g
```

<br />
<br />


## 详情

### [1. Vite](https://cn.vitejs.dev/)

该模板采用 **[vite](https://cn.vitejs.dev/)** 作为构建工具，你可以在根目录下的 `vite.config.ts` 对项目的构建进行配置。

对于众多主流插件的引入和繁杂配置已经整合到根目录下的预设 `presets` 中，大多数情况下你是不需要重新对它们进行配置的。

<br />

### [2. Vue3](https://v3.cn.vuejs.org/)

<br />

### [3. 文件路由](https://github.com/hannoeru/vite-plugin-pages)

目录结构即路由。

eg:
- `src/pages/index.vue` => `/`
- `src/pages/about.vue` => `/about`
- `src/pages/users/index.vue` => `/users`
- `src/pages/users/profile.vue` => `/users/profile`
- `src/pages/users/[id].vue` => `/users/:id`
- `src/pages/[user]/settings.vue` => `/:user/settings`
-  `src/pages/[...notFound].vue` => 404 路由

具体可见 👉 [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages#file-system-routing)

<br />

### [5. VueUse 支持](https://vueuse.org/)

`VueUse` 是一个超级强的 `hooks` 库，例如你要获取鼠标位置，只需要这样 👇

```html
<script setup lang="ts">
    // useMouse 被自动按需引入了，不需要import
    const { x, y } = useMouse()
</script>

<template>
    <div>x坐标 {{x}}</div>
    <div>y坐标 {{y}}</div>
</template>
```

具体可见 👉 [VueUse](https://vueuse.org/)


<br />

### [6. TypeScript](https://www.tslang.cn/)

不需要重新配置，直接用 `ts` 书写就行了。


<br />

### [7. Windi CSS](https://cn.windicss.org/)

`Windi CSS` 是一个开发中速度更快的 `原子css` 库。

直接在模板中用就行了，不需要配置。

```html
<template>
    <div class="bg-red-500 text-white">
        我是红色背景的白色文本
    </div>
<template>
```
上述模板将渲染红色背景白色的字。

同时支持 [属性化模式](https://cn.windicss.org/features/attributify.html#attributify-mode)，即可以用简写。该功能默认关闭，可在 `windi.config.ts` 中 设置 `attributify` 为 `true` 开启。

```html
<template>
    <div text="white" bg="red-500">
        我是红色背景的白色文本
    </div>
<template>
```
这在调整边距尺寸以及等方面可以减少代码量。

同时预设 [排版](https://cn.windicss.org/plugins/official/typography.html) 插件，解决简单的布局困难问题。
具体可见 👉 [Windi CSS](https://cn.windicss.org/)


<br />

### [8. 暗黑模式支持](https://cn.windicss.org/features/dark-mode.html#dark-mode)

暗黑模式由 `Windi CSS` 的 `暗黑模式` 和 `VueUse` 实现。

`src/composables` 目录用来存储 `composition-api` 模块。

该目录下预设了`useDarks` 模块，该模块导出 `isDark` 和 `toggleDark` 用来显示和切换暗黑模式。

```ts
// src/composables/useDarks.ts

// vueuse的 api 会自动按需引入，无需import
export const isDark = useDark()
export const toggleDark = useToggle(isDark)

export const useDarks = () => ({ isDark, toggleDark })
```

模板中即可直接用

```html
<script setup lang="ts">
import { useDarks } from "../composables/useDarks";

const { isDark, toggleDark } = useDarks()
</script>

<template>
    <div m="6">
        Hello，This is the tov template！！
    </div>
    <div m="6" cursor="pointer" @click="toggleDark()">
        light: {{ isDark }} click me!!
    </div>
</template>
```

具体可见 👉 [暗黑模式](https://cn.windicss.org/features/dark-mode.html#dark-mode)

<br />

### [9. pinia 状态管理](https://pinia.vuejs.org/)

`pinia` 是下一代的状态管理库，比 `vuex` 更简单，`ts` 支持更好。

你可以在 `src/stores` 中进行状态的定义。

例如创建 `src/stores/counter.ts` 👇

```ts
// src/stores/counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    inc() {
      this.count++
    },
  },
})
```
定义完后在 `setup` 中直接使用即可
```html
<!-- src/pages/index.vue -->
<script setup lang="ts">
    import { useCounterStore } from "../stores/counter"
    const Counter = useCounterStore()
<script>

<template>
    <div @click="Counter.inc">{{Counter.count}}</div>
</template>
```
更多具体使用可见 👉 [pinia](https://pinia.vuejs.org/)

<br />
<br />

### 8. 路径别名 `@` 支持

`@` 路径将被导向项目的 `src` 目录。

```html
<!-- src/pages/index.vue -->
<script lang="ts" setup>
    import { useDarks } from "@/composables/dark"

// 等价于
// import { useDarks } from "../composables/dark"
</script>
```

<br />
<br />

### 10. 命令行自动创建与删除

只要输入 👇，即可创建一个标准的页面或组件
```shell
npm run g
```

<br />
<br />

### 11. [`tsx` 支持](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)

只需要 `tsx` 文件放在 `src/components` 下，即可直接在模板中使用。

例如你有一个 `src/components/foo.tsx` 文件，那么即可直接在模板中使用。

```tsx
// src/components/foo.tsx
export default defineComponent({
    render() {
        return <div>Test</div>
    }
})
```

```html
<template>
    <foo />
</template>
```

具体可见 👉 [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)

<br />
<br />

### 12. [`gzip` 资源压缩支持](https://github.com/vbenjs/vite-plugin-compression)

生产环境下开箱即用的 `gzip` 资源压缩，无需配置。

具体可见 👉 [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression)

<br />
<br />
<br />

## License

Made with markthree

Published under [MIT License](./LICENSE).

<br />