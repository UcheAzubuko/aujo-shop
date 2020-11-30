import { createRouter, createWebHistory } from "vue-router";

import ProductsList from "./pages/ProductsList.vue";
import TheCart from "./pages/TheCart.vue";
import ShopAdmin from "./pages/ShopAdmin.vue";
import ContactUs from './pages/ContactUs.vue'
import AboutUs from './pages/AboutUs.vue'
import CheckOut from './pages/CheckOut.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ProductsList },
    { path: "/cart", component: TheCart },
    { path: "/admin", component: ShopAdmin },
    { path: "/contact-us", component: ContactUs },
    { path: "/about", component: AboutUs },
    { path: "/checkout", component: CheckOut },
  ],
});

export default router;
