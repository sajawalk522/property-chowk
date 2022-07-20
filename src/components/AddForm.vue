<template>
  <section class="container">
    <div class="add-banner">
      <img src="../assets/images/970x90.png" alt />
    </div>
    <BlueHead :title="'Add Properties'" />
    <div class="filter-main">
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
        <!-- toggle button  start -->
        <section class="toggle-option">
          <div class="toggle-btn">
            <div>
              <h1>Feature Property?</h1>
            </div>
            <div>
              <label class="switch">
                <input type="checkbox" v-model="toggelButton" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="option-featured" v-if="toggelButton">
            <div>
              <h2>Featured</h2>
            </div>
            <div class="selection-btn">
              <div>
                <h2>{{ info.hot_ads ? info.hot_ads : 0 }} left</h2>
                <button
                  :disabled="!info.hot_ads"
                  :class="{ active: hotAds == 'h' }"
                  @click="hotAdd('h')"
                >Hot</button>
              </div>
              <div>
                <h2>{{ info.superhot_ads ? info.superhot_ads : 0 }} left</h2>
                <button
                  :disabled="!info.superhot_ads"
                  :class="{ active: hotAds == 'sh' }"
                  @click="hotAdd('sh')"
                >Super Hot</button>
              </div>
            </div>
          </div>
        </section>
        <!-- toggle button  end -->
        <TypeAndSubtype
          title="Property type"
          :types="typeData"
          @selected="propertyTypeSelected"
          propertyType="property"
        />
        <TypeAndSubtype
          title="Property Sub type"
          :types="subTypeData[subTypecat].propertySubType"
          @selected="propertyTypeSelected"
          propertyType="subtype"
        />
        <!-- area detail -->
        <section class="area-detail">
          <!-- block of code -->
          <div class="city-block">
            <div class="title">
              <h1>City</h1>
            </div>
            <div class="area-input" id="input">
              <div>
                <input type="text" v-model="finalData.city" @focus="openDropdown" />
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
        <div>
          <section class="address-block">
            <section class="area-detail">
              <!-- block of code -->
              <div class="city-block">
                <div class="title">
                  <h1>Society</h1>
                </div>
                <div class="area-input" id="input-society">
                  <div>
                    <div class="dropdown-menu" @click="openDropdownSociety">{{ finalData.society }}</div>
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
            <div class="check-buttons">
              <div class="title">
                <h1>Phase</h1>
              </div>
              <div>
                <div>
                  <input type="text" v-model="finalData.phase" />
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
                  <input type="text" v-model="finalData.block" />
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
                  <input type="text" v-model="finalData.sector" />
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
                  <input type="text" v-model="finalData.road" />
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
                  <input type="text" v-model="finalData.street" />
                </div>
              </div>
            </div>
            <!-- input block -->
          </section>
        </div>
        <!-- area detail -->
        <!-- input block -->
        <div>
          <div class="check-buttons property-inputs">
            <div class="title">
              <h1>Property Number</h1>
            </div>
            <div>
              <div>
                <input type="text" v-for="(n, key) in showInputs" :key="key" />
              </div>
            </div>
          </div>
          <!-- input block -->
          <div class="propertynumber">
            <RadioBox :name="'Pair'" @selected="numberSize" :value="2" />
            <RadioBox :name="'Triple'" @selected="numberSize" :value="3" />
            <RadioBox :name="'Tetra'" @selected="numberSize" :value="4" />
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
              <input type="number" v-model="finalData.area" @change="onChangeSize($event)" />
            </div>
            <div>
              <select class="area" @change="onChange($event)">
                <option selected>Marla</option>
                <option>Kanal</option>
                <option>Acre</option>
                <option>Yard</option>
                <option>sq.ft</option>
              </select>
            </div>
          </div>
        </div>
        <!-- input block -->
        <!-- input block -->
        <div class="check-buttons property-number">
          <div class="title">
            <h1>Price(RS)</h1>
          </div>
          <div>
            <div>
              <input type="number" v-model="finalData.price" />
            </div>
          </div>
        </div>
        <!-- input block -->
        <div class="check-buttons property-number">
          <div class="title">
            <h1>Property Title</h1>
          </div>
          <div>
            <div>
              <input type="text" v-model="finalData.property_title" />
            </div>
          </div>
        </div>
        <!-- input block -->
        <!-- input block -->
        <div class="check-buttons property-number">
          <div class="title">
            <h1>Property Description</h1>
          </div>
          <div>
            <div>
              <input type="text" v-model="finalData.description" />
            </div>
          </div>
        </div>
        <!-- input block -->
        <!-- input block -->
        <div class="features-section">
          <div class="features-head">
            <h6>Property Status</h6>
          </div>
          <div class="features-list">
            <FeatureBox :name="'Direct to Owner'" @selected="propertyStatus" :type="'status'" />
            <FeatureBox :name="'Bayana'" @selected="propertyStatus" :type="'status'" />
            <FeatureBox :name="'Ndc applied'" @selected="propertyStatus" :type="'status'" />
            <FeatureBox :name="'Possession'" @selected="propertyStatus" :type="'status'" />
            <FeatureBox :name="'Non-Possession'" @selected="propertyStatus" :type="'status'" />
            <FeatureBox :name="'Army update'" @selected="propertyStatus" :type="'status'" />
            <FeatureBox :name="'All Paid'" @selected="propertyStatus" :type="'status'" />
            <FeatureBox :name="'File'" @selected="propertyStatus" :type="'status'" />
            <FeatureBox :name="'Others'" @selected="propertyStatus" :type="'status'" />
          </div>
        </div>
        <!-- add featured -->
        <div class="features-section">
          <div class="features-head">
            <h6>Add Features</h6>
          </div>
          <div class="features-list">
            <FeatureBox :name="'Gas'" @selected="propertyStatus" :type="'property_features'" />
            <FeatureBox :name="'Corner'" @selected="propertyStatus" :type="'property_features'" />
            <FeatureBox
              :name="'Facing Park'"
              @selected="propertyStatus"
              :type="'property_features'"
            />
            <FeatureBox
              :name="'Electricity'"
              @selected="propertyStatus"
              :type="'property_features'"
            />
            <FeatureBox
              :name="'Near Hospital'"
              @selected="propertyStatus"
              :type="'property_features'"
            />
            <FeatureBox :name="'Main Road'" @selected="propertyStatus" :type="'property_features'" />
            <FeatureBox :name="'Sewerage'" @selected="propertyStatus" :type="'property_features'" />
            <FeatureBox
              :name="'Boundary Wall'"
              @selected="propertyStatus"
              :type="'property_features'"
            />
            <FeatureBox
              :name="'Near Airport'"
              @selected="propertyStatus"
              :type="'property_features'"
            />
            <FeatureBox
              :name="'Near School'"
              @selected="propertyStatus"
              :type="'property_features'"
            />
            <FeatureBox :name="'Near Park'" @selected="propertyStatus" :type="'property_features'" />
            <FeatureBox
              :name="'Near Masjid'"
              @selected="propertyStatus"
              :type="'property_features'"
            />
            <FeatureBox
              :name="'Near Market'"
              @selected="propertyStatus"
              :type="'property_features'"
            />
          </div>
        </div>
        <section class="media">
          <!-- img-bock -->
          <h6>Upload Media</h6>
          <div class="media-inner">
            <!-- <progress :value="progress" max="100" /> -->
            <div class="palceholder-container">
              <label for="inputTag">
                <div class="img-place">
                  <img src="../assets/images/placeholder-image.png" />
                </div>
                <p>Select Image</p>
                <input
                  id="inputTag"
                  type="file"
                  @change="handleChange"
                  accept="image/png, image/gif, image/jpeg"
                  multiple
                />
              </label>
            </div>

            <div class="media-img">
              <div class="primary-img" v-for="(img, key) in previewImage" :key="key">
                <img class="img-pre" :src="img" />
                <button v-show="previewImage" @click="removeImage(key)">X</button>
              </div>
            </div>
          </div>

          <!-- img-bock end -->
        </section>
        <div>
          <!-- video -->
          <section class="media">
            <!-- img-bock -->
            <h6>Upload Media</h6>
            <div class="media-inner">
              <!-- <progress :value="progress" max="100" /> -->
              <div class="palceholder-container">
                <label for="inputVid">
                  <div class="img-place">
                    <img src="../assets/images/placeholder-video.png" />
                  </div>
                  <p>Select video</p>
                  <input
                    id="inputVid"
                    type="file"
                    accept="video/mp4, video/x-m4v, video/*"
                    @change="handleChangeV"
                  />
                </label>
              </div>
              <div class="media-img">
                <div
                  class="videoThumbnail"
                  v-for="(v, vd) in previewVideo"
                  :key="vd"
                  :style="`background-image: url(${v})`"
                ></div>
                <button v-show="previewVideo.length" @click="removeImage(key, 'vi')">X</button>
              </div>
            </div>
            <!-- img-bock end -->
          </section>
          <!-- basic info seciton -->
          <section>
            <!-- input block -->
            <div class="check-buttons property-number">
              <div class="features-head">
                <h6>Basic Contact info</h6>
              </div>
              <div class="title">
                <h1>Name</h1>
              </div>
              <div>
                <div>
                  <input type="text" v-model="basicData.name" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons property-number">
              <div class="title">
                <h1>Email</h1>
              </div>
              <div>
                <div>
                  <input type="text" v-model="basicData.email" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons property-number">
              <div class="title">
                <h1>Estate Name</h1>
              </div>
              <div>
                <div>
                  <input type="text" v-model="basicData.eState" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons property-number">
              <div class="title">
                <h1>Phone Number</h1>
              </div>
              <div>
                <div>
                  <input type="number" v-model="basicData.number" />
                </div>
              </div>
            </div>
            <!-- input block -->
            <!-- input block -->
            <div class="check-buttons property-number">
              <div class="title">
                <h1>Optional Phone Number</h1>
              </div>
              <div>
                <div>
                  <input type="number" v-model="finalData.optional_number" />
                </div>
              </div>
            </div>
            <!-- input block -->
          </section>
          <!-- basic info seciton -->
          <GoogleMap @latlng="latLng" />
        </div>
        <section class="btn-section">
          <button class="btn" :disabled="loading" @click="submit()">{{!loading ? 'Submit': 'Loading...'}} </button>
        </section>
      </section>
      <section class="add-right">
        <div class="add-section">
          <img src="../assets/images/160x600.png" alt />
        </div>
        <!-- <div class="add-section">
          <img src="../assets/images/250x250.png" alt />
        </div>
        <div class="add-section">
          <img src="../assets/images/300x600.png" alt />
        </div>
        <div class="add-section">
          <img src="../assets/images/250x250.png" alt />
        </div> -->
      </section>
    </div>
  </section>
