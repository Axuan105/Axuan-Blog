# Flex 布局

## 一、flex 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

在 Flexbox 模型中，有三个核心概念：

- flex 项（注：也称 flex 子元素），需要布局的元素
- flex 容器，其包含 flex 项
- 排列方向（direction），这决定了 flex 项的布局方向

## 二、容器属性

### 2.1 flex-direction

flex-direction 属性决定主轴的方向（即项目的排列方向）。

- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。

### 2.2 flex-wrap

flex-wrap 决定如何换行

nowrap（默认）：不换行。
wrap：换行，第一行在上方。
wrap-reverse：换行，第一行在下方。

### 2.3 flex-flow

flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap。(2 个属性组合)

### 2.4 justify-content

justify-content 属性定义了项目在主轴上的对齐方式。(默认是水平方向对齐方式，如水平居中等)

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，中间平分。
- space-around：每个项目两侧的间隔相等

### 2.5 align-items

align-items 属性定义项目在交叉轴上如何对齐。

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch：如果项目未设置高度或设为 auto，将占满整个容器的高度。

### 2.6 align-content

align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴

## 三、 项目属性

### 3.1 align-self 属性

align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

### 3.2 flex-shrink 属性

flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

### 3.3 order 属性

order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。

### 3.4 flex-grow 属性

flex-grow 属性定义项目的放大比例，默认为 0，存在剩余空间，也不放大。
如果所有项目的 flex-grow 属性都为 1，则它们将等分剩余空间（有空间）。如果一个项目的 flex-grow 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。

### 3.5 flex 属性

flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。

### 3.6 flex-basis 属性

flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。
<!-- 
## 四、 案例

#### html

```
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div class="content box">
        <div class="item"></div>
    </div>
</body>
</html>

```

#### css

````
    .content {
        width: 210px;
        height: 210px;
        border: 1px solid red;
    }
    .item {
        width: 60px;
        height: 60px;
        background-color: blue;
        margin: 10px;
    }
    .box {
        display: flex;
        flex-direction: row;
    }
```

```` -->
