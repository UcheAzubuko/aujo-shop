<template>
  <li>
    <div>
      <img :src="image" :alt="title" class="product-image" />
      <h3 class="product-title">{{ title }}</h3>
      <div>
        <h5 class="product-price"><s>N</s>{{ price.toFixed(2) }}</h5>
      </div>
    </div>
    <div>
      <button class="add-to-cart" @click="addProductToCart">Add to cart</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "desc", "price", "image"],
  methods: {
    addProductToCart() {
      this.$store.dispatch("cart/addToCart", {
        id: this.id,
        title: this.title,
        price: this.price,
        image: this.image,
      });
    },
  },
};
</script>

<style scoped>
.product-image,
.product-title,
.product-price {
  cursor: pointer;
}

div {
  text-align: center;
}

.product-title,
.product-price {
  display: inline-block;
}

.product-title {
  margin: 0.3rem;
}

li:hover .product-price {
  display: none;
  transition: all 150ms linear;
}

li:hover .add-to-cart {
  display: inline-block;
  transition: all 150ms linear;
}

.add-to-cart {
  display: none;
  padding: 7px 15px;
  background: #ccc;
  border: 1px dotted #2c2c2c;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.46);
  transition: all 150ms linear;
}

.add-to-cart:hover {
  border: 1px solid rgba(#000, 0.03);
  box-shadow: 1px 1px 2px rgba(#fff, 0.2);
  text-shadow: -0.5px -0.5px 0;
  transition: all 250ms linear;
}
</style>