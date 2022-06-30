<template>
  <section>
    <section class="agent-model" v-if="Object.keys(agentDetail).length">
      <div class="model-main">
        <div class="headmodel" @click="close">
          <!-- <h1 >c</h1> -->
          <img src="../../assets/images/close-icon.svg" />
        </div>
        <div class="agent-container">
          <div class="agent-details">
            <ul class="details-list">
              <li>
                <div>Agent Name</div>
                <div>{{ agentDetail.name }}</div>
              </li>

              <li>
                <div>Agent Phone Number</div>
                <div>{{ agentDetail.contact }}</div>
              </li>

              <li>
                <div>Estate Name</div>
                <div>{{ agentDetail.eState }}</div>
              </li>
              <li>
                <div>City</div>
                <div>{{ agentDetail.city }}</div>
              </li>
              <li>
                <div>Area</div>
                <div>{{ agentDetail.area }}</div>
              </li>
              <li>
                <div>Property Type</div>
                <div>{{ agentDetail.type }}</div>
              </li>
              <li>
                <div>Full Address</div>
                <div>{{ agentDetail.address }}</div>
              </li>
            </ul>
            <div class="agent-image">
              <img src="../../assets/images/avatar.svg" />
            </div>
          </div>
        </div>

      </div>
    </section>
    <div class="main-title">
      <h1>Top PROPERTY EXPERTS IN CITY</h1>
    </div>
    <carousel :settings="settings" :autoplay="5000" :wrap-around="true" :pauseAutoplayOnHover="true"
      :breakpoints="breakpoints" class="carousel-container custom-div">
      <!--  -->
      <slide v-for="(agent, index) in titanium" :key="index">
        <div :id="`slide-${index}`" class="experts-main" @mouseover="mouseOver(index)" @mouseleave="mouseOut(index)">
          <div class="carousel__item">
            <img src="../../assets/images/expert.svg" />
          </div>
          <div class="experts-tilte">
            <h1 @click="showModel(index)">{{ agent.name }}</h1>
            <div class="explert-content">
              <div class="expert-inner">
                <div><img src="../../assets/images/remark.png" /></div>
                <div class="explert-contact">
                  <p>{{ agent.eState }}</p>
                  <p>{{ agent.contact }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <!-- <slide :key="slide">
        <div
          class="experts-main"
          id="slide-2"
          @mouseover="mouseOver('slide-2')"
          @mouseleave="mouseOut('slide-2')"
        >
          <div class="carousel__item">
            <img src="../../assets/images/expert.svg" />
          </div>
          <div class="experts-tilte">
            <h1>George Miller2</h1>
            <div class="explert-content">
              <div class="expert-inner">
                <div><img src="../../assets/images/remark.png" /></div>
                <div class="explert-contact">
                  <p>Miler Real Estate</p>
                  <p>0312-3456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide :key="slide">
        <div
          class="experts-main"
          id="slide-3"
          @mouseover="mouseOver('slide-3')"
          @mouseleave="mouseOut('slide-3')"
        >
          <div class="carousel__item">
            <img src="../../assets/images/expert.svg" />
          </div>
          <div class="experts-tilte">
            <h1>George Miller3</h1>
            <div class="explert-content">
              <div class="expert-inner">
                <div><img src="../../assets/images/remark.png" /></div>
                <div class="explert-contact">
                  <p>Miler Real Estate</p>
                  <p>0312-3456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide :key="slide">
        <div
          class="experts-main"
          id="slide-4"
          @mouseover="mouseOver('slide-4')"
          @mouseleave="mouseOut('slide-4')"
        >
          <div class="carousel__item">
            <img src="../../assets/images/expert.svg" />
          </div>
          <div class="experts-tilte">
            <h1>George Miller4</h1>
            <div class="explert-content">
              <div class="expert-inner">
                <div><img src="../../assets/images/remark.png" /></div>
                <div class="explert-contact">
                  <p>Miler Real Estate</p>
                  <p>0312-3456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide :key="slide">
        <div
          class="experts-main"
          id="slide-5"
          @mouseover="mouseOver('slide-5')"
          @mouseleave="mouseOut('slide-5')"
        >
          <div class="carousel__item">
            <img src="../../assets/images/expert.svg" />
          </div>
          <div class="experts-tilte">
            <h1>George Miller5</h1>
            <div class="explert-content">
              <div class="expert-inner">
                <div><img src="../../assets/images/remark.png" /></div>
                <div class="explert-contact">
                  <p>Miler Real Estate</p>
                  <p>0312-3456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide :key="slide">
        <div
          class="experts-main"
          id="slide-6"
          @mouseover="mouseOver('slide-6')"
          @mouseleave="mouseOut('slide-6')"
        >
          <div class="carousel__item">
            <img src="../../assets/images/expert.svg" />
          </div>
          <div class="experts-tilte">
            <h1>George Miller6</h1>
            <div class="explert-content">
              <div class="expert-inner">
                <div><img src="../../assets/images/remark.png" /></div>
                <div class="explert-contact">
                  <p>Miler Real Estate</p>
                  <p>0312-3456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide :key="slide">
        <div
          class="experts-main"
          id="slide-7"
          @mouseover="mouseOver('slide-7')"
          @mouseleave="mouseOut('slide-7')"
        >
          <div class="carousel__item">
            <img src="../../assets/images/expert.svg" />
          </div>
          <div class="experts-tilte">
            <h1>George Miller7</h1>
            <div class="explert-content">
              <div class="expert-inner">
                <div><img src="../../assets/images/remark.png" /></div>
                <div class="explert-contact">
                  <p>Miler Real Estate</p>
                  <p>0312-3456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide :key="slide">
        <div
          class="experts-main"
          id="slide-8"
          @mouseover="mouseOver('slide-8')"
          @mouseleave="mouseOut('slide-8')"
        >
          <div class="carousel__item">
            <img src="../../assets/images/expert.svg" />
          </div>
          <div class="experts-tilte">
            <h1>George Miller8</h1>
            <div class="explert-content">
              <div class="expert-inner">
                <div><img src="../../assets/images/remark.png" /></div>
                <div class="explert-contact">
                  <p>Miler Real Estate</p>
                  <p>0312-3456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide> -->
      <!-- <slide :key="slide">
        <div class="carousel__item">
          <img src="../assets/images/expert.svg" />
        </div>
      </slide>
      <slide :key="slide">
        <div class="carousel__item">
          <img src="../assets/images/expert.svg" />
        </div>
      </slide>
      <slide :key="slide">
        <div class="carousel__item">
          <img src="../assets/images/expert.svg" />
        </div>
      </slide>
      <slide :key="slide">
        <div class="carousel__item">
          <img src="../assets/images/expert.svg" />
        </div>
      </slide>
      <slide :key="slide">
        <div class="carousel__item">
          <img src="../assets/images/expert.svg" />
        </div>
      </slide>
      <slide :key="slide">
        <div class="carousel__item">
          <img src="../assets/images/expert.svg" />
        </div>
      </slide>
      <slide :key="slide">
        <div class="carousel__item">
          <img src="../assets/images/expert.svg" />
        </div>
      </slide> -->
      <template #addons>
        <navigation />
        <!-- <pagination /> -->
      </template>
    </carousel>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  name: "PropertyExpert",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    agentDetail: {},
    titanium: [
      {
        name: "George Miller",
        eState: "Miler Real Estate",
        img: "",
        contact: "0312-3456789",
        detail: {
          name: "George Miller",
          city: "Lahore",
          area: "10 Marla",
          type: "Residential",
          address: "Block D, Phase 5, Sector D, DHA, Lahore",
          expertise: "",
          eState: "Miler Real Estate",
          img: "../../assets/images/avatar.svg",
          contact: "0312-3456789",
          officeTiming: "",
        },
      },
      {
        name: "Malik Zartab Ali",
        eState: "Broad Land Estate",
        img: "",
        contact: "0312-3456789",
        detail: {
          name: "Malik Zartab Ali",
          city: "Lahore",
          area: "10 Marla",
          type: "Residential",
          address: "Block D, Phase 5, Sector D, DHA, Lahore",
          expertise: "",
          eState: "Miler Real Estate",
          img: "../../assets/images/avatar.svg",
          contact: "0312-3456789",
          officeTiming: "",
        },
      },
      {
        name: "George Miller",
        eState: "Miler Real Estate",
        img: "",
        contact: "0312-3456789",
        detail: {
          name: "George Miller",
          city: "Lahore",
          area: "10 Marla",
          type: "Residential",
          address: "Block D, Phase 5, Sector D, DHA, Lahore",
          expertise: "",
          eState: "Miler Real Estate",
          img: "../../assets/images/avatar.svg",
          contact: "0312-3456789",
          officeTiming: "",
        },
      },
      {
        name: "Malik Zartab Ali",
        eState: "Broad Land Estate",
        img: "",
        contact: "0312-3456789",
        detail: {
          name: "Malik Zartab Ali",
          city: "Lahore",
          area: "10 Marla",
          type: "Residential",
          address: "Block D, Phase 5, Sector D, DHA, Lahore",
          expertise: "",
          eState: "Miler Real Estate",
          img: "../../assets/images/avatar.svg",
          contact: "0312-3456789",
          officeTiming: "",
        },
      },
      {
        name: "George Miller",
        eState: "Miler Real Estate",
        img: "",
        contact: "0312-3456789",
        detail: {
          name: "George Miller",
          city: "Lahore",
          area: "10 Marla",
          type: "Residential",
          address: "Block D, Phase 5, Sector D, DHA, Lahore",
          expertise: "",
          eState: "Miler Real Estate",
          img: "../../assets/images/avatar.svg",
          contact: "0312-3456789",
          officeTiming: "",
        },
      },
      {
        name: "Malik Zartab Ali",
        eState: "Broad Land Estate",
        img: "",
        contact: "0312-3456789",
        detail: {
          name: "Malik Zartab Ali",
          city: "Lahore",
          area: "10 Marla",
          type: "Residential",
          address: "Block D, Phase 5, Sector D, DHA, Lahore",
          expertise: "",
          eState: "Miler Real Estate",
          img: "../../assets/images/avatar.svg",
          contact: "0312-3456789",
          officeTiming: "",
        },
      },
    ],
    // carousel settings
    settings: {
      itemsToShow: 3,
      snapAlign: "center",
      loop: true,
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
        loop: true,
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "center",
        loop: true,
      },
    },
  }),
  methods: {
    mouseOver(id) {
      document.getElementById(`slide-${id}`).classList.add("active");
    },
    mouseOut(id) {
      document.getElementById(`slide-${id}`).classList.remove("active");
    },
    showModel(index) {
      this.agentDetail = this.titanium[index].detail;
    },
    close() {
      this.agentDetail = {};
    }
  },
};
</script>

