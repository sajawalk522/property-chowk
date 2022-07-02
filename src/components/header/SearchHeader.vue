<template>
  <section class="searchHeader">
    <div class="container">
      <div class="main-container">
        <div class="main-primary">
          <div class="search-header">
            <h1>Property Chowk</h1>
            <h2>
              A New Era of <br />
              Pakistan's Real Estate Market
            </h2>
          </div>
          <section class="search" v-if="$route.path == '/'">
            <div class="heade-btns">
              <router-link to="#"
                ><button class="btns">Add Property</button></router-link
              >
              <router-link to="#"
                ><button class="btns active">Top Projects</button></router-link
              >
              <router-link to="#"
                ><button class="btns">Societies</button></router-link
              >
            </div>
            <router-link to="/search" class="quick-search">
              <div class="quick-main">
                <div class="heading">
                  <h1>QUICK SEARCH</h1>
                </div>
                <div class="search-container">
                  <div class="inputs">
                    <div>
                      <select>
                        <option value="" selected>City</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                      </select>
                    </div>
                    <div>
                      <select>
                        <option value="" selected>Area</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                      </select>
                    </div>
                    <div>
                      <select>
                        <option value="" selected>All Types</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                      </select>
                    </div>
                  </div>
                  <div class="yellow-btns">
                    <button>Buy</button>
                    <button>Rent</button>
                  </div>
                </div>
              </div>
            </router-link>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
a{
  text-decoration: none;
}
.searchHeader {
  width: 100%;
}
.heade-btns {
  display: flex;
  justify-content: space-between;
}
.heade-btns .btns {
  padding: 12px 26px;
  font-size: 16px;
  min-width: 169px;
  border-radius: 3px;
  background-color: #1783b4;
  color: #fff;
  transition: 0.5s;
}
.heade-btns .btns:hover {
  background-color: #282828;
}
.heade-btns .btns.active {
  background-color: #282828;
}
.heade-btns .btns.active:hover {
  background-color: #1783b4;
}
.quick-main {
  width: 80%;
}
.quick-search{
  display:flex;
  justify-content: center;
}
.quick-search .heading {
  margin: 30px 0px 10px 0px;
}
.quick-search h1 {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.5px;
  position: relative;
  left: -103px;
  top: 7px;
}
.quick-search .search-container {
  color: #fff;
  display: flex;
  width: 96%;
  justify-content: space-between;
  align-items: center;
  background-color: #5d9265;
  padding: 16px;
}
.quick-search .search-container .inputs {
  display: flex;
  justify-content: space-between;
  width: 70%;
}
.quick-search .search-container .inputs > div {
  width: 100%;
  border-right: 1px solid #d5d5d5;
}
.quick-search .search-container select {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding: 10px 10px;
  color: #000;
  position: relative;
  font-size: 14px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.main-container {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.main-primary {
  width: 90%;
}
.main-container .search-header h1 {
  font-size: 26px;
  font-weight: 400;
}
.main-container .search-header h2 {
  font-size: 56px;
  font-style: italic;
  line-height: 1.2;
  letter-spacing: 2.5px;
}
.main-container .search-header h1,
h2 {
  color: #fff;
}
.main-container .search-header {
  line-height: 1.5;
  margin-top: 40px;
  text-align: center;
}
.main-container .search {
  padding: 18px 24px 28px 24px;
  margin-top: 30px;
}
.yellow-btns {
  width: 30%;
  display: flex;
  flex-wrap: nowrap;
  margin-left: 6px;
}
.yellow-btns button {
  background: #eae95f;
  color: #000;
  text-transform: uppercase;
  padding: 8px 0px;
  border-radius: 2px;
  margin: 0px 0px 0px 6px;
  font-weight: bolder;
  width: 50%;
  font-size: 14px;
  font-weight: 800;
}
</style>