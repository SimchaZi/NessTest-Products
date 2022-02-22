<template>
  <div class="sidebar">
    <div v-for="(category,idx) in categories" :key="idx">
      <div class="ml-1 text-lg font-bold capitalize my-1">
        {{ category.category }} - <span class="text-sm">(Average Price ${{ category.averagePrice }})</span>
        <div v-for="(product, index) in category.products" :key="index" class="text-xs font-normal ml-2">
          {{ product.name }} - ${{ product.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    categories: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style scoped>

.sidebar {
  border: 2px solid black;
  height: 100%;
  width: 335px;
  position: fixed;
  right: 0;
  overflow: auto;
}

</style>