<style scoped>
.experts-tilte {
  margin: 40px 0;
  visibility: hidden;
  /* display:none; */
  cursor: pointer;
  width: 300px;
  position: absolute;
  left: -20px;
}

.experts-tilte h1 {
  font-size: 28px;
  text-align: center;
  color: #231f20;
  font-weight: 500;
  letter-spacing: 1.8px;
}

.explert-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.explert-content .expert-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin-top: 20px;
}

.explert-content .expert-inner img {
  width: 100px;
}

.explert-content .explert-contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 20px;
}

.explert-content .explert-contact p {
  font-size: 14px;
  color: #666666;
}

.carousel__slide .carousel__item img {
  width: 100%;
  cursor: pointer;
}

.carousel__slide--active .carousel__item img {
  border: 2px solid #0cb2da !important;
  border-radius: 50%;
  padding: 0;
  width: 100%;
}

.experts-main {
  transition: height 2s;
  height: 200px;
}

.carousel__slide--active .experts-main.active {
  height: 400px;
  transition-delay: 2s;
}

.carousel__slide {
  align-items: unset;
  pointer-events: none;
}

.carousel__slide--active {
  pointer-events: unset;
}

/* @keyframes example {
  from {
    height: 0px;
  }
  to {
    height: 400px;
  }
} */
.carousel__slide--active .experts-main.active .experts-tilte {
  visibility: visible;
  /* display: block; */
}

