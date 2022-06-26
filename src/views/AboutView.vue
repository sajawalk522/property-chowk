<template>
  <div class="home">
    <default-layout>
      <AboutUs />
      <AppFooter />
    </default-layout>
  </div>
</template>
<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import AboutUs from "@/components/about/index.vue";
export default {
  name: "AboutView",
  components: {
    DefaultLayout,
    AboutUs,
  },
};
</script>