<template>
  <section>
    <div class="main-title">
      <h1>TITANIUM PROPERTY EXPERTS</h1>
    </div>
    <carousel
      :settings="settings"
      :autoplay="3000"
      :wrap-around="true"
      :breakpoints="breakpoints"
      class="carousel-container custom-div"
    >
      <slide :key="slide">
        <div>
          <div class="carousel__item">
            <img src="../../assets/images/expert.svg" />
          </div>
          <div class="experts-tilte">
            <h1>George Miller1</h1>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
      </slide>
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
  methods: {
    slide(newIndex, oldIndex) {
      console.log(newIndex, oldIndex);
    },
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 3,
      snapAlign: "center",
      loop:true
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
        loop:true
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "center",
        loop:true
      },
    },
  }),
};
</script>

<style scoped>
.experts-tilte {
  margin: 40px 0;
  visibility: hidden;
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
  width: 350px;
  margin-top:20px;
}
.explert-content .expert-inner img{
  width:100px;
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
.carousel__slide .carousel__item img{
  width: 65%;
}
.carousel__slide--active .carousel__item img {
  border: 2px solid #0cb2da!important;
  border-radius: 50%;
  padding: 0;
  width: 70%;
}
.carousel__slide--active .experts-tilte{
  visibility: visible;
}
.custom-div .carousel__prev,
.custom-div .carousel__next {
  top: 25%!important;
}
@media (max-width: 479px) and (min-width: 320px) {
  .carousel__slide .carousel__item img{
  width: 25%;
}
.carousel__slide--active .carousel__item img {
  width: 30%!important;
}
}
</style>