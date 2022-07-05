<template>
  <div>
    <layout-home>
        <TrendingProjects/>
    </layout-home>
  </div>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import TrendingProjects from "@/components/trending/trendingProjects.vue";
export default {
  name: "TrendingView",
  components: {
    LayoutHome,
    TrendingProjects,
  }
};
</script>