</template>
<script>
import firebase from "../firebase";
import FeatureBox from "@/components/common/FeatureBox.vue";
import RadioBox from "@/components/common/RadioBox.vue";
import TypeAndSubtype from "@/components/common/TypeAndSubtype.vue";
import BlueHead from "@/components/common/BlueHeader.vue";
import GoogleMap from "./googleMap.vue";
import propertyServices from "../services/PropertiesServices";
const ref = firebase.storage();
export default {
  name: "SearchView",
  components: {
    FeatureBox,
    TypeAndSubtype,
    BlueHead,
    RadioBox,
    GoogleMap
  },
  data() {
    return {
      loading:false,
      hotAds: null,
      search: "",
      searchSociety: "",
      finalData: {},
      showInputs: 1,
      toggelButton: false,
      previewImage: [],
      previewVideo: [],
      images: [],
      video: "",
      progress: 0,
      category: "buy",
      dropdownCities: false,
      dropdownSociety: false,
      society: {},
      city: "",
      subTypecat: 0,
      // cities
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
      basicData: {}
    };
  },
  mounted() {
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
    // map location
    latLng(loc) {
      this.finalData.latitude = loc.lat;
      this.finalData.longitude = loc.lng;
      console.log(loc);
    },
    // map location
    hotAdd(v) {
      this.hotAds = v;
      if (v == "h") {
        this.finalData.hot_ads = true;
        delete this.finalData.superhot_ads;
      } else {
        this.finalData.superhot_ads = true;
        delete this.finalData.hot_ads;
      }
    },
    propertyStatus(v) {
      if (!this.finalData[v.type]) {
        this.finalData[v.type] = [];
      }
      if (!v.isAdd) {
        this.finalData[v.type] = this.finalData[v.type].filter(val => {
          return val != v.status;
        });
      } else {
        this.finalData[v.type].push(v.status);
      }
    },
    onChange(event) {
      this.finalData.area_type = event.target.value;
    },
    onChangeSize(event) {
      this.finalData.area = event.target.value;
      if (!this.finalData.area_type) {
        this.finalData.area_type = "Marla";
      }
    },
    numberSize(v) {
      this.showInputs = v.value;
    },
    propertyTypeSelected(v) {
      if (v.propertyType == "property") {
        this.subTypecat = v.id;
        this.finalData.property_type = v.value;
      } else {
        this.finalData.sub_type = v.value;
      }
    },
    handleChange(e) {
      for (let i = 0; i < e.target.files.length; i++) {
        const newImage = e.target.files[i];
        newImage["id"] = Math.random();
        this.images = [...this.images, newImage];
        // selected file read
        var reader = new FileReader();
        reader.onload = e => {
          this.previewImage.push(e.target.result);
        };
        reader.readAsDataURL(e.target.files[i]);
      }
    },
    removeImage(key, video) {
      if (!video) {
        this.previewImage.splice(key, 1);
        this.images.splice(key, 1);
      } else {
        this.previewVideo = [];
        this.video = [];
      }
    },
    handleChangeV(e) {
      const newVid = e.target.files[0];
      this.getVideoCover(e.target.files[0]);
      if (newVid) {
        this.video = newVid;
      }
    },
    getVideoCover(file, seekTo = 0.0) {
      return new Promise((resolve, reject) => {
        // load the file to a video player
        const videoPlayer = document.createElement("video");
        videoPlayer.setAttribute("src", URL.createObjectURL(file));
        videoPlayer.load();
        videoPlayer.addEventListener("error", ex => {
          reject("error when loading video file", ex);
        });
        videoPlayer.addEventListener("loadedmetadata", () => {
          if (videoPlayer.duration < seekTo) {
            reject("video is too short.");
            return;
          }
          // delay seeking or else 'seeked' event won't fire on Safari
          setTimeout(() => {
            videoPlayer.currentTime = seekTo;
          }, 200);
          // extract video thumbnail once seeking is complete
          videoPlayer.addEventListener("seeked", () => {
            const canvas = document.createElement("canvas");
            canvas.width = videoPlayer.videoWidth;
            canvas.height = videoPlayer.videoHeight;
            // draw the video frame to canvas

            const ctx = canvas.getContext("2d");
            ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
            const imageUrl = canvas.toDataURL("image/png");
            this.previewVideo.push(imageUrl);
          });
        });
      });
    },
    validateInputs() {
      var verify = this.finalData;
      if (!verify.property_type) {
        this.finalData.property_type = "Plot";
      }
      if (!verify.sub_type) {
        // alert("please select sub Type");
        this.$swal({
          icon: "error",
          title: "Please Select Sub Type",
          showConfirmButton: false,
          timer: 3000
        });
        return;
      }
      if (!verify.city) {
        // alert("please select city");
        this.$swal({
          icon: "error",
          title: "Please Select City",
          showConfirmButton: false,
          timer: 3000
        });
        return;
      }
      if (this.society.society.length > 0) {
        if (!verify.society) {
          // alert("please select society");
          this.$swal({
            icon: "error",
            title: "Please Select Society",
            showConfirmButton: false,
            timer: 3000
          });
          return;
        }
      }
      if (!verify.area) {
        // alert("please select area");
        this.$swal({
          icon: "error",
          title: "Please Select Area",
          showConfirmButton: false,
          timer: 3000
        });
        return;
      }
      if (!verify.price) {
        // alert("please select price");
        this.$swal({
          icon: "error",
          title: "Please Select Price",
          showConfirmButton: false,
          timer: 3000
        });
        return;
      }
      if (!verify.property_title) {
        // alert("please select Title");
        this.$swal({
          icon: "error",
          title: "Please Select Title",
          showConfirmButton: false,
          timer: 3000
        });
        return;
      }
      return true;
    },
    submit() {
      if (!this.validateInputs()) return;
      const promises = [];
      if (this.images) {
        this.images.map(image => {
          const refTask = ref.ref(`${image.name}`).put(image);
          promises.push(refTask);
          refTask.on(
            `state-change`,
            snapshot => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              this.progress = progress;
            },
            error => {
              console.log(error);
            },
            async () => {
              await refTask.snapshot.ref.getDownloadURL().then(url => {
                if (!this.finalData.images) {
                  this.finalData.images = [];
                }
                this.finalData.images = [...this.finalData.images, url];
              });
            }
          );
        });
      }
      if (this.video) {
        const refTask = ref.ref(`${this.video.name}`).put(this.video);
        promises.push(refTask);
        refTask.on(
          `state-change`,
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.progress = progress;
          },
          error => {
            console.log(error);
          },
          async () => {
            await refTask.snapshot.ref.getDownloadURL().then(url => {
              if (!this.finalData.video) {
                this.finalData.video = "";
              }
              this.finalData.video = url;
            });
          }
        );
      }
      this.loading = true;
      Promise.all(promises)
        .then(() => { 
          propertyServices
            .create(this.finalData)
            .then(() => {
              console.log("Created new item successfully!");
              this.$swal({
                icon: "success",
                title: "Created new item successfully!",
                showConfirmButton: false,
                timer: 3000
              });
              this.$router.push("/");
            })
            .catch(e => {
               this.loading = false;
              console.log(e);
            });
        })
        .catch(error => {
          this.loading = false;
          console.log(error);
        });
    },
    openDropdown() {
      this.dropdownCities = true;
    },
    openDropdownSociety() {
      if (!this.finalData.city) {
        // alert("please select city before");
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
    closeDropdown() {
      this.dropdownCities = false;
    },
    selectedCity(city) {
      this.society = city;
      this.finalData.city = city.name;
      this.dropdownCities = false;
    },
    selectedSociety(society) {
      this.finalData.society = society;
      this.dropdownSociety = false;
    },
    typeSelect(type) {
      this.category = type;
    },
    addBasicData() {
      const { name, email, estate_name, phone_number, id } = this.info;
      this.basicData.name = name;
      this.basicData.email = email;
      this.basicData.eState = estate_name;
      this.basicData.number = phone_number;
      this.finalData.seller_id = id;
    }
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
    info() {
      return this.$store.state.userInfo;
    }
  },
  watch: {
    info: {
      handler: function() {
        this.addBasicData();
      },
      immediate: true
    }
  }
};
</script>
<style scoped>
.filter-main{
  display: flex;
  flex-wrap: wrap;
}
.filter-search {
  width: 75%;
}
.add-right {
  width: 25%;
}
.add-section {
  margin-top: 10px;
}
.add-section img {
  width: 100%;
  height: 100%;
}
.add-banner {
  margin: 5px 0 15px 0;
}
.add-banner img {
  width: 100%;
  height: 100%;
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
/* toggle option */
.toggle-option .toggle-btn {
  display: flex;
  width: 30%;
  justify-content: space-between;
  margin: 20px 0 0 0;
  align-items: center;
}
.toggle-option .switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
}
.toggle-option .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.option-featured {
  background: #07abd3;
  padding: 10px;
  margin-top: 20px;
}
.option-featured h2 {
  font-size: 16px;
}
.option-featured .selection-btn {
  display: flex;
}
.option-featured .selection-btn h2 {
  text-align: center;
  padding: 14px 0;
}
.option-featured .selection-btn button {
  background: #fff;
  border: none;
  min-width: 200px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid transparent;
}
.option-featured .selection-btn button.active {
  border: 1px solid green;
  color: green;
}
.toggle-option .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.toggle-option .slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.toggle-option input:checked + .slider {
  background-color: #2196f3;
}
.toggle-option input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}
.toggle-option input:checked + .slider:before {
  -webkit-transform: translateX(25px);
  -ms-transform: translateX(25px);
  transform: translateX(25px);
}
/* Rounded sliders */
.toggle-option .slider.round {
  border-radius: 34px;
}
.toggle-option .slider.round:before {
  border-radius: 50%;
}
/* toggle option */

