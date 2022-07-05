<template>
  <div class="home">
    <layout-home>
      <DetailPage />
      <AppFooter />
    </layout-home>
  </div>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import DetailPage from "@/components/detail/index.vue";
export default {
  name: "DetailView",
  components: {
    LayoutHome,
    DetailPage,
  },
};
</script>