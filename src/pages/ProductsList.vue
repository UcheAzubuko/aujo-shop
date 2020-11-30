<template>
  <section class="app-container products-container">
    <ul>
      <products-item
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :image="product.image"
        :title="product.title"
        :desc="product.description"
        :price="product.price"
      ></products-item>
    </ul>
  </section>
</template>

<script>
import ProductsItem from "@/components/products/ProductsItem.vue";
export default {
  components: {
    ProductsItem,
  },
  computed: {
    products() {
      return this.$store.getters["prods/products"];
    },
  },
};
</script>

<style scoped>
.products-container {
  margin: 2rem auto;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>