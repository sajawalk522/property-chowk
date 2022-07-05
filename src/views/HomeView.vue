<template>
  <layout-home>
    <PropertyExpert />
    <NewProjects />
    <NewProperty />
    <GetTouch />
    <GetApp />
  </layout-home>
  <BottomFooter />
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import GetApp from "@/components/home/getApp.vue";
import NewProjects from "@/components/home/newProjects.vue";
import PropertyExpert from "@/components/home/propertyExpert.vue";
import NewProperty from "@/components/home/newProperty.vue";
import GetTouch from "@/components/home/getTouch.vue";
import BottomFooter from "@/components/footer/bottomFooter.vue";
export default {
  name: "HomeView",
  components: {
    LayoutHome,
    GetApp,
    NewProjects,
    PropertyExpert,
    NewProperty,
    GetTouch,
    BottomFooter,
  },
};
</script>