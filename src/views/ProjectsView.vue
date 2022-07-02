<template>
  <div>
    <layout-home>
      <ProjectsPage />
    </layout-home>
    <BottomFooter />
  </div>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import BottomFooter from "@/components/footer/bottomFooter.vue";
import ProjectsPage from "@/components/allProjects/index.vue";
export default {
  name: "ProjectsView",
  components: {
    LayoutHome,
    ProjectsPage,
    BottomFooter
  }
};
</script>