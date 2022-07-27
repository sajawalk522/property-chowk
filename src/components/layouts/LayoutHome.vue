<template>
  <section>
    <section class="container-main">
      <AppHeader :transparent="true" />
      <div class="primary">
        <div>
          <div class="slide-imges" v-for="(img, index) in images" :key="index">
            <img :src="require(`../../assets/images/${img}`)" :class="{ active: index == imageShow }" />
          </div>
        </div>
        <SearchHeader :title="title"/>
      </div>
    </section>
    <main>
      <slot />
    </main>
    <AppFooter />
  </section>
</template>
<script>
import AppFooter from "../footer/AppFooter.vue";
import AppHeader from "../header/AppHeader.vue";
import SearchHeader from "../header/SearchHeader.vue";
export default {
  components: {
    AppFooter,
    AppHeader,
    SearchHeader,
  },
  data() {
    return {
      images: [
        "banner-1.jpg",
        "banner-2.jpg",
        "banner-3.jpg",
      ],
      imageShow: 0,
    };
  },
  props:['title'],
  mounted() {
    var itration = this.images.length - 1;
    setInterval(() => {
      if (this.imageShow < itration) {
        this.imageShow++;
      } else {
        this.imageShow = 0;
      }
    }, 5000);
  },
};
</script>

<style scoped>
.slide-imges {
  position: absolute;
  width: 100%;
  position: absolute;
  top: 0;
  height: 100%;
}
.slide-imges img {
  opacity: 0;
  transition: 0.5s;
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide-imges img.active {
  opacity: 1;
}
.container-main {
  position: relative;
  height: 680px;
}
.container-main .primary > div {
  height: 100%;
  z-index: -1;
}
.container-main .primary {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #06758f7a; */
  position:absolute;
  top:0;
}
</style>