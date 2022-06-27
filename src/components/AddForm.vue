<template>
  <div>
    <form>
      <content-layout :title="'PROPERTY TYPE'">
        <div class="property-type perpose-container">
          <div class="purpose-section">
            <!-- check block -->
            <div>
              <div class="label">
                <h1>Property Purpose</h1>
              </div>
              <div class="check-buttons">
                <RadioBox :name="'Sell'" :inputfor="'purpose'" />
                <RadioBox :name="'Buy'" :inputfor="'purpose'" />
              </div>
            </div>
            <!-- check block -->
            <div>
              <div class="label">
                <h1>Featured Property</h1>
              </div>
              <div class="check-buttons">
                <RadioBox :name="'Hot'" :inputfor="'featured'" />
                <RadioBox :name="'Super Hot'" :inputfor="'featured'" />
              </div>
            </div>
            <!-- check block -->
            <div>
              <div class="label">
                <h1>Property Type</h1>
              </div>
              <div class="check-buttons">
                <RadioBox :name="'Home'" :inputfor="'Property Type'" />
                <RadioBox :name="'Plots'" :inputfor="'Property Type'" />
                <RadioBox :name="'Commercial'" :inputfor="'Property Type'" />
                <RadioBox :name="'Farm House'" :inputfor="'Property Type'" />
              </div>
            </div>
            <!-- check block -->
            <!-- check block -->
            <div>
              <div class="label">
                <h1>Property Sub Type</h1>
              </div>
              <div class="check-buttons">
                <RadioBox :name="'Residential'" :inputfor="'sub'" />
                <RadioBox :name="'Commercial'" :inputfor="'sub'" />
                <RadioBox :name="'Agricultural'" :inputfor="'sub'" />
                <RadioBox :name="'Industrial'" :inputfor="'sub'" />
                <RadioBox :name="'File'" :inputfor="'sub'" />
                <RadioBox :name="'Plot Form'" :inputfor="'sub'" />
              </div>
            </div>
            <!-- check block -->
          </div>
        </div>
      </content-layout>
      <content-layout :title="'PROPERTY LOCATION'">
        <div class="property-type all-form-mobile">
          <div class="purpose-section">
            <!-- block -->
            <div>
              <div class="label">
                <h1>City</h1>
              </div>
              <div class="check-buttons property-location">
                <input type="text" name="" id="" />
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Phase</h1>
              </div>
              <div class="check-buttons property-location">
                <input type="text" name="" id="" />
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Block</h1>
              </div>
              <div class="check-buttons property-location">
                <input type="text" name="" id="" />
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Sector</h1>
              </div>
              <div class="check-buttons property-location">
                <input type="text" name="" id="" />
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Road</h1>
              </div>
              <div class="check-buttons property-location">
                <input type="text" name="" id="" />
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Street</h1>
              </div>
              <div class="check-buttons property-location">
                <input type="text" name="" id="" />
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Property Number</h1>
              </div>
              <div class="check-buttons property-location">
                <input type="text" name="" id="" />
              </div>
            </div>
            <!-- block -->
            <!-- check block -->
            <div>
              <div class="label">
                <h1>Property Sub Type</h1>
              </div>
              <div class="check-buttons">
                <RadioBox :name="'Residential'" :inputfor="'pair'" />
                <RadioBox :name="'Commercial'" :inputfor="'pair'" />
                <RadioBox :name="'Agricultural'" :inputfor="'pair'" />
              </div>
            </div>
            <!-- check block -->
          </div>
        </div>
      </content-layout>
      <content-layout :title="'PROPERTY DETAILS'">
        <div class="property-type all-form-mobile">
          <div class="purpose-section">
            <!-- block -->
            <div>
              <div class="label">
                <h1>Property Status</h1>
              </div>
              <div class="check-buttons property-location property-detail">
                <select name="" id="">
                  <option value=""></option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Property Title</h1>
              </div>
              <div class="check-buttons property-location property-detail">
                <input type="text" name="" id="" />
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Property Description</h1>
              </div>
              <div class="check-buttons property-location property-detail">
                <textarea id="" name="" rows="" cols=""></textarea>
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Price</h1>
              </div>
              <div class="check-buttons range-input">
                <div>
                  <div>
                    <input type="number" name="" id="" />
                  </div>
                  <div class="mid-to">to</div>
                  <div>
                    <input type="number" name="" id="" />
                  </div>
                </div>
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Property Size</h1>
              </div>
              <div class="check-buttons">
                <div class="range-box">
                  <div class="range-area">
                    <input type="number" placeholder="0" />
                    <div class="area-unit">
                      <select>
                        <option selected>Marla</option>
                        <option>Kanal</option>
                      </select>
                    </div>
                  </div>
                  <div class="mid-to">to</div>
                  <div class="range-area">
                    <input type="number" placeholder="0" />
                    <div class="area-unit">
                      <select>
                        <option selected>Marla</option>
                        <option>Kanal</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- block -->
            <!-- check block -->
            <div class="mobile-features">
              <div class="label">
                <h1>Property Features</h1>
              </div>
              <div class="check-buttons features">
                <FeatureBox :name="'Gas'" />
                <FeatureBox :name="'Electricity'" />
                <FeatureBox :name="'Corner'" />
                <FeatureBox :name="'Near Masjid'" />
                <FeatureBox :name="'Lawn'" />
                <FeatureBox :name="'Near School'" />
                <FeatureBox :name="'Pool'" />
                <FeatureBox :name="'Tv Lounge'" />
                <FeatureBox :name="'Near Market'" />
                <FeatureBox :name="'Store Room'" />
                <FeatureBox :name="'Drawing Room'" />
                <featureBox :name="'Dining Room'" />
                <FeatureBox :name="'Laundry Room'" />
                <FeatureBox :name="'Kichen'" />
                <FeatureBox :name="'Balcony'" />
                <FeatureBox :name="'Near Park'" />
              </div>
            </div>
            <!-- check block -->
          </div>
        </div>
      </content-layout>
      <content-layout :title="'CONTACT INFORMATION'">
        <div class="property-type all-form-mobile">
          <div class="purpose-section">
            <!-- block -->
            <div>
              <div class="label">
                <h1>Name</h1>
              </div>
              <div class="check-buttons property-location">
                <input type="text" name="" id="" />
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Email</h1>
              </div>
              <div class="check-buttons property-location">
                <input type="text" name="" id="" />
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Estate Name</h1>
              </div>
              <div class="check-buttons property-location">
                <input type="text" name="" id="" />
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Phone Number</h1>
              </div>
              <div class="check-buttons property-location">
                <input type="text" name="" id="" />
              </div>
            </div>
            <!-- block -->
            <!-- block -->
            <div>
              <div class="label">
                <h1>Optional Phone Number</h1>
              </div>
              <div class="check-buttons property-location">
                <input type="text" name="" id="" />
              </div>
            </div>
            <!-- block -->
          </div>
        </div>
      </content-layout>
      <content-layout :title="'ADD IMAGES'">
        <div class="add">
          <label for="inputTag">
            + Add Images
            <input id="inputTag" type="file" />
          </label>
        </div>
      </content-layout>
      <content-layout :title="'ADD VIDEOS'">
        <div class="add">
          <label for="inputTag">
            + Add Videos
            <input id="inputTag" type="file" />
          </label>
        </div>
      </content-layout>
      <div class="submit-btn">
        <button type="submit" value="Submit">ADD PROPERTY</button>
      </div>
    </form>
  </div>
