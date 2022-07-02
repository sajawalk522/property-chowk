<template>
  <section class="container">
    <div class="tending-project">
      <router-link to="/projects" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/residential.png" />
        </div>
        <h2>RESIDENTIAL BUILDING (20)</h2>
      </router-link>
      <router-link to="/projects" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/commercial.png" />
        </div>
        <h2>COMMERCIAL BUILDING (20)</h2>
      </router-link>
      <router-link to="/projects" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/re-co.png" />
        </div>
        <h2>COMMERCIAL & RESIDENTIALS (20)</h2>
      </router-link>
      <router-link to="/projects" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/housing.png" />
        </div>
        <h2>HOUSING SCHEMES (20)</h2>
      </router-link>
      <router-link to="/projects" class="trend-card">
        <div class="trend-image">
          <img src="../../assets/images/farm.png" />
        </div>
        <h2>FARM HOUSES SCHEMES (20)</h2>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "TrendingProjects"
};
</script>

<style scoped>
.tending-project {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
}
.tending-project .trend-card {
  margin: 12px 0 1px 12px;
  width: calc(33% - 9px);
  text-decoration: none;
}
.tending-project .trend-image img {
  width: 100%;
}
.tending-project h2 {
  color: #333;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding: 10px 0;
}
</style>