.custom-div .carousel__prev,
.custom-div .carousel__next {
  top: 25% !important;
}

/* ageent details popup  */
.agent-model {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #0000009e;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.agent-model .model-main {
  width: 450px;
  background: #fff;
  padding: 15px;
}

.headmodel {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 5px 5px 5px;
}

.headmodel img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.agent-container {
  padding: 10px 0 10px 20px;
}

.model-main .agent-details {
  display: flex;
  justify-content: space-between;
}

.model-main .agent-details .details-list {
  list-style: none;
  padding: 0 0 20px 0;
  width: 50%;
}

.model-main .agent-details .details-list li {
  color: #606060;
  font-size: 14px;
  text-align: left;
  padding: 6px 0;
  line-height: 1.5;
  display: flex;
  white-space: nowrap;
}

.model-main .agent-details .details-list li div:nth-child(1) {
  min-width: 150px;
  font-weight: 400;
}

.model-main .agent-details .details-list li div:nth-child(2) {
  color: #000 !important;
}

.model-main .agent-image {
  border-radius: 5px;
  width: 125px;
  height: 125px;
  box-shadow: 0px 0px 10px #0000001a;
}

.model-main .agent-image img {
  width: 100%;
}

/* ageent details popup  */
@media (max-width: 479px) and (min-width: 320px) {
  .agent-details {
    flex-wrap: wrap-reverse;
  }
.agent-model .model-main{
  width: 90%;
}
.model-main .agent-details .details-list li div:nth-child(2) {
    white-space: pre-wrap;
}
  .agent-image {
    margin: 10px 0;
  }
  .model-main .agent-details .details-list{
    width: 100%;
  }
}

@media (max-width: 479px) and (min-width: 320px) {
  .carousel__slide .carousel__item img {
    width: 100%;
  }

  .carousel__slide--active .carousel__item img {
    width: 100% !important;
  }

  /* .explert-content .expert-inner{
    width: 100%;
  } */
  .experts-main{
    height: unset;
  }
  .experts-tilte {
    left: -65%;
  }
}
</style>