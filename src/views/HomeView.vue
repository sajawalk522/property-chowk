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
import axios from "axios";
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
      details: "lahore",
    };
  },
  computed: {
    superHot() {
      var filteredFeatrued = this.$store.state.properties.filter((f) => {
        return f.featured && f.feature_type == 0;
      });
      return filteredFeatrued.slice(0, 20);
    },
    Hot() {
      var filteredFeatrued = this.$store.state.properties.filter((f) => {
        return (
         f.city && f.featured == false && f.feature_type == 1,
          f.feature_type > 0
        );
      });
      if (!filteredFeatrued) {
        filteredFeatrued = this.$store.state.properties.filter((f) => {
          return f.city && f.featured == false && f.feature_type == 1;
        });
      }
      return filteredFeatrued.slice(0, 20);
    },
  },
  mounted() {
    this.geolocation();
    // const success = (position) => {
    //   console.log(position, '==>')
    //     const latitude  = position.coords.latitude;
    //     // const longitude = position.coords.longitude;
    //      console.log(latitude)
    //     // Do something with the position
    // };

    // const error = (err) => {
    //     console.log(err)
    // };

    // This will open permission popup
    // navigator.geolocation.getCurrentPosition(success, error);
    // this.$getLocation()
    //   .then((coordinates) => {
    //     console.log(coordinates);
    // this.fetchLocationName(coordinates.lat,coordinates.lag)
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    // PropertiesDataService.getAll().on("value", this.onDataChange);
    // PropertiesDataService.getAll().off("value", this.onDataChange);
  },
  methods: {
    geolocation: function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    },
    showPosition: function (position) {
      // Use Axios to make a MapQuest API Call
      axios
        .get(
          "https://www.mapquestapi.com/geocoding/v1/reverse?key=TPWvRrsfpgGWBACqqXd94fbDcfVpy2WJ&location=" +
            position.coords.latitude +
            "%2C" +
            position.coords.longitude +
            "&outFormat=json&thumbMaps=false"
        )
        .then(() => {
          // this.details = response.data.results[0].locations[0].adminArea5;
        })
        .catch((e) => {
          console.log(e);
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