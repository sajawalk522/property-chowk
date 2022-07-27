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
    </div>-->
    <section class="container">
      <div class="add-banner">
        <img src="../assets/images/970x90.png" alt />
      </div>
      <BlueHead :title="'Filters'" />
      <section class="filter-search">
        <section>
          <div class="toggle-buttons">
            <button :class="['btn', { active: category == 'buy' }]" @click="typeSelect('buy')">Buy</button>
            <button
              :class="['btn', { active: category == 'rent' }]"
              @click="typeSelect('rent')"
            >Rent</button>
          </div>
        </section>
        <!-- toggle button  end -->
        <TypeAndSubtype
          title="Property type"
          :types="typeData"
          @selected="propertyTypeSelected"
          propertyType="property"
          :metaQuery="$route.query.property_type"
        />
        <TypeAndSubtype
          v-if="subTypecat >= 0"
          title="Property Sub type"
          :types="
            subTypeData[subTypecat] && subTypeData[subTypecat].propertySubType
          "
          @selected="propertyTypeSelected"
          propertyType="subtype"
          :metaQuery="$route.query.sub_type"
        />
        <!-- area detail -->
        <div class="main-inputs">
          <div class="range-section">
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Price</h1>
              </div>
              <div>
                <div>
                  <input
                    type="number"
                    placeholder="0"
                    v-model="filter.price"
                    @change="priceSelect($event)"
                  />
                </div>
                <div class="mid-to">to</div>
                <div>
                  <input
                    type="number"
                    placeholder="any"
                    v-model="filter.priceto"
                    @change="priceTo($event)"
                  />
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
                  <input type="number" v-model="filter.area" @change="onChange($event)" />
                </div>
                <div>
                  <select class="area" v-model="filter.area_type">
                    <option selected>Marla</option>
                    <option>Kanal</option>
                    <option>Acre</option>
                    <option>Yard</option>
                    <option>Sq.ft</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- input block -->
          </div>
          <!-- area detail -->
          <!-- area detail -->
          <section class="area-detail">
            <!-- block of code -->
            <div class="city-block">
              <div class="title">
                <h1>City</h1>
              </div>
              <div class="area-input" id="input">
                <div>
                  <input type="text" v-model="filter.city" @focus="openDropdown" />
                </div>
                <div class="dropdown" v-if="dropdownCities">
                  <div class="city-search">
                    <input type="text" v-model="search" placeholder="Search Location" />
                  </div>
                  <div class="city-list" v-if="!search">
                    <ul>
                      <li>Popular Cities</li>
                      <li
                        v-for="(popular, p) in cities"
                        @click="selectedCity(popular)"
                        :key="p"
                        v-show="popular.isPop"
                      >{{ popular.name }}</li>
                    </ul>
                    <ul>
                      <li>Other Cities</li>
                      <li
                        v-for="(other, index) in cities"
                        @click="selectedCity(other)"
                        :key="index"
                        v-show="!other.isPop"
                      >{{ other.name }}</li>
                    </ul>
                  </div>
                  <div class="city-list" v-else>
                    <ul>
                      <li
                        v-for="(search, s) in searchCities"
                        @click="selectedCity(search)"
                        :key="s"
                      >{{ search.name }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- block of code -->
          </section>
          <section class="address-block">
            <!-- input block -->
            <section class="area-detail">
              <!-- block of code -->
              <div class="city-block">
                <div class="title">
                  <h1>Society</h1>
                </div>
                <div class="area-input" id="input-society">
                  <div>
                    <div class="dropdown-menu" @click="openDropdownSociety">{{ filter.society }}</div>
                  </div>
                  <div class="dropdown" v-if="dropdownSociety">
                    <div class="city-search">
                      <input type="text" v-model="searchSociety" placeholder="Search Society" />
                    </div>
                    <div class="city-list" v-if="!searchSociety">
                      <ul>
                        <li
                          v-for="(society, p) in society.society"
                          @click="selectedSociety(society)"
                          :key="p"
                        >{{ society }}</li>
                      </ul>
                    </div>
                    <div class="city-list" v-else>
                      <ul>
                        <li
                          v-for="(search, s) in searchSocietyFilter"
                          @click="selectedSociety(search)"
                          :key="s"
                        >{{ search }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- block of code -->
            </section>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons">
              <div class="title">
                <h1>Phase</h1>
              </div>
              <div>
                <div>
                  <input type="text" v-model="filter.phase" />
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
                  <input type="text" v-model="filter.block" />
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
                  <input type="text" v-model="filter.sector" />
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
                  <input type="text" v-model="filter.road" />
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
                  <input type="text" v-model="filter.street" />
                </div>
              </div>
            </div>
            <!-- input block -->
          </section>
        </div>
        <!-- area detail -->
        <div class="main-inputs">
          <DetailNumbers
            :title="'Floor'"
            :data="floorData"
            @propertyDetail="propertyDetail"
            :metaData="$route.query.floor"
          />
          <DetailNumbers
            :title="'Bedrooms'"
            :data="bedRooms"
            @propertyDetail="propertyDetail"
            :metaData="$route.query.bedrooms"
          />
          <DetailNumbers
            :title="'Bathrooms'"
            :data="bathRooms"
            @propertyDetail="propertyDetail"
            :metaData="$route.query.bathrooms"
          />
        </div>
        <!-- input block -->
        <div class="check-buttons property-number">
          <div class="title">
            <h1>Property Number</h1>
          </div>
          <div>
            <div>
              <input type="text" @change="onPnumber($event)" />
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
          <button class="btn" @click="searchQuery">Search</button>
        </section>
      </section>
      <div v-if="filteredItems.length">
        <div ref="goDiv">
          <PropertyList :filteredItems="filteredItems" v-if="filteredItems.length" />
        </div>
        <paginate
          v-if="totalPages && filteredItems.length"
          :page-count="totalPages"
          :page-range="3"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        ></paginate>
      </div>
       <div class="card-skeleton" v-else>
        <div class="pro-skeleton">
          <CardSkeleton v-for="(skeleton, index) in skeleton" :key="index" />
        </div>
        <div class="ads-skeleton">
          <img src="../assets/images/250x250.png" alt />
        </div>
      </div>
    </section>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import FeatureBox from "@/components/common/FeatureBox.vue";
import TypeAndSubtype from "@/components/common/TypeAndSubtype.vue";
import BlueHead from "@/components/common/BlueHeader.vue";
import DetailNumbers from "@/components/common/DetailNumbers.vue";
import PropertyList from "@/components/PropertyList.vue";
import Paginate from "vuejs-paginate-next";
import CardSkeleton from "@/components/common/cardSkeleton.vue";
export default {
  name: "SearchView",
  components: {
    Paginate,
    DefaultLayout,
    FeatureBox,
    TypeAndSubtype,
    BlueHead,
    DetailNumbers,
    PropertyList,
    CardSkeleton
  },
  data() {
    return {
      skeleton: 9,
      // pagination
      totalPages: 0,
      // pagination
      filteredItems: [],
      images: {},
      image: [],
      category: "buy",
      dropdownCities: false,
      dropdownSociety: false,
      subTypecat: 0,
      society: {},
      // cities
      search: "",
      searchSociety: "",
      cities: [
        {
          name: "Islamabad",
          isPop: true,
          society: ["7th Avenue", "9th Avenue ", "D-12"]
        },
        {
          name: "Karachi",
          isPop: true,
          society: ["Bahria Town Karachi", "DHA"]
        },
        {
          name: "Lahore",
          isPop: true,
          society: []
        },
        {
          name: "Abbotabad",
          isPop: false,
          society: []
        },
        {
          name: "Abdu Hakim",
          isPop: false,
          society: []
        }
      ],
      typeData: [
        { type: "Plot", icon: "bath.png" },
        { type: "Home", icon: "bed.png" },
        { type: "Commercial", icon: "bath.png" },
        { type: "Farm House", icon: "bath.png" }
      ],
      subTypeData: [
        {
          propertySubType: [
            { type: "Residential", icon: "bath.png" },
            { type: "Commercial", icon: "bed.png" },
            { type: "Agricultural", icon: "bed.png" },
            { type: "Industrial", icon: "bath.png" },
            { type: "File", icon: "bath.png" },
            { type: "Plot Form", icon: "bed.png" }
          ]
        },
        {
          propertySubType: [
            { type: "House", icon: "bath.png" },
            { type: "Flat", icon: "bed.png" },
            { type: "Room", icon: "bed.png" },
            { type: "Penthouse", icon: "bath.png" }
          ]
        },
        {
          propertySubType: [
            { type: "Office", icon: "bath.png" },
            { type: "Shop", icon: "bed.png" },
            { type: "Warehouse", icon: "bed.png" },
            { type: "Factory", icon: "bath.png" },
            { type: "Building", icon: "bath.png" }
          ]
        },
        {
          propertySubType: [{ type: "Farm House", icon: "bath.png" }]
        }
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
        "15+"
      ],
      bedRooms: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      bathRooms: ["1", "2", "3", "4", "5", "6", "7", "8"],
      filter: {}
    };
  },
  computed: {
    searchCities() {
      var search = this.cities;
      return search.filter(city =>
        city.name.toLowerCase().startsWith(this.search.toLowerCase())
      );
    },
    searchSocietyFilter() {
      var search = this.society.society;
      return search.filter(city =>
        city.toLowerCase().startsWith(this.searchSociety.toLowerCase())
      );
    },
    properties() {
      return this.$store.state.properties;
    }
  },
  created() {
    this.filter = this.$route.query;
  },
  mounted() {
    if (this.filteredItems.length) {
      this.scrollToElement();
    }
    const clickAway = () => {
      this.dropdownCities = false;
    };
    const clickAwaySociety = () => {
      this.dropdownSociety = false;
    };
    var el = document.getElementById("input");
    var ele = document.getElementById("input-society");
    document.addEventListener("click", function(event) {
      var isClickInsideElement = el.contains(event.target);
      var society = ele.contains(event.target);
      if (!isClickInsideElement) {
        clickAway();
      }
      if (!society) {
        clickAwaySociety();
      }
    });
  },
  methods: {
    priceSelect(e) {
      this.filter.price = e.target.value;
    },
    priceTo(e) {
      this.filter.priceto = e.target.value;
    },
    onPnumber(e) {
      this.filter.property_number = e.target.value;
    },
    onChange(e) {
      this.filter.area = e.target.value;
    },
    clickCallback(pageNum) {
      this.constructURL(pageNum);
    },
    searchQuery() {
      this.constructURL();
    },
    constructURL(page) {
      var url = "";
      var fl = "";
      delete this.$route.query.page;
      if (!page) {
        fl = this.filter;
      } else {
        fl = this.$route.query;
      }
      Object.keys(fl).forEach(e => {
        if (fl[e] && fl[e] !== "undefined" && fl[e].length > 0)
          url += `${e}=${fl[e]}&`;
      });
      this.$router.push(`/search?${url}page=${page ? page : "1"}`);
      this.scrollToElement();
    },
    propertyDetail(detail) {
      var { type, value } = detail;
      if (type == "Floor") {
        return (this.filter.floor = value);
      } else if (type == "Bedrooms") {
        return (this.filter.bedrooms = value);
      } else if (type == "Bathrooms") {
        return (this.filter.bathrooms = value);
      }
    },
    propertyTypeSelected(v) {
      if (v.propertyType == "property") {
        this.subTypecat = v.id;
        if (v.value) {
          this.filter.property_type = v.value;
          delete this.filter.sub_type;
        }
      } else {
        this.filter.sub_type = v.value;
      }
    },
    openDropdownSociety() {
      if (!this.filter.city) {
        this.$swal({
          icon: "error",
          title: "Please Select City before",
          showConfirmButton: false,
          timer: 3000
        });
        return;
      }
      if (this.society.society.length) {
        this.dropdownSociety = true;
      }
    },
    selectedSociety(society) {
      this.filter.society = society;
      this.dropdownSociety = false;
    },
    scrollToElement() {
      const el = this.$refs.goDiv;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    openDropdown() {
      this.dropdownCities = true;
    },
    selectedCity(city) {
      this.society = city;
      this.filter.city = city.name;
      this.dropdownCities = false;
    },
    typeSelect(type) {
      this.category = type;
    },
    filterProperty() {
      var query = this.$route.query;
      var v = { ...query };
      var { page, price, priceto } = query;

      delete v.price;
      delete v.priceto;
      delete v.page;
      delete query.page;
      if (v.property_type == "Residential/commercial") {
        delete v.property_type;
      }

      var filtered = this.$store.state.properties.filter(function(item) {
        var x = item;
        for (var key in v) {
          if (x[key] === undefined || x[key] != v[key]) return false;
        }
        return true;
      });

      if (price && !priceto) {
        filtered = filtered.filter(item => {
          return item.price == parseInt(price);
        });
      }
      if (!price && priceto) {
        filtered = filtered.filter(item => {
          return item.price <= parseInt(priceto);
        });
      }
      if (price && priceto) {
        filtered = filtered.filter(item => {
          return (
            item.price >= parseInt(price) &&
            item.price <= parseInt(priceto)
          );
        });
      }
      if (v.property_type == "Residential/commercial") {
        filtered = filtered.filter(item => {
          return (
            item.property_type == "Residential" ||
            item.property_type == "Commercial"
          );
        });
      }

      // pagination
      this.totalPages = Math.round(filtered.length / 12);
      // pagination
      var copyFrom = (page - 1) * 12;
      var copyTo = page * 12;
      this.filteredItems = filtered.slice(copyFrom, copyTo);
    }
  },
  watch: {
    properties: {
      handler: function() {
        this.filterProperty();
      }
      // immediate: true,
    },
    "$route.query": {
      handler() {
        if (this.properties.length) {
          this.filterProperty();
        }
      },
      immediate: true
    }
  }
};
</script>
<style scoped>
.card-skeleton {
  display: flex;
  height: 100%;
}

.pro-skeleton {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 75%;
   height: 100%;
}
.ads-skeleton {
  width: 25%;
  margin-top: 25px;
}
.ads-skeleton img {
  width: 100%;
}
.add-banner {
  margin: 5px 0 15px 0;
}
.add-banner img {
  width: 100%;
  height: 100%;
   border: 1px solid #808080;
}
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
.dropdown-menu {
  min-width: 190px;
  border: 1px solid gray;
  height: 36px;
  border-radius: 6px;
  margin-right: 80px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
</style>