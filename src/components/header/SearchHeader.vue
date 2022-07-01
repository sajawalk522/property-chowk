<template>
  <section>
    <div class="container">
      <div class="main-container">
        <div class="main-primary">
          <div class="search-header">
            <h1>Search Properties in Pakistan</h1>
            <h2>Find the best properties rates in Pakistan</h2>
          </div>
          <section class="search">
            <div class="header-buttons">
              <button
                :class="['btn', { active: type == 'buy' }]"
                @click="selectedType('buy')"
              >
                Buy
              </button>
              <!-- <button
                :class="['btn', { active: type == 'sell' }]"
                @click="selectedType('sell')"
              >
                Sell
              </button> -->
              <button
                :class="['btn', { active: type == 'rent' }]"
                @click="selectedType('rent')"
              >
                Rent
              </button>
            </div>
            <div class="checkboxes">
              <div class="location">
                <SelectBox
                  category="City"
                  :dataInput="cities"
                  @selected="selectedValues"
                />
                <div class="main-location">
                  <div class="location-search">
                    <label>location</label>
                    <input type="text" name="location" v-model="location" />
                  </div>
                  <div class="search-btn" @click="goToSlug()">
                    <button>
                      <router-link to="search">
                        <img src="../../assets/images/search.svg" alt="" />
                      </router-link>
                      <!-- <span>Search</span> -->
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="checkboxes">
              <div class="all-boxes">
                <SelectBox
                  category="Property Type"
                  :dataInput="propertyType"
                  @selected="selectedValues"
                />
                <SelectBox
                  category="Society"
                  :dataInput="society"
                  :selectors="citySelected"
                  @selected="selectedValues"
                />
                <RangeBox category="Price Range" @selected="selectedValues" />
                <AreaBox category="Area" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SelectBox from "../common/SelectBox.vue";
import RangeBox from "../common/RangeBox.vue";
import AreaBox from "../common/AreaRangeBox.vue";
export default {
  data() {
    return {
      type: "buy",
      location: "",
      showBox: "",
      citySelected: true,
      search: {},
      // input data
      cities: [
        {
          name: "Islamabad",
          society: [
            { name: "7th Avenue" },
            { name: "9th Avenue" },
            { name: "D-12" },
          ],
        },
        {
          name: "Karachi",
          society: [
            { name: "k7th Avenue" },
            { name: "k9th Avenue" },
            { name: "kD-12" },
          ],
        },
        {
          name: "Lahore",
          society: [
            { name: "l7th Avenue" },
            { name: "l9th Avenue" },
            { name: "lD-12" },
          ],
        },
      ],
      society: [],
      propertyType: [
        { name: "Home" },
        { name: "Plot" },
        { name: "Commercial Farm House" },
      ],
    };
  },
  methods: {
    selectedType(type) {
      this.type = type;
    },
    selectedValues(values) {
      if (values.category == "City") {
        this.search.city = values;
        var filterSociety = this.cities.filter((v) => {
          return v.name == values.name;
        });
        this.society = filterSociety[0].society;
        this.citySelected = false;
      } else if (values.category == "Property Type") {
        this.search.ptype = values;
      } else if (values.category == "Society") {
        this.search.society = values;
      } else if (values.category == "price") {
        // console.log(values)
        this.search.price = values;
      }
    },
    goToSlug() {
      // console.log(this.search);
      // var url = "?";
      // Object.keys(this.search).forEach((e) => {
      //   if (this.search[e] && this.search[e].category !== "undefined")
      //     url += `${this.search[e].category.toLowerCase().replace(/\s/g, "")}=${
      //       this.search[e].name
      //     }&`;
      // });
      // if (this.location) {
      //   url += `location=${this.location}`;
      // }
      // console.log(url);
    },
  },
  components: {
    SelectBox,
    RangeBox,
    AreaBox,
  },
};
</script>
<style scoped>
.checkboxes {
  margin-top: 20px;
}
.main-container {
  padding: 10px 0;
}
.main-container .search-header h1 {
  font-size: 60px;
}
.main-container .search-header h2 {
  font-size: 28px;
}
.main-container .search-header h1,
h2 {
  color: #fff;
}
.main-container .search-header {
  line-height: 1.5;
  margin-top: 40px;
}
.main-container .search {
  padding: 18px 24px 28px 24px;
  background: #0a1023ad;
  margin-top: 30px;
}
.main-container .search .btn {
  color: #fff;
  background: transparent;
  padding: 10px 14px;
  margin-right: 16px;
  font-size: 16px;
}
.main-container .search .btn.active {
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
}
.location {
  display: flex;
}
.main-location {
  display: flex;
  width: 85%;
}
.location-search {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  padding: 13px 10px 10px 22px;
  position: relative;
}
.location-search:before {
  position: absolute;
  content: "";
  height: 50px;
  background-color: #ebebeb;
  width: 1px;
  top: 16px;
  left: -1px;
}
.location-search input[type="text"] {
  height: 100%;
  border: none;
  color: #707070;
}
.location-search input[type="text"]:focus {
  border: none;
  outline: none;
}
.search-btn button {
  height: 100%;
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
  color: #fff;
  padding: 10px 40px;
}
.search-btn button img {
  width: 75px;
}
.all-boxes {
  display: flex;
  justify-content: space-between;
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .main-container {
    padding: 10px;
  }
  .main-container .search-header h1 {
    font-size: 26px;
  }
  .main-container .search-header h2 {
    font-size: 16px;
  }
  .main-container .search-header {
    margin-top: 20px;
  }
  .main-container .search .btn {
    padding: 5px 10px;
    font-size: 12px;
  }
  .main-container .drop-down select {
    font-size: 12px;
  }
  .main-container .search {
    padding: 10px 10px 10px 10px;
  }
  .all-boxes {
    flex-wrap: wrap;
  }
  .range {
    width: 36%;
  }
  .all-boxes > div:nth-child(4) {
    width: 100%;
    margin: 10px 0;
  }
  .all-boxes > div:nth-child(3) {
    margin-top: 10px;
  }
  .all-boxes > div:nth-child(2) {
    width: 45%;
  }
  .main-location {
    width: 64%;
    justify-content: space-between;
  }
  .drop-down {
    width: 36%;
    padding: 10px 10px;
  }
  .search .location .drop-down {
    width: 30%;
  }
  .search .checkboxes {
    margin-top: 10px;
  }
  .main-location .location-search {
    width: 39%;
    justify-content: space-between;
  }
  .search-btn button {
    padding: 10px 12px;
  }
}
</style>