</template>

<script>
import ContentLayout from "./common/ContentLayout.vue";
import RadioBox from "./common/RadioBox.vue";
import FeatureBox from "./common/FeatureBox.vue";
export default {
  components: {
    ContentLayout,
    RadioBox,
    FeatureBox,
  },
};
</script>

<style scoped>
.purpose-section > div,
.purpose-section .check-buttons {
  display: flex;
  flex-wrap: wrap;
}
.purpose-section > div {
  /* align-items: center; */
  flex-wrap: nowrap;
}
.purpose-section .check-buttons > div {
  margin: 8px 24px 10px 0px;
}
.purpose-section {
  width: 88%;
}
.property-type {
  display: flex;
  justify-content: flex-end;
  padding: 25px 0;
}
.purpose-section .label {
  min-width: 157px;
  margin: 16px 16px;
  text-align: right;
  line-height: 1.5;
}
/* property location */
.check-buttons.property-location {
  padding: 8px 0;
}
.check-buttons.property-location input {
  font-size: 14px;
  width: 352px;
  border: none;
  box-shadow: 0px 0px 10px #00000012;
  padding: 0 5px;
}
.check-buttons.property-location select {
  font-size: 14px;
  min-width: 352px;
  border: none;
  box-shadow: 0px 0px 10px #00000012;
  padding: 0 5px;
}
.check-buttons.property-location textarea {
  font-size: 14px;
  min-width: 352px;
  min-height: 200px;
  border: none;
  box-shadow: 0px 0px 10px #00000012;
  padding: 5px;
}
.check-buttons.property-location input:focus,
.check-buttons.property-location select:focus,
.check-buttons.property-location textarea:focus {
  outline: none;
}
/* property detial */
.check-buttons.property-detail select,
.check-buttons.property-detail input,
.check-buttons.property-detail textarea {
  min-width: 500px;
}
.check-buttons.range-input input {
  font-size: 14px;
  min-width: 140px;
  border: none;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 5px;
}
.check-buttons.range-input input {
  outline: none;
}
.check-buttons.range-input > div {
  display: flex;
  align-items: center;
}
.mid-to {
  margin: 0 20px;
}
/* rang box */
.range-box {
  display: flex;
  align-items: center;
}
.area-unit {
  position: relative;
  display: flex;
  align-items: center;
}
.range-area {
  display: flex;
  box-shadow: 0px 0px 10px #00000012;
  width: 171px;
  align-items: center;
  padding: 10px 5px;
}
.range-area input {
  border: none;
  outline: none;
  min-width: 128px;
}
.range-area select {
  outline: none;
  border: none;
  width: 35px;
  font-size: 10px;
  color: #707070;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff!important;
}
.area-unit:after {
  content: ">";
  font: 9px "Consolas", monospace;
  color: #707070;
  transform: rotate(90deg);
  right: 0px;
  top: 1px;
  position: absolute;
  pointer-events: none;
}
.check-buttons.features {
  margin-right: 20px;
}
/* input buttons */
.add {
  display: flex;
  justify-content: center;
  padding: 30px 0;
}
.add input {
  display: none;
}
.add label {
  cursor: pointer;
  color: #fff;
  background: #293e8d;
  border-radius: 8px;
  padding: 14px 26px;
}
.submit-btn {
  display: flex;
  justify-content: center;
}
.submit-btn button {
  padding: 20px 25px;
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
  border: none;
  color: white;
  padding: 20px 90px;
  text-decoration: none;
  margin: 45px 2px;
  cursor: pointer;
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .property-type {
    justify-content: unset;
  }
  .property-type.perpose-container .purpose-section {
    width: 100%;
  }
  .property-type.perpose-container .purpose-section .label {
    min-width: 100%;
    text-align: left;
  }
  .property-type.perpose-container .purpose-section > div {
    flex-wrap: wrap;
  }
  .property-type.perpose-container .purpose-section .check-buttons > div {
    margin: 8px 0px 10px 18px;
  }
  .property-type.all-form-mobile .purpose-section .label {
    text-align: right;
    min-width: 100px;
    font-size: 12px;
  }
  .all-form-mobile .purpose-section {
    width: 100%;
  }
  .all-form-mobile .check-buttons.property-location input {
    font-size: 14px;
    width: 80%;
    border: none;
    box-shadow: 0px 0px 10px #00000012;
    padding: 0 5px;
  }
  .check-buttons.property-detail select,
  .check-buttons.property-detail input,
  .check-buttons.property-detail textarea {
    min-width: 200px;
  }
  .check-buttons.range-input > div {
    flex-direction: column;
  }
  .range-box {
    flex-direction: column;
  }
  .mid-to {
    margin: 8px 20px;
  }
  .mobile-features {
    flex-wrap: wrap!important;
  }
  .mobile-features .features {
    width: 100%;
    flex-direction: column;
    margin: 12px 30px;
  }
}
</style>