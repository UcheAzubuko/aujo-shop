export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: "p1",
          image:
            "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Product 1",
          description: "This is product 1",
          price: 99.9,
        },
        {
          id: "p2",
          image:
            "https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Product 2",
          description: "This is product 2",
          price: 49.9,
        },
        {
          id: "p3",
          image:
            "https://images.unsplash.com/photo-1601460588655-109bd38204db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Product 3",
          description: "This is product 3",
          price: 95.9,
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
