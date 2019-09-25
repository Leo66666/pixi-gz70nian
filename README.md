# 框架
Pixi.js这个框架是一个2D渲染引擎，主要使用的有两种渲染模式，WEBGL和CANVAS画布渲染，且提供强大的硬件加速让页面更加丝滑流畅。

# 项目
一镜到底 广州70年巨变使用了pixi.js作为渲染框架，手指往上滑动即可进行移动。监听事件使用了alloytouch进行滑动监听,帧动画和补间动画使用了TweenMax.js，元素采用了雪碧图的形式，这里使用的是TexturePackerGUI试用版。
TexturePackerGUI雪碧图使用介绍：https://www.bookstack.cn/read/LearningPixi/textureatlas

# 创意
策划上，图文展示类，回顾下广州70年的发展经历，本项目采用上滑方式带来一镜到底的视觉效果。

# 运行
本项目需要使用本地服务器打开，这里使用的Http-server插件。
插件来源： https://www.npmjs.com/package/http-server

# 线上地址
http://huodong.dayoo.com/html/gz70nianjubian/index.shtml

# 相关问题
1.alloytouch.js在使用过程中有时候change方法会产生NAN的错误，导致页面不能正常滑动，这个根据他们官网的issues发现是低版本Bug导致，解决办法升级到最新的文件就行。

2.加载元素推荐使用官网介绍的雪碧图集合的形式加载元素,这里是用官网推荐的软件TexturePackerGUI试用版，选用JSON（hassh）导出即可，雪碧图不仅可以减少对服务器的多次请求，还可以加快网页的打开速度。

3.官方文档的方法都是采用的变量简写，比如loader.add("images/tileset.png").load(setup);这里的loader对象其实是let loader = PIXI.loader;如果看文档手写运行发现报错的话，一定是这里挖了坑。

4.关于屏幕最大最小滑动距离计算，这里已竖屏为例：这里是竖屏所以值为负，最小值为每个场景的高度之再减去当前手机的高度，即-app.stage.height + max，屏幕最小滑动值为0。

5.alloytouch插件中 sensitivity属性可以设置滑动的屏幕灵敏度，用于调节用户手指滑动的速度，alloyTouchs.stop() alloyTouchs.to(0)这两个方法可以使滑动监听停止 并且返回到首屏0的位置，用以跳转的场景。

6.帧动画使用了pixi中的AnimatedSprite方法，通过TexturePackerGUI生成的帧动画图片和json来创建帧动画。

