<template>
  <div>
    <layout-home>
        <TrendingProjects/>
    </layout-home>
    <BottomFooter />
  </div>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import BottomFooter from "@/components/footer/bottomFooter.vue";
import TrendingProjects from "@/components/trending/trendingProjects.vue";
export default {
  name: "TrendingView",
  components: {
    LayoutHome,
    TrendingProjects,
    BottomFooter
  }
};
</script>