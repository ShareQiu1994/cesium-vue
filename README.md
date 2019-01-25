# cesium-vue(基于vuecli2.x)

> 一个整合了Cesium的VueCli2.x的脚手架工具

1.项目为VueCli+Cesium的纯净版，除了VueCli自带的模块和Cesium模块，没有引入其他第三方模块。

2.根据您的项目需要，可以配置自己需要的模块，如Ui模块(ElementUi,museUi)等。

3.建议开发者将写好的Cesium功能封装成一个独立的模块，而不是将cesium的属性赋值给Vue的data对象中(会造成一些性能问题)。 

## Build Setup

``` bash
# 安装依赖
npm install

# 运行开发环境
npm run dev

# 编译
npm run build

# 编译分析报告
npm run build --report

# 打开浏览器查看运行结果
localhost:8080
```

# 浏览器兼容报告
![Image text](https://raw.githubusercontent.com/ShareQiu1994/img-folder/master/webGL.png) 

# 运行开发环境
![Image text](https://raw.githubusercontent.com/ShareQiu1994/img-folder/master/dev.gif)  

# 2018/5/19 更新
1. 此处更新将编译后的cesium文件存储于 static文件夹中 避免编译后cesium静态文件夹过多造成过散乱。
2. 默认情况下，编译后的Webpack将Cesium 与我们的应用程序放在同一个块中，结果是巨大的。 此次更新将Cesium拆分成独立的代码块。 

# 2018/06/03 更新
1. 修复devServer环境自控制台启动警告。

# 2018/08/16 更新
1. 添加ico图标。
2. devServer环境自动打开默认浏览器。 

# 基于该框架的演示项目 
[LBF WebEarth2](http://liubf.com:8038/LBFWebearth2/)<br/>
![Image text](http://liubf.com/wp-content/uploads/2018/12/LJ12DR_Q2KI0YS14U4.jpg)<br/>