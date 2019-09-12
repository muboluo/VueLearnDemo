# VueLearnDemo

最近项目中用到了 vue， 开始学习一下vue 从网上找了一个入门的教程。
开始参考网上的教程练习。

---


参考资料：

[1] [慕课网 3小时速成 vue2.x  入门](https://www.imooc.com/video/18551/0。)

### 课程知识点：

    1. Vue2.x 框架常用知识点 20%
        
        >   模板语法 v-bind 属性绑定，事件绑定
        >   条件渲染 
        >   列表渲染
        >   class 与 style 绑定
        
    2. Vue 核心技术 30%
    
        >   vue-cli工具、vue代码规范
        >   vue 组件调试方法
        >   vue-router
        >   vuex
        
    3. 集成Vue2.x 30%
        > workflow 工作流
        > 单页面demo 动态表单 列表动态展示
        > 开发常见的应用组件
        
        

### nvm

    nvm 就是用来管理node version的。
    
    nvm --help 
    
    
### note 

    第二章 vue框架常用知识点
   
 ---
        2-3 模板语法
        
        1. 页面上所有的变量，其实都可以包含在vue 的data对象中。
        
        2. 绑定属性，可以缩写为双冒号。eg:v-bind:href/id/...
        
        3. 绑定时间可以使用@代替 v-on:
        
  ---
  
        2-4 计算属性 computed 与 侦听器 watch
        
            1. 使用场景： 
                1 watch 异步场景，用来监听一个变量或者是一个数组的变化。
                2 computed 数据联动， 监听多个变量，被监听的变量一定要在vue的实例中。
                  computed 中监听的数值是在方法体中，最后得到了一个新的数值。
              
        2.5 条件渲染、列表渲染、class 与style 的绑定
        
            条件渲染：就是达到了一定条件，渲染不同的内容。
            
                常用指令：
                    v-if:
                    v-show:
                    v-else:
                    v-else-if:
                    
                    
    第三章 
    
        3.1 vue cli 创建工程 create 和ui 两种创建方式
             最重要的三个目录是： public， src 和 package.json
             
        3.2 组件化思想
        
            功能模块的复用
            高执行效率
            开发单页面复杂应用
            
            原则： 
                1. 300行内。
                2. 复用原则
                3. 复杂业务
            问题：
                组件状态管理：vuex
                多组件的混合使用，多页面，复杂业务（vue-router）
                组件间传参、消息、时间管理（props，emit/on，bus）
        
        3.3 风格指南
            
            官方网站上在 学习-风格指南中有编写代码的风格规范。vue.js
            
            
        3.4 vue-router
        
            官方的路由管理工具。组装组件。
            创建过程：
                1. 新建vue文件
                2. 在router中注册和引入该文件的路径
                3. 在APP.vue 这个组件中，添加 router-link
                    链接至 新建的 vue组件。
                    
        3.5 vuex 介绍
        
            单项数据流： actions --> state  --> view -->actions
            
            vuex作用： 
                多视图依赖同一个状态 （菜单导航，弹幕）
                组件状态集中管理
                组件状态改变遵循统一的规则
                组件间通信
                
            tip:
                创建工程时， store.js 文件就是我们在创建工程时，引入vuex组件生成的
                
                store文件中：
                    state：代表状态,组件共用和我们要管理的状态
                    mutations: 是管理state的具体方法。使用commit提交
                    
                
                @ 代表的是src这个目录。
                
        3.6 如何进行调试
        
            alert :阻塞式的
            console.log/error, 
            debbugger:运行到断点处，进行调试。
            output:
            
            控制面板中：
                XHR: 页面中的网络请求
                ...: 选项，模拟3g等等，调试交互
                
            代码中 mounted： vue的生命周期
            
            
    第四章 实战
    
        4.1 如何集成vue
        
            集成场景：
                单页面、多页面 引入vue.js
                    eg:模板语法，条件渲染
                复杂的单页面应用
            
            开发工作流：
            
                需求调研 确定需求，简单页面？游戏页面？后台系统？
                
                交互设计： 用户舒适度、逻辑、误操作
                
                逻辑设计、接口设计
                
                代码实现、测试（10%）、线上部署
                
                
                
                
                
            
       4.3 如何学习和参考某些网站的代码
       
            1. chrome 查看DOM结构
            2. header body 里查看 js/css 引用，google/百度 搜索相应的js库
            3. 查看sources， network 中的js， 使用发编译和断点进行调试。
            
            
        
                    
        
            
        
        
        
        
        
         
    