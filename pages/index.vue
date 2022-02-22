<template>
  <div class="flex">
    <div class="main-container">
      <div class="title">
        Products
        <button class="add-button" @click="openAddModal">
          Add Product
        </button>
      </div>
      <ProductTable :products="clonedProducts" />
    </div>
    <SideBar :categories="categoryHash" />
    <AddProductModal v-if="showAddModal" @closeModal="closeModal" />
  </div>
</template>

<script>
import { A_LOAD_PRODUCTS } from '../shared/constants'
import ProductTable from '../components/ProductTable'
import AddProductModal from '../components/AddProductModal'
import SideBar from '../components/SideBar'

export default {
  name: 'Index',
  components: { SideBar, AddProductModal, ProductTable },
  data () {
    return {
      showAddModal: false
    }
  },
  computed: {
    productState () {
      return this.$store.state.productModule.productState
    },
    products () {
      return this.productState.data
    },
    clonedProducts () {
      return JSON.parse(JSON.stringify(this.products))
    },
    categoryHash () {
      const categoryObj = {}
      this.clonedProducts.forEach((product) => {
        if (!categoryObj[product.category]) {
          categoryObj[product.category] = { totalPrice: 0, averagePrice: 0, products: [] }
        }
        categoryObj[product.category].totalPrice += Number(product.price)
        categoryObj[product.category].products.push(product)
      })
      const categoryArray = []
      for (const [key, value] of Object.entries(categoryObj)) {
        const averagePrice = (value.totalPrice / value.products.length).toFixed(2)
        categoryArray.push({ category: key, averagePrice, products: value.products })
      }

      return categoryArray.sort((a, b) => a.averagePrice - b.averagePrice)
    }
  },
  created () {
    this.$store.dispatch(A_LOAD_PRODUCTS)
  },
  methods: {
    closeModal () {
      this.showAddModal = false
    },
    openAddModal () {
      this.showAddModal = true
    }
  }
}
</script>

<style>

.title {
  padding: 20px 0 0 20px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.add-button {
  margin-left: 30px;
  background-color: blue;
  border-radius: 8px;
  padding: 5px 6px;
  font-size: 14px;
  color: white;
  font-weight: 600;
}

.main-container {
  width: calc(100% - 335px);
  border: 2px solid black;
  border-right: 0;
  height: 100vh;
  overflow: hidden;
}

</style>
