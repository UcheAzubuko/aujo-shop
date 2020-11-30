<template>
  <li>
    <div class="cart-data">
      <div class="cart-image">
        <img :src="image" :alt="title" />
      </div>
      <div class="cart-info">
        <header>
          <h5>{{ title }}</h5>
          <a @click="removeFromCart">x<i class="fas fa-times"></i></a>
        </header>
        <div class="product-price"><s>N</s>{{ price.toFixed(2) }}</div>
        <div class="item-quantity">
          <h5>
            Qty <span><i class="fas fa-caret-left"></i></span> {{ itemQty }}
            <span><i class="fas fa-caret-right"></i></span>
          </h5>
          <h5><s>N</s>{{ itemTotal }}</h5>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["title", "image", "id", "price", "itemQuantity"],
  methods: {
    removeFromCart() {
      this.$store.dispatch("cart/removeFromCart", {productId: this.id});
    },
    // reduceItemQuantity() {
    //   this.$store.dispatch("cart/reduceItemQuantity", this.id);
    // },
  },
  computed: {
    itemTotal() {
      return (this.price * this.itemQuantity).toFixed(2);
    },
    itemQty() {
      return this.itemQuantity;
    },
  },
};
</script>

<style scoped>
li {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

.cart-data {
  display: flex;
}

.cart-image img {
  height: 5rem;
  width: 5rem;
  object-fit: cover;
  margin-right: 2rem;
}

header {
  display: flex;
  justify-content: space-between;
}

.cart-info {
  width: 100%;
}

.item-quantity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.item-quantity i {
  margin: auto 6px;
  font-size: 1.1rem;
  cursor: pointer;
}

.product-price {
  margin: 3px auto;
  font-size: 0.8rem;
}

a {
  cursor: pointer;
}
</style>
