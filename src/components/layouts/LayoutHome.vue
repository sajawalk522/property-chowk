<template>
  <div>
    <section class="container-main">
      <AppHeader :transparent="true" />
      <SearchHeader />
    </section>
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from "../footer/AppFooter.vue";
import AppHeader from "../header/AppHeader.vue";
import SearchHeader from "../header/SearchHeader.vue";
export default {
  components: {
    AppFooter,
    AppHeader,
    SearchHeader,
  },
};
</script>

<style scoped>
.container-main {
  background-image: linear-gradient(180deg, rgb(0 0 0/24%), rgb(0 0 0/24%)),
    url("../../assets/images/home-image.png");
  background-repeat: no-repeat;
  height: 690px;
  background-size: cover;
}

</style>