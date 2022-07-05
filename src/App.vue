<template>
  <router-view />
</template>
<script>
import firebase from "./firebase";
const db = firebase.firestore();
export default {
  beforeMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        if (this.$route.path == "/add-property") {
          this.$router.replace("/");
        }
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
