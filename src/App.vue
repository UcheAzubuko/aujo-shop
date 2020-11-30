<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "@/components/nav/TheHeader.vue";
import TheFooter from "@/components/nav/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: inherit;
}

html {
  font-family: "Nunito", sans-serif;
}

body {
  font-size: 15px;
  color: #8c8c8c;
  background: #fff;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #282828;
}

img {
  max-width: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  display: inline-block;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  background: none;
}

.btn-black {
  background: #282828;
  color: #fff;
}

.btn-black:hover {
  background: rgb(113, 113, 113);
}

.app-container {
  max-width: 82rem;
  margin: auto;
  padding: 0 1rem;
}
</style>
