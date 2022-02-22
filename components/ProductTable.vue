<template>
  <div class="table-container">
    <TableHeader
      :sort-by-column="sortBy"
      :headers="tableHeaders"
      :reverse-sort="reverseSort"
      @setSortBy="setSortBy"
    />
    <div class="table-body-container">
      <div v-for="(product, idx) in currentData" :key="idx" class="table-body">
        <TableRow :row="product" />
      </div>
    </div>
    <TableFooter
      :data-length="products.length"
      @pageNumber="setCurrentPage"
      @dataRange="setCurrentData"
    />
  </div>
</template>

<script>
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

export default {
  name: 'ProductTable',
  components: { TableFooter, TableRow, TableHeader },
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentData: [],
      reverseSort: false,
      sortBy: 'Category'
    }
  },
  computed: {
    tableHeaders () {
      return ['ID', 'Name', 'Description', 'Price', 'Category', 'Subcategory', 'Features', 'Keywords', 'URL']
    },
    filteredData () {
      const filteredData = this.products
      return filteredData.sort(this.sortColumn(this.sortBy))
    }
  },
  methods: {
    setCurrentData (startIndex, endIndex) {
      this.currentData = this.filteredData.slice(startIndex, endIndex)
    },
    setCurrentPage (currentPage) {
      this.currentPage = currentPage
    },
    resetPagination () {
      this.setCurrentPage(1)
      this.setCurrentData(0, 10)
    },
    sortColumn (header) {
      const positionA = this.reverseSort ? 1 : -1
      const positionB = this.reverseSort ? -1 : 1
      if (header === 'Category') {
        return (a, b) => a.category.toLowerCase() < b.category.toLowerCase() ? positionA : positionB
      } else if (header === 'Price') {
        return (a, b) => {
          if (this.reverseSort) {
            return b.price - a.price
          } else {
            return a.price - b.price
          }
        }
      }
    },
    setSortBy (header) {
      this.reverseSort = this.sortBy === header ? !this.reverseSort : false
      this.sortBy = header
      this.setCurrentData(0, 10)
    }
  }
}
</script>

<style scoped>

.table-container {
  margin: 0 0 12px 12px;
  height: 100vh;
  overflow: hidden;
}

.table-body {
  align-items: center;
  border-bottom: 1px solid #F8F9FF;
  font-size: 11px;
  word-wrap: break-word;
}

.table-body-container {
  overflow: auto;
  height: calc(100% - 127px);
}

.table-body:nth-child(even) {
  background-color: #D2DAE2;
}

</style>
