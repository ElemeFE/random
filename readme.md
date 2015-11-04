# 一、简介

大多数情况，部门出去玩，是大家取在一起放松心情，还有一个很重要的点是
：相互之间有更深入的了解。所以我们会分组，玩游戏，blahbla...

分组最重要的就是随机。作为一群程序员，当然不是靠某个人来分，
而是通过我们的管家 —— 程序。之前出去玩的时候写过一个随机分组
的程序，重新整理一下，发出来。我们面试的时候，
最经常了的一道题就是从里面分离出来的 —— 如何随机分组。

# 二、程序
查看 [random.js](https://github.com/ElemeFE/random/blob/master/random.js) 的源文件，可直接运行于浏览器或者 Node 环境。

# 三、测试

可以直接访问 [/random](http://elemefe.github.io/random) 来查看 DEMO，或者在 CLI 环境中运行：

```ruby
$node test.js <team> <size>

# Usage: 默认 size 为组的数量，可以强制为每组的人数
#   -分成多少组: node test <team> <size>
#   区分性别，多少人为一组: node test <team> <size> true
#   不区别性别，多少人为一组：node test <team> <size> false true
```