/* features-section start */
.features-head h6 {
  color: #000;
  font-size: 16px;
}
.features-head {
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
#input-society {
  width: 100% !important;
}
#input-society .dropdown {
  width: 72% !important;
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
.check-buttons {
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
  min-width: 97% !important;
}
.city-list {
  overflow: scroll;
  max-height: 400px;
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
  cursor: pointer;
}
.features-section {
  margin: 20px 0;
}
.btn-section {
  display: flex;
  justify-content: center;
  margin: 50px 0 50px 0;
}
.btn-section .btn {
  padding: 16px 0px;
  color: #fff;
  border-radius: 40px;
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
  font-size: 14px;
  min-width: 331px;
}
.media-inner {
  display: flex;
  margin-right: 15px;
}
.media h6 {
  color: #000;
  font-size: 16px;
  padding: 15px 0;
}
.media p {
  color: #000;
  font-size: 14px;
  padding: 10px 0;
  text-align: center;
  font-weight: 500;
}
.img-place {
  width: 200px;
  height: 150px;
  background: #eee;
}
.img-place img {
  width: 100%;
  height: 100%;
}
.media input {
  display: none;
}
.media-img {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.palceholder-container {
  width: 200px;
  margin-right: 15px;
}
.media-img .primary-img {
  position: relative;
  border-radius: 20px;
  width: 200px;
  height: 150px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.media-img .primary-img img {
  width: 100%;
  height: 100%;
}
.media-img button {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 7px 10px;
  border-radius: 50px;
}
.videoThumbnail {
  width: 200px;
  height: 150px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.propertynumber {
  display: flex;
  margin-top: 10px;
}
.propertynumber > div {
  margin-right: 10px;
}
.property-inputs input {
  margin-right: 10px;
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