# CesiumWebpackVueCli

> A CesiumWebpackVueCli

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
# 基于该框架的演示项目 
[1.大明山项目决策规划子系统](http://183.62.251.45:10024/dms23d2) <br/>
[2.大明山项目基础信息子系统](http://183.62.251.45:10024/dms23d)  <br/>
[3.锦江水库三维实景系统](http://183.62.251.45:10024/MTcyLjE2LjEwLjUyOjgwOTcvZ2Vvc2VydmVy_platform)  <br/>

# 浏览器兼容报告
![Image text](https://raw.githubusercontent.com/ShareQiu1994/img-folder/master/webGL.png) 

# 2018/5/19 更新
1. 此处更新将编译后的cesium文件存储于 static文件夹中 避免编译后cesium静态文件夹过多造成过散乱。
2. 默认情况下，编译后的Webpack将Cesium 与我们的应用程序放在同一个块中，结果是巨大的。 此次更新将Cesium拆分成独立的代码块。 

# 2018/06/03 更新
1. 修复devServer环境自控制台启动警告。

# 2018/08/16 更新
1. 添加ico图标。
2. devServer环境自动打开默认浏览器。 

邮箱：421419567@qq.com 请右上角Star 万分感激!(^_^)