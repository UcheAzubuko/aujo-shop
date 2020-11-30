export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].itemQuantity++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          itemQuantity: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
    },
    removeProductFromCart(state, payload) {
      const prodId = payload.productId;
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.itemQuantity;
      state.total -= prodData.price * prodData.itemQuantity;
    },
    // reduce Item Quantity
    // reduceItemQuantity(state, payload) {
    //   const prodId = payload;
    //   const productInCartIndex = state.items.findIndex(
    //     (cartItem) => cartItem.productId === prodId
    //   );
    //   if (productInCartIndex >= 0) {
    //     state.items[productInCartIndex].itemQuantity++;
    //   }
    //   const prodData = state.items[productInCartIndex];
    //   state.items[productInCartIndex].itemQuantity -= 1;
    //   state.qty -= 1;
    //   state.total -= prodData.price * prodData.itemQuantity;
    // },
  },
  actions: {
    addToCart(context, payload) {
      context.commit("addProductToCart", payload);
    },
    removeFromCart(context, payload) {
      context.commit("removeProductFromCart", payload);
    },
    // Action for reduce Item
    // reduceItemQuantity(context, payload) {
    //   context.commit("reduceItemQuantity", payload);
    // },
  },
  getters: {
    // Allows us get access to Total and Cart Quantity to be updated
    products(state) {
      // Overall cart items/products
      return state.items;
    },
    totalSum(state) {
      // Total sum
      return state.total;
    },
    quantity(state) {
      // Quantity per item
      return state.qty;
    },
    hasItems(state) {
      return state.items && state.items.length > 0;
    }
  },
};
