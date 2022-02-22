<template>
  <div class="footer">
    <div>
      {{ startIndexDisplay }}-{{ endIndex }} of {{ dataLength }}
    </div>
    <div class="page-container">
      <ArrowLeft v-if="currentPage > 1" class="left-arrow" @click.native="previousPage" />
      {{ currentPage }} of {{ totalPages }}
      <ArrowLeft v-if="currentPage < totalPages" class="right-arrow" @click.native="nextPage" />
    </div>
  </div>
</template>

<script>
import ArrowLeft from './ArrowLeft'

export default {
  name: 'TableFooter',
  components: { ArrowLeft },
  props: {
    dataLength: {
      type: Number,
      default: 1
    },
    rowsSelected: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    startIndex () {
      return this.currentPage === 1 ? 0 : (this.currentPage - 1) * 10
    },
    startIndexDisplay () {
      return this.dataLength > 0 ? this.startIndex + 1 : 0
    },
    endIndex () {
      return this.dataLength > this.startIndex + 10 ? this.startIndex + 10 : this.dataLength
    },
    totalPages () {
      return this.dataLength > 0 ? Math.ceil(this.dataLength / 10) : 1
    }
  },
  watch: {
    dataLength: {
      handler: 'resetPagination'
    }
  },
  created () {
    this.setPageNumber()
    this.setDataRange()
  },
  methods: {
    nextPage () {
      this.currentPage++
      this.setDataRange()
    },
    previousPage () {
      this.currentPage--
      this.setDataRange()
    },
    setDataRange () {
      this.$emit('dataRange', this.startIndex, this.endIndex)
      this.$emit('pageNumber', this.currentPage)
    },
    setPageNumber () {
      this.currentPage = 1
    },
    resetPagination () {
      this.currentPage = 1
      this.setDataRange()
    }
  }
}
</script>

<style scoped>

.footer {
  padding-left: 10px;
  border-top: 2px solid black;
  height: 40px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #E5E5E5;
}

.right-arrow {
  transform: rotate(180deg);
  margin-left: 16px;
  height: 9px;
  width: 9px;
  cursor: pointer;
}

.left-arrow {
  margin-right: 16px;
  height: 9px;
  width: 9px;
  cursor: pointer;
}

.page-container {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

</style>
