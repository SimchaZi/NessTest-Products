<template>
  <div class="fixed inset-0 w-full h-screen flex items-center justify-center bg-blue-800 bg-opacity-60 z-10" @click="closeModal">
    <div class="w-full mx-3 max-w-2xl bg-white shadow-lg rounded-lg p-8" @click.stop>
      <div class="flex justify-center py-4">
        <span class="font-bold text-blue-900 text-size-22-px">Add New Product</span>
      </div>
      <div class="w-full text-blue-800 text-sm flex justify-center">
        <div>
          <label class="flex" for="id">ID</label>
          <input
            id="id"
            v-model="formModel.id.input"
            :class="{ invalid: !formModel.id.isValid}"
            type="text"
            @focus="formModel.id.isValid = true"
          >
          <label class="flex" for="name">Name</label>
          <input
            id="name"
            v-model="formModel.name.input"
            :class="{ invalid: !formModel.name.isValid}"
            type="text"
            @focus="formModel.name.isValid = true"
          >
          <label class="flex" for="description">Description</label>
          <input id="description" v-model="formModel.description.input" type="text">
          <label class="flex" for="price">Price (USD)</label>
          <input
            id="price"
            v-model="formModel.price.input"
            :class="{ invalid: !formModel.price.isValid}"
            type="number"
            @focus="formModel.price.isValid = true"
          >
          <label class="flex" for="keywords">Keywords</label>
          <input id="keywords" v-model="formModel.keywords.input" type="text">
        </div>
        <div class="ml-16">
          <label class="flex" for="category">Category</label>
          <input id="category" v-model="formModel.category.input" type="text">
          <label class="flex" for="subcategory">Subcategory</label>
          <input id="subcategory" v-model="formModel.subcategory.input" type="text">
          <label class="flex" for="features">Features</label>
          <input id="features" v-model="formModel.features.input" type="text">
          <label class="flex" for="url">URL</label>
          <input id="url" v-model="formModel.url.input" type="text">
        </div>
      </div>
      <div class="w-full flex mt-10">
        <div class="w-1/2 mr-5 border-2 border-blue-500 hover:bg-blue-400 duration-300 text-blue-500 h-12 flex justify-center items-center rounded font-semibold cursor-pointer" @click="closeModal">
          <span class="pl-2">Cancel</span>
        </div>
        <div class="w-1/2 ml-5 bg-blue-500 hover:bg-blue-400 duration-300 text-white h-12 flex justify-center items-center rounded font-semibold cursor-pointer" @click="addProduct">
          <span class="pl-2">Add</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { SET_PRODUCT_STATE } from '../shared/constants'
import { asyncArrayConstructor } from '../shared/utility'

const formConstructor = () => {
  return {
    id: { input: '', isValid: true },
    name: { input: '', isValid: true },
    description: { input: '', isValid: true },
    price: { input: '', isValid: true },
    keywords: { input: '' },
    category: { input: '' },
    subcategory: { input: '' },
    features: { input: '' },
    url: { input: '' }
  }
}
export default {
  name: 'AddProductModal',
  data () {
    return {
      formModel: null
    }
  },
  computed: {
    productState () {
      return this.$store.state.productModule.productState
    },
    products () {
      return this.productState.data
    }
  },
  created () {
    this.formModel = formConstructor()
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    },
    addProduct () {
      const isValid = this.validateForm()
      if (isValid) {
        const payload = {}
        for (const field in this.formModel) {
          payload[field] = this.formModel[field].input
        }
        try {
          const newState = asyncArrayConstructor()
          newState.data = this.products.concat(payload)
          this.$store.commit(SET_PRODUCT_STATE, newState)
          this.closeModal()
        } catch (e) {
          alert('Couldn\'t add this product - ' + e)
        }
      }
    },
    validateForm () {
      let isFormValid = true
      if (!this.formModel.id.input) {
        this.formModel.id.isValid = false
        isFormValid = false
      }
      if (!this.formModel.name.input) {
        this.formModel.name.isValid = false
        isFormValid = false
      }
      if (isNaN(this.formModel.price.input) || !this.formModel.price.input) {
        this.formModel.price.isValid = false
        isFormValid = false
      }
      return isFormValid
    }
  }
}
</script>

<style scoped>

.invalid {
  @apply border border-red-600;
}

</style>
