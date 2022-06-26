<template>
  <div class="home">
    <default-layout>
      <DetailPage />
      <AppFooter />
    </default-layout>
  </div>
</template>
<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import DetailPage from "@/components/detail/index.vue";
export default {
  name: "DetailView",
  components: {
    DefaultLayout,
    DetailPage,
  },
};
</script>