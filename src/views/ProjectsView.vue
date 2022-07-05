<template>
  <div>
    <layout-home>
      <ProjectsPage />
    </layout-home>
  </div>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import ProjectsPage from "@/components/allProjects/index.vue";
export default {
  name: "ProjectsView",
  components: {
    LayoutHome,
    ProjectsPage,
  }
};
</script>