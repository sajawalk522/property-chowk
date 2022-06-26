<template>
  <div>
    <section class="container-main">
      <AppHeader :transparent="false" />
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
export default {
  components: {
    AppFooter,
    AppHeader,
  },
};
</script>

<style scoped>

</style>