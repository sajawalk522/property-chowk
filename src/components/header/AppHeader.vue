<template>
  <header>
    <div class="container">
      <div :class="[{ active: transparent }, 'header disktop']">
        <section class="logo">
          <router-link to="/">
            <img
              v-if="transparent"
              src="../../assets/images/logo-transparent.svg"
              alt="Logo"
            />
            <img v-else src="../../assets/images/logo.svg" alt="Logo" />
          </router-link>
        </section>
        <section class="navigation-profile">
          <div class="nav">
            <div>
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/#">Properties</router-link></li>
                <li><router-link to="/#">Realtors</router-link></li>
                <li><router-link to="/#">Gallery</router-link></li>
                <li><router-link to="/#">Blog</router-link></li>
                <li><router-link to="/#">Contact</router-link></li>
                <li>
                  <!-- <div class="add">
                  <button class="btn" @click="goTo">add property</button>
                </div> -->
                  <!-- <div class="profile-pic shadowActive" @click="login('login')">
                    <img src="../../assets/images/profile.svg" alt="profile" />
                  </div> -->
                </li>
              </ul>
            </div>
            <div class="login-container">
              <div class="profile-pic shadowActive" @click="login('login')">
                <img src="../../assets/images/profile.svg" alt="profile" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- model -->
    <LoginModel :model="showModel == 'login'" />
    <SignupModel :model="showModel == 'signup'" />
  </header>
</template>
<script>
import LoginModel from "../loginModels/LoginModel.vue";
import SignupModel from "../loginModels/SignupModel.vue";
export default {
  name: "AppHeader",
  props: ["transparent"],
  components: {
    LoginModel,
    SignupModel,
  },
  data() {
    return {
      showModel: "",
    };
  },
  methods: {
    goTo() {
      this.$router.push("/add-property");
    },
    login(val) {
      this.showModel = val;
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.shadowActive {
  box-shadow: 0px 2px 5px #888888a6;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90px;
}
.header .logo {
  width: 175px;
}
.header .logo img {
  width: 100%;
}
.navigation-profile {
  display: flex;
  width: 60%;
}
.navigation-profile .nav ul {
  display: flex;
  align-items: center;
  margin-top:3px;
}
.navigation-profile .nav ul li {
  margin-right: 40px;
  text-transform: uppercase;
  font-size: 14px;
  
}
.navigation-profile .nav ul li a:hover {
  border-bottom: 1px solid #4092cf;
  color: #4092cf;
}
.navigation-profile .nav ul li:last-child {
  margin-right: unset;
}
.navigation-profile .nav ul li a {
  text-decoration: none;
  color: #000;
  border-bottom: 1px solid transparent;
  transition: .3s;
  padding:10px 0;
}
.header.active .navigation-profile .nav ul li a {
  color: #fff;
}
.login-container {
  display: flex;
  align-items: center;
}
.profile-pic {
  border-radius: 50%;
  overflow: hidden;
  width: 37px;
  background: white;
  height: 37px;
  cursor: pointer;
}
.profile-pic img {
  width: 100%;
  height: 100%;
}
</style>