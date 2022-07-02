<template>
  <section class="container">
    <div class="tending-project">
      <router-link to="/detail" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/pro1.png" />
        </div>
      </router-link>
      <router-link to="/detail" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/pro2.png" />
        </div>
      </router-link>
      <router-link to="/detail" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/pro3.png" />
        </div>
      </router-link>
      <router-link to="/detail" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/pro4.png" />
        </div>
      </router-link>
      <router-link to="/detail" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/pro1.png" />
        </div>
      </router-link>
      <router-link to="/detail" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/pro2.png" />
        </div>
      </router-link>
      <router-link to="/detail" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/pro3.png" />
        </div>
      </router-link>
      <router-link to="/detail" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/pro4.png" />
        </div>
      </router-link>
      <router-link to="/detail" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/pro1.png" />
        </div>
      </router-link>
      <router-link to="/detail" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/pro2.png" />
        </div>
      </router-link>
      <router-link to="/detail" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/pro3.png" />
        </div>
      </router-link>
      <router-link to="/detail" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/pro4.png" />
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "AllPage"
};
</script>

<style>
.tending-project {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
}
.tending-project .trend-card {
  margin: 12px 0 1px 12px;
  width: calc(24% - 9px);
  text-decoration: none;
}
.tending-project .trend-image img {
  width: 100%;
}
</style>