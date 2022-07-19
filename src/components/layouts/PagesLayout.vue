<template>
  <section>
    <AppHeader :transparent="false" />
    <section class="container-main">
      <div class="primary">
        <div>
          <div class="slide-imges" v-for="(img, index) in images" :key="index">
            <img
              :src="require(`../../assets/images/${img}`)"
              :class="{ active: index == imageShow }"
            />
          </div>
        </div>
        <HeroHeader v-if="pageData" :pageData="pageData"/>
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
import HeroHeader from "@/components/common/HeroHeader.vue";
export default {
  components: {
    AppFooter,
    AppHeader,
    HeroHeader,
  },
  data() {
    return {
      images: [],
      imageShow: 0,
    };
  },
  props:['pageData'],
  mounted() {
    if (this.pageData && this.pageData[0].img) {
      this.images = [this.pageData[0].img];
    } else {
      this.images = ["hero1.jpg", "hero2.jpg"];
    }
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
  background-color: #06758f7a;
}
</style>