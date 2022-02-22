<template>
  <div class="table-grid">
    <div>
      {{ row.id }}
    </div>
    <div>
      {{ row.name }}
    </div>
    <div>
      {{ row.description }}
    </div>
    <div>
      ${{ row.price }}
    </div>
    <div class="category">
      {{ row.category }}
    </div>
    <div class="category">
      {{ row.subcategory }}
    </div>
    <div class="keywords" v-html="row.features" />
    <div class="keywords">
      {{ row.keywords }}
    </div>
    <div>
      {{ row.url }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    row: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

.category {
  text-transform: capitalize;
}

.keywords {
  font-size: 12px;
}

</style>
