# im-uniapp

使用node v20

尽量使用yarn进行管理

[uniapp官网](https://zh.uniapp.dcloud.io/quickstart.html)

> 本次的布局尺寸单位使用`rpx`，可以先了解`rpx`的使用
>
> 本次打算开发成微信小程序，可以先装一个 微信开发者工具



# 使用的组件库

[uview-ui](https://www.uviewui.com/components/npmSetting.html)

## 创建本地配置文件
`.local`后缀的用于本地调试，不会上传到git上且优先级较高
```shell
cp .env .env.local
```

## 安装依赖
```shell
yarn install
```

### 启动项目

这个命令是启动h5端的

```shell
yarn serve
```

### 项目打包
```shell
yarn build
```



### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

