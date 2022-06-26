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
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/privacy">privacy</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li class="login-container">
                <div class="add">
                  <button class="btn" @click="goTo">add property</button>
                </div>
                <div class="profile-pic shadowActive" @click="login('login')">
                  <img src="../../assets/images/profile.svg" alt="profile" />
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <!-- responsive -->
      <div :class="[{ active: transparent }, 'header mobile']">
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
            <ul>
              <li class="login-container">
                <div class="add">
                  <button class="btn" @click="goTo">add property</button>
                </div>
                <div class="profile-pic shadowActive" @click="login('login')">
                  <img src="../../assets/images/profile.svg" alt="profile" />
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <!-- responsive -->
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
}
.navigation-profile .nav ul {
  display: flex;
  align-items: center;
}
.navigation-profile .nav ul li {
  margin-right: 40px;
  text-transform: uppercase;
  font-size: 14px;
}
.navigation-profile .nav ul li:last-child {
  margin-right: unset;
}
.navigation-profile .nav ul li a {
  text-decoration: none;
  color: #000;
}
.header.active .navigation-profile .nav ul li a {
  color: #fff;
}
.navigation-profile .nav ul li.login-container {
  display: flex;
  align-items: center;
}
.navigation-profile .nav ul li .profile-pic {
  border-radius: 50%;
  overflow: hidden;
  width: 37px;
  background: white;
  height: 37px;
  cursor: pointer;
}
.navigation-profile .nav ul li .profile-pic img {
  width: 100%;
  height: 100%;
}
.navigation-profile .btn {
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
  color: #fff;
  text-transform: uppercase;
  border: none;
  padding: 10px 25px;
  margin-right: 18px;
  cursor: pointer;
}
.mobile {
  display: none;
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .disktop {
    display: none;
  }
  .header.mobile {
    padding: 20px 10px;
    position: relative;
    display: flex;
  }
  .header.mobile .logo {
    width: 130px;
  }
  .header.mobile{
    min-height: unset;
  }
  .header.mobile .navigation-profile .btn {
    font-size: 10px;
    padding: 5px 10px;
  }
  .header.mobile .navigation-profile .nav ul li .profile-pic {
    width: 26px;
    height: 26px;
    cursor: pointer;
}
}
</style>