<template>
  <header id="app-header">
    <nav class="nav-wrapper app-container">
      <ul>
        <li><router-link to="/contact-us">Contact</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/" id="logo">Aujo Shop</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/admin" v-if="isLoggedIn">Admin</router-link></li>
        <li>
          <router-link to="/cart">Cart ({{ cartQuantity }})</router-link>
        </li>
        <li>
          <button class="btn-black" v-if="!isLoggedIn" @click="login">
            Login
          </button>
        </li>
        <li>
          <button class="btn-black" v-if="isLoggedIn" @click="logout">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  // computed: {
  //   ...mapGetters(["isLoggedIn"]),
  // },
  // methods: {
  //   ...mapActions(["login", "logout"]),
  // },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    cartQuantity() {
      return this.$store.getters["cart/quantity"];
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
header {
  background: #fff;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid #cccccc;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

#logo {
  font-size: 1.5rem;
  font-weight: 600;
  color: #282828;
}

ul {
  display: flex;
  align-items: center;
}

a {
  color: #8c8c8c;
}

li:first-child {
  margin-right: 20px;
}

.btn-black {
  margin-left: 20px;
  padding: 7px 15px;
}
</style>