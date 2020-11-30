<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-content contact">
        <h3>Contact Me</h3>
        <p>
          If you have an idea or a perspectve that you want to share please
          reach out <span><router-link to="/contact-us">here</router-link></span
          >.
        </p>
      </div>
      <div class="footer-content follow">
        <h3>Follow Me</h3>
        <a href="https://www.linkedin.com/in/uchechukwu-azubuko-670b0516b"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a href="https://github.com/UcheAzubuko"
          ><i class="fab fa-github"></i
        ></a>
        <a href="https://twitter.com/UcheAzubuko"
          ><i class="fab fa-twitter"></i
        ></a>
        <a href="https://instagram.com/uchethebobo"
          ><i class="fab fa-instagram"></i
        ></a>
        <a href="https://facebook.com/UcheAzubuko"
          ><i class="fab fa-facebook"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  background: #fff;
  height: 15rem;
  border-top: 1px solid #cccccc;
}

.footer-wrapper {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  max-width: 60rem;
  margin: auto;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
}

.footer-content {
  flex-basis: 50%;
  text-align: center;
  padding: 5rem;
}

.footer-content a {
  color: #282828;
  font-weight: 600;
  display: inline;
}

.follow a {
  margin: auto 10px;
}
</style>