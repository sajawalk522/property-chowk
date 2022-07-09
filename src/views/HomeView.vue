<template>
  <layout-home>
    <!-- <h1 @click="saveTutorial">Clicked</h1>
    <h1 v-for="(t, index) in $store.state.properties" :key="index" @click="deleteItem(t.key)">
      {{ t.title }}
    </h1> -->
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
// import PropertiesDataService from "../services/PropertiesServices";
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
  data() {
    return {
      tutorials: [],
    };
  },
  mounted() {
    // PropertiesDataService.getAll().on("value", this.onDataChange);
    // PropertiesDataService.getAll().off("value", this.onDataChange);
  },
  methods: {
    // deleteItem() {
    //   PropertiesDataService.delete("-N6F38WjtW9LGvKyFyNA");
    // },
    // onDataChange(items) {
    //   let _tutorials = [];
    //   items.forEach((item) => {
    //     let key = item.key;
    //     let data = item.val();
    //     _tutorials.push({
    //       key: key,
    //       title: data.title,
    //       description: data.description,
    //       published: data.published,
    //     });
    //   });
    //   this.tutorials = _tutorials;
    // },
    // saveTutorial() {
    //   var data = {
    //     title: "tum",
    //     description: "aesting",
    //     published: true,
    //   };
    //   PropertiesDataService.create(data)
    //     .then(() => {
    //       console.log("Created new item successfully!");
    //       // this.submitted = true;
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
  },
  // add() {
  //   const db = firebase.firestore();
  //   let employeesData = [];
  //   db.collection("users")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         employeesData.push({
  //           id: doc.id,
  //           name: doc.data().name,
  //           date: doc.data().date,
  //         });
  //         console.log(doc.id, " => ", doc.data());
  //       });
  //       return employeesData;
  //     })
  //     .catch((error) => {
  //       console.log("Error getting documents: ", error);
  //     });
  // },
};
</script>