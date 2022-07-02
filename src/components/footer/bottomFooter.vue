<template>
  <div class="container">
    <section class="bottom-footer">
      <div class="footer-logo">
        <router-link to="/">
          <img src="../../assets/images/logo.svg" alt="Logo" />
          <p>A new Era of Pakistan's Real Estate Market</p>
        </router-link>
      </div>
      <div class="copy-right">
        <p>All rights reserved</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "BottomFppter"
};
</script>

<style>
.bottom-footer{
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
}
.bottom-footer .footer-logo a {
  text-decoration: none;
}
.bottom-footer .footer-logo img {
  width: 175px;
  margin-left:30px;
}
.bottom-footer .footer-logo p {
  font-size: 13px;
  line-height: 1.5;
  color: #333;
}

.bottom-footer .copy-right p {
  font-size: 14px;
  line-height: 1.5;
  color: #333;
}
</style>