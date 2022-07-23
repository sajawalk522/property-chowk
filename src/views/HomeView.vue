<template>
  <layout-home>
    <!-- <h1 @click="saveTutorial">Clicked</h1>
    <h1 v-for="(t, index) in $store.state.properties" :key="index" @click="deleteItem(t.key)">
      {{ t.title }}
    </h1> -->
    <PropertyExpert />
    <NewProjects />
    <NewProperty :data="superHot" title="Featured Properties" />
    <NewProperty :data="Hot" title="Recent Properties" />
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
  data() {
    return {
      tutorials: [],
    };
  },
  computed: {
    superHot() {
      var filteredFeatrued = this.$store.state.properties.filter((f) => {
        return f.val().featured;
      });
      return filteredFeatrued.slice(0, 20);
    },
    Hot() {
      var filteredFeatrued = this.$store.state.properties.filter((f) => {
        return f.val().feature_type;
      });
      return filteredFeatrued.slice(0, 20);
    },
  },
  mounted() {
    this.$getLocation()
      .then((coordinates) => {
        console.log(coordinates);
      this.fetchLocationName(coordinates.lat,coordinates.lag)
      })
      .catch((error) => {
        console.log(error);
      });

    // PropertiesDataService.getAll().on("value", this.onDataChange);
    // PropertiesDataService.getAll().off("value", this.onDataChange);
  },
  methods: {
    async  fetchLocationName (lat,lng) {
    await fetch(
      'https://www.mapquestapi.com/geocoding/v1/reverse?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&location='+lat+'%2C'+lng+'&outFormat=json&thumbMaps=false',
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(
          'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
        );
      });
  },
    // desable islent
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