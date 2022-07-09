<template>
  <default-layout>
    <!-- <div id="root">
      <div>
        <input type="file" name="images[]" @change="imagesAdd" multiple />
      </div>
      <div v-for="(img, key) in image" :key="key">
        <img class="img-pre" :src="img" />
        <button v-show="image" @click="removeImage(key)">Remover</button>
      </div>
    </div> -->
    <section class="container">
      <BlueHead />
      <section class="filter-search">
        <section>
          <div class="toggle-buttons">
            <button
              :class="['btn', { active: category == 'buy' }]"
              @click="typeSelect('buy')"
            >
              Buy
            </button>
            <button
              :class="['btn', { active: category == 'rent' }]"
              @click="typeSelect('rent')"
            >
              Rent
            </button>
          </div>
        </section>
        <TypeAndSubtype title="Property type" :types="typeData" />
        <TypeAndSubtype title="Property Sub type" :types="subTypeData" />
        <div class="main-inputs">
          <div class="range-section">
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Price</h1>
              </div>
              <div>
                <div>
                  <input type="number" placeholder="0" />
                </div>
                <div class="mid-to">to</div>
                <div>
                  <input type="number" placeholder="any" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Property Size</h1>
              </div>
              <div>
                <div>
                  <input type="number" name="" id="" />
                </div>
                <div>
                  <select class="area">
                    <option value="" selected>Marla</option>
                    <option value="">Kanal</option>
                    <option value="">Acre</option>
                    <option value="">Yard</option>
                    <option value="">sq.ft</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- input block -->
          </div>
          <!-- area detail -->
          <section class="area-detail">
            <!-- block of code -->
            <div class="city-block">
              <div class="title">
                <h1>City</h1>
              </div>
              <div class="area-input">
                <div>
                  <input type="text" v-model="city" @focus="openDropdown" />
                </div>
                <div
                  class="dropdown"
                  v-if="dropdownCities"
                  @blur="closeDropdown"
                >
                  <div class="city-search">
                    <input type="search" placeholder="Search Location" />
                  </div>
                  <div class="city-list" @click="selectedCity('islamabad')">
                    <ul>
                      <li>Popular Cities</li>
                      <li>Islamabad</li>
                      <li>Karachi</li>
                      <li>Lahore</li>
                      <li>Peshawar</li>
                    </ul>
                    <ul>
                      <li>Other Cities</li>
                      <li>Abbottabad</li>
                      <li>Abdul Hakim</li>
                      <li>Alipur</li>
                      <li>Bagh</li>
                      <li>Bannu</li>
                      <li>Chakwal</li>
                      <li>Daska</li>
                      <li>Daur</li>
                      <li>FATA</li>
                      <li>Gilgit</li>
                      <li>Mansehra</li>
                      <li>Okara</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- block of code -->
          </section>
          <section class="address-block">
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Society</h1>
              </div>
              <div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Phase</h1>
              </div>
              <div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Block</h1>
              </div>
              <div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Sector</h1>
              </div>
              <div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Road</h1>
              </div>
              <div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Street</h1>
              </div>
              <div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <!-- input block -->
          </section>
        </div>
        <!-- area detail -->
        <div class="main-inputs">
          <DetailNumbers :title="'Floor'" :data="floorData" />
          <DetailNumbers :title="'Bedrooms'" :data="bedRooms" />
          <DetailNumbers :title="'Bathrooms'" :data="bathRooms" />
        </div>
        <!-- input block -->
        <div class="check-buttons property-number">
          <div class="title">
            <h1>Property Number</h1>
          </div>
          <div>
            <div>
              <input type="number" />
            </div>
          </div>
        </div>
        <!-- input block -->
        <div class="features-section">
          <div class="features-head">
            <h6>Property Status</h6>
          </div>
          <div class="features-list">
            <FeatureBox :name="'Direct to Owner'" />
            <FeatureBox :name="'Bayana'" />
            <FeatureBox :name="'Ndc applied'" />
            <FeatureBox :name="'Possession'" />
            <FeatureBox :name="'Non-Possession'" />
            <FeatureBox :name="'Army update'" />
            <FeatureBox :name="'All Paid'" />
            <FeatureBox :name="'File'" />
            <FeatureBox :name="'Others'" />
          </div>
        </div>
        <section class="btn-section">
          <button class="btn">Search</button>
        </section>
      </section>
    </section>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import FeatureBox from "@/components/common/FeatureBox.vue";
