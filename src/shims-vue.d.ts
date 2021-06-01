// 解决 ts 识别不了 .vue文件
declare module '*.vue' {
    import { Component } from 'vue'
    const component: Component
    export default component
  }