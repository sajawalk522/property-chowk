<template>
  <router-view />
</template>
<script>
import firebase from "./firebase";
import PropertiesDataService from "./services/PropertiesServices";
const db = firebase.firestore();
export default {
  mounted(){
    // setTimeout(() => {
    //   PropertiesDataService.getAll().on("value", this.onDataChange);
    // }, 3000);
  },
  created() {
    PropertiesDataService.getAll().limitToFirst(100).on("value", this.onDataChange);
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$store.dispatch("setUser", false);
      } else {
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((querySnapshot) => {
            this.$store.dispatch("userDetail", querySnapshot.data());
          });
        this.$store.dispatch("setUser", true);
      }
    });
  },
  methods: {
    onDataChange(items) {
      let _properties = [];
      items.forEach((item) => {
        // let key = item.key;
        // let data = item.val();
        // console.log(item.val().baths)
        _properties.push(item);
      });
      this.$store.dispatch("setProperties", _properties);
    },
  },
  watch: {
    $route: {
      handler: function (params) {
        if (params.fullPath == "/add-property" && !this.$store.state.user) {
          this.$router.replace("/");
        }
      },
      immediate: true,
    },
  },
};
</script>
<style>
</style>
