<template>
  <section class="container">
    <div class="tending-project">
      <router-link :to="`${project.slug}&project=${project.id}`" class="trend-card" v-for="(project ,index) in pageData[0].project" :key="index">
        <div class="trend-image" >
          <img :src="require(`../../assets/images/${project.img}`)" />
        </div>
        <h6>{{project.title}}</h6>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  props:['pageData'],
  name: "AllPage",
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
  margin: 12px 0 1px 18px;
  width: calc(24% - 9px);
  text-decoration: none;
}
.tending-project .trend-image img {
  width: 100%;
}
</style>