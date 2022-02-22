<template>
  <div class="table-grid header">
    <div v-for="(header, idx) in headers" :key="idx" class="flex cursor-pointer" @click="setSortBy(header)">
      {{ header }}
      <ArrowLeft v-if="header === sortByColumn && reverseSort" class="down-arrow" />
      <ArrowLeft v-if="header === sortByColumn && !reverseSort" class="up-arrow" />
    </div>
  </div>
</template>

<script>
import ArrowLeft from './ArrowLeft'
export default {
  name: 'TableHeader',
  components: { ArrowLeft },
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    sortByColumn: {
      type: String,
      default: ''
    },
    reverseSort: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setSortBy (header) {
      if (header === 'Price' || header === 'Category') { this.$emit('setSortBy', header) }
    }
  }
}
</script>

<style scoped>

.header {
  border-bottom: 2px solid black;
  font-weight: bold;
}

.down-arrow {
  height: 20px;
  width: 20px;
  padding-top: 4px;
  transform: rotate(270deg);
}

.up-arrow {
  height: 20px;
  width: 20px;
  padding-bottom: 4px;
  transform: rotate(90deg);
}

</style>
