<template>
  <section class="app-container">
    <div v-if="hasItems" class="has-items cart-container">
      <div class="shopping-cart">
        <h2>Shopping Cart</h2>
        <div>
          <ul>
            <cart-item
              v-for="item in cartItems"
              :key="item.productId"
              :id="item.productId"
              :title="item.title"
              :price="item.price"
              :image="item.image"
              :item-quantity="item.itemQuantity"
            >
            </cart-item>
          </ul>
        </div>
        <div class="continue-shopping">
          <router-link to="/">Continue Shopping</router-link>
        </div>
      </div>
      <div class="cart-totals">
        <h2>Cart Totals</h2>
        <div class="total-price">
          <h5>Total</h5>
          <h5><s>N</s>{{ total }}</h5>
        </div>
        <div class="proceed-to-checkout">
          <router-link class="btn-black" to="/checkout"
            >Proceed to checkout</router-link
          >
        </div>
      </div>
    </div>
    <div v-else class="no-items">
      <div>
        <a @click="removeFromCart">x<i class="fas fa-times"></i></a>
        <h2>Your cart is empty</h2>
        <div class="return-to-shop">
          <router-link class="btn-black" to="/">Return to Shop</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CartItem from "@/components/cart/CartItem.vue";
export default {
  components: {
    CartItem,
  },
  computed: {
    cartItems() {
      return this.$store.getters["cart/products"];
    },
    total() {
      return this.$store.getters["cart/totalSum"].toFixed(2);
    },
    hasItems() {
      return this.$store.getters["cart/hasItems"];
    },
  },
};
</script>

<style scoped>
.cart-container {
  display: flex;
  margin: 4rem auto;
}

h2 {
  font-size: 1.3rem;
}

.shopping-cart {
  flex-basis: 70%;
  padding-right: 3rem;
}

.cart-totals {
  flex-basis: 30%;
}

.total-price {
  border: 1px solid #eee;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.cart-totals h2,
.shopping-cart h2 {
  margin-bottom: 1.7rem;
}

.continue-shopping {
  margin-top: 2.2rem;
}

.proceed-to-checkout {
  margin-top: 2rem;
}

.continue-shopping a,
.proceed-to-checkout a {
  width: 100%;
  text-align: center;
  padding: 12px;
}

.continue-shopping a {
  border: 1px solid #aaa;
  color: #282828;
}

.continue-shopping a:hover {
  border: 1px solid #282828;
}

.no-items {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.no-items h2 {
  margin-top: 1rem;
}

.return-to-shop {
  margin-top: 1.4rem;
}

.return-to-shop a {
  padding: 11px 40px;
}
</style>