import TypeAndSubtype from "@/components/common/TypeAndSubtype.vue";
import BlueHead from "@/components/common/BlueHeader.vue";
import DetailNumbers from "@/components/common/DetailNumbers.vue";
export default {
  name: "SearchView",
  components: {
    DefaultLayout,
    FeatureBox,
    TypeAndSubtype,
    BlueHead,
    DetailNumbers,
  },
  data() {
    return {
      images: {},
      image: [],
      category: "buy",
      dropdownCities: false,
      city: "",
      typeData: [
        { type: "Plot", icon: "bath.png" },
        { type: "Home", icon: "bed.png" },
        { type: "Commercial", icon: "bath.png" },
        { type: "Farm House", icon: "bath.png" },
      ],
      subTypeData: [
        { type: "Residential", icon: "bath.png" },
        { type: "Commercial", icon: "bed.png" },
        { type: "Agricultural", icon: "bed.png" },
        { type: "Plot", icon: "bath.png" },
        { type: "Plot", icon: "bath.png" },
        { type: "Plot", icon: "bed.png" },
        { type: "Plot", icon: "bath.png" },
        { type: "Plot", icon: "bath.png" },
        { type: "Plot", icon: "bath.png" },
      ],
      floorData: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15+",
      ],
      bedRooms: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      bathRooms: ["1", "2", "3", "4", "5", "6", "7", "8"],
    };
  },
  methods: {
    imagesAdd(e) {
      var files = e.target.files || e.dataTransfer.files;
      this.images = [];
      Array.prototype.push.apply(this.images, files);
      if (!this.images.length) return;
      this.createImage(this.images);
    },
    createImage(file) {
      for (var i = 0; i < file.length; i++) {
        var reader = new FileReader();
        var vm = this;
        reader.onload = (e) => {
          vm.image.push(e.target.result);
          console.log(vm.image);
        };
        reader.readAsDataURL(file[i]);
      }
    },
    removeImage(key) {
      this.image.splice(key, 1);
      this.images.splice(key, 1);
      if (!this.image.length) {
        this.$refs.im.value = "";
      }
    },
    openDropdown() {
      this.dropdownCities = true;
    },
    closeDropdown() {
      this.dropdownCities = false;
    },
    selectedCity(city) {
      this.city = city;
      this.dropdownCities = false;
    },
    typeSelect(type) {
      this.category = type;
    },
  },
};
</script>
<style scoped>
.toggle-buttons {
  margin-top: 30px;
  width: max-content;
  box-shadow: 2px 4px 7px 0px #40404057;
  border-radius: 40px;
  overflow: hidden;
}
.toggle-buttons .btn {
  border-radius: 40px;
  background: #fff;
  color: #000;
  font-weight: bold;
  font-size: 14px;
  transition: 0.8s;
}
.toggle-buttons .btn.active {
  background: #07abd3;
  color: #fff;
}
.main-inputs {
  margin: 30px 0;
}
/* features-section start */
.features-section .features-head h6 {
  color: #000;
  font-size: 16px;
}
.features-section .features-head {
  padding: 14px 0 18px 0;
}
.features-list {
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
}
.features-list > div {
  margin-right: 18px;
  margin-bottom: 18px;
}
.check-buttons > div {
  display: flex;
  align-items: center;
}
.check-buttons input {
  outline: none;
  font-size: 14px;
  min-width: 140px;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 5px;
  border: 1px solid gray;
  border-radius: 6px;
}
.property-number input {
  min-width: 383px;
}
.check-buttons .mid-to {
  margin: 0 10px;
}
.check-buttons .title {
  padding: 14px 0 18px 0;
}
.check-buttons .title h1,
.area-detail .title h1 {
  color: #000;
  font-size: 16px;
}
.range-section {
  display: flex;
}
.range-section > div:nth-child(2) {
  margin-left: 60px;
}
.city-block .title {
  padding: 14px 0 18px 0;
}
.check-buttons .area {
  font-size: 14px;
  min-width: 140px;
  border: none;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 5px;
  outline: none;
  margin-left: 10px;
  border: 1px solid gray;
  border-radius: 6px;
}
.area-input {
  position: relative;
  width: 36%;
}
.area-input .dropdown {
  position: absolute;
  background: #fff;
  padding: 0px;
  z-index: 2;
  width: 99%;
  border: 1px solid #eee;
}
.area-input input {
  outline: none;
  font-size: 14px;
  min-width: 383px;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 5px;
  border: 1px solid gray;
  border-radius: 6px;
}
.area-detail {
  margin-top: 20px;
}
.address-block {
  display: flex;
  flex-wrap: wrap;
}
.address-block .check-buttons {
  margin: 20px 80px 0px 0;
}
.address-block .check-buttons input {
  min-width: 190px;
}
.city-search {
  background: #fff;
  padding: 10px;
}
.city-search input {
  outline: none;
  font-size: 12px;
  border: 1px solid #333;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 5px;
  border-radius: 20px;
  color: #3333;
  background: #eee;
  min-width: 100% !important;
}
.city-list {
  overflow: scroll;
  height: 400px;
}
.city-list ul {
  padding: 0 10px;
}
.city-list::-webkit-scrollbar {
  display: none;
}

.city-list {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.city-list ul li:first-child {
  font-weight: 600;
  padding: 10px 0;
}
.city-list ul li {
  font-size: 14px;
  color: #000;
  padding: 10px;
}
.features-section {
  margin: 30px 0;
}
.btn-section {
  display: flex;
  justify-content: center;
  margin: 16px 0 50px 0;
}
.btn-section .btn {
  padding: 16px 0px;
  color: #fff;
  border-radius: 40px;
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
  font-size: 14px;
  min-width: 331px;
}
</style>