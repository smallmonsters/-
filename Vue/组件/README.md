# 索引

- [索引](#索引)
  - [vue3 实现列表倒计时](#vue3-实现列表倒计时)

## vue3 实现列表倒计时

- [代码](./useCountdown.js)

- 使用

html

```html
 <div class="data-list">
    <div v-for="(item,index) in dataList" :key="item.id" class="data-item">
      <div class="data-item-title">{{ item.title }}</div>
      <div class="data-item-detail">{{ item.detail }}</div>
      <div class="data-item-tag">
        <div class="data-item-tag-left">
          <div class="data-item-time">{{ _dataList[index] }}</div>
          <div class="inventory">{{ item.inventory }}</div>
        </div>
        <div class="date-item-tag-right">
          <div class="data-item-discount">{{ item.discount }}</div>
          <div class="data-item-location">距您当前位置{{ item.location }}</div>
        </div>
        <div class="data-item-footer">
          <div class="data-item-price">
            {{ item.price }}
          </div>
          <div class="data-item-originalCost">门市价{{ item.originalCost }}</div>
          <div :class="['data-item-originalCost',item.joined?'joined':undefined]">加入小店</div>
          <div class="data-item-originalCost">{{ item.originalCost }}</div>
        </div>
      </div>
    </div>
  </div>

```

js

```js

import {useCountdown} from "./hook/useCountdown";

const mock1 = [
  {
    title: '周五不加价·熊猫不走重磅福利来袭备份',
    detail: '【重回心动价！5大爆款仅99起 I 熊猫',
    inventory: 123,
    time: "2023/08/22 19:00:00",
    icon: ['https://cdn.udivui.com/udiv/swiper/1.jpg', 'https://cdn.udivui.com/udiv/swiper/1.jpg',],
    originalCost: 1999,
    price: 999,
    earnings: '10-20',
    joined: true,
    discount: true,

  }
];

const _dataList = computed(() => dataList.map(item => useCountdown(item.time).value))
```
