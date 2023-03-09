<!--
 * @Author: laiweilun laiweilun@hzconverter.com
 * @Date: 2023-03-09 17:40:04
 * @LastEditors: laiweilun laiweilun@hzconverter.com
 * @LastEditTime: 2023-03-09 18:01:27
 * @FilePath: \study\site\docs\src\md\vue\vue3\pinia学习.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 创建store

```js
import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
})
```

# 使用store

```js
import { useStore } from '@/stores/counter'

export default {
  setup() {
    const store = useStore()
    // or
    const {token, userInfo, uid} = storeToRefs(store());
    // 重置store
    store.$reset()
    return {
      // 您可以返回整个 store 实例以在模板中使用它
      store,
    }
  },
}

```

# state

## 多个状态更改
除了直接用 store.counter++ 修改 store，你还可以调用 $patch 方法。 它允许您使用部分“state”对象同时应用多个更改：

```js
store.$patch({
  counter: store.counter + 1,
  name: 'Abalam',
})
// or
cartStore.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})

```

## 订阅状态
可以通过 store 的 $subscribe() 方法查看状态及其变化，类似于 Vuex 的 subscribe 方法。 与常规的 watch() 相比，使用 $subscribe() 的优点是 subscriptions 只会在 patches 之后触发一次（例如，当使用上面的函数版本时）。

```js
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // 与 cartStore.$id 相同
  mutation.storeId // 'cart'
  // 仅适用于 mutation.type === 'patch object'
  mutation.payload // 补丁对象传递给 to cartStore.$patch()

  // 每当它发生变化时，将整个状态持久化到本地存储
  localStorage.setItem('cart', JSON.stringify(state))
})


// detached: true 属性可以让此订阅在组件卸载后保留
someStore.$subscribe(callback, { detached: true })
```

# getter

## 使用

```js
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    // 自动将返回类型推断为数字
    doubleCount(state) {
    // 这里需要我们自己添加类型（在 JS 中使用 JSDoc）。 我们还可以
    // 使用它来记录 getter
    /**
     * 返回计数器值乘以二加一。
     *
     * @returns {number}
     */
      return state.counter * 2
    },
    // 返回类型必须明确设置
    doublePlusOne(): number {
      return this.counter * 2 + 1
    },
    doubleCountPlusOne() {
      // 自动完成 ✨
      return this.doubleCount + 1
    },
  },
})
```

## 直接可以页面调用

```html
<template>
  <p>Double count is {{ store.doubleCount }}</p>
</template>

<script>
export default {
  setup() {
    const store = useStore()

    return { store }
  },
}
</script>
```