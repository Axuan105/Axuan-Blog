# Vue.$nextTick的原理是什么

## Vue中DOM更新机制

简单的说，Vue的响应式并不是只数据发生变化之后，DOM就立刻发生变化，而是按照一定的策略进行DOM的更新。这样的好处是可以避免一些对DOM不必要的操作，提高渲染性能。

在Vue官方文档中是这样说明的：

>可能你还没有注意到，Vue异步执行DOM更新。只要观察到数据变化，Vue将开启一个队列，并缓
>冲在同一事件循环中发生的所有数据改变。如果同一个watcher被多次触发，只会被推入到队列中一
>次。这种在缓冲时去除重复数据对于避免不必要的计算和DOM操作上非常重要。然后，在下一个的
>事件循环“tick”中，Vue刷新队列并执行实际 (已去重的) 工作。

白话一点就是说，这是和JS当中的事件循环是息息相关的，Vue不可能对每一个数据变化都做一次渲染，它会把这些变化先放在一个异步的队列当中，同时它还会对这个队列里面的操作进行去重，比如你修改了这个数据三次，它只会保留最后一次。这些变化是都可以通过队列的形式保存起来，那现在的问题就来到了，那vue是在事件循环的哪个时机来对DOM进行修改呢？

我确实需要进行这样操作，那这么办呢？？

vue很贴心的为我们提供了**$nextTick**

## Vue.$nextTick()

一句话就可以把 **$nextTick** 这个东西讲明白：就是你放在 **$nextTick**  当中的操作不会立即执行，而是等数据更新、DOM更新完成之后再执行，这样我们拿到的肯定就是最新的了。再准确一点来讲就是 **$nextTick** 方法将回调延迟到下次DOM更新循环之后执行。
意思我们都懂了，那 **$nextTick** 是怎样完成这个神奇的功能的呢？ 核心如下：

>**Vue** 在内部对异步队列尝试使用原生的 **Promise.then、MutationObserver和setImmediate**，如果
>执行环境不支持，则会采用 **setTimeout(fn, 0)** 代替。

仔细地看这句话，你就可以发现这不就是利用 JavaScript 的这些异步回调任务队列，来实现 Vue 框架中自己的异步回调队列。这其实就是一个典型的将底层 JavaScript 执行原理应用到具体案例中。

## 使用
说了这么多，怎么用它呢？ 很简单很简单

```
mounted: function () {
  this.$nextTick(function () {
  })
}
```

### 使用场景
1. created中获取DOM的操作需要使用它
2. 就是我们上面的例子，你如果想要获取最新值，就用它
3. 还有一些第三方插件使用过程中，使用到的情况，具体问题具体分析

## 总结：
就是$nextTick将回调函数放到微任务或者宏任务当中以延迟它地执行顺序；（总结的也比较懒）