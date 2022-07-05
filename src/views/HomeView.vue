<template>
  <layout-home>
    <PropertyExpert />
    <NewProjects />
    <NewProperty />
    <GetTouch />
    <GetApp />
  </layout-home>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import GetApp from "@/components/home/getApp.vue";
import NewProjects from "@/components/home/newProjects.vue";
import PropertyExpert from "@/components/home/propertyExpert.vue";
import NewProperty from "@/components/home/newProperty.vue";
import GetTouch from "@/components/home/getTouch.vue";
export default {
  name: "HomeView",
  components: {
    LayoutHome,
    GetApp,
    NewProjects,
    PropertyExpert,
    NewProperty,
    GetTouch,
  },
};
</script>