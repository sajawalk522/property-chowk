<template>
  <section class="gallery">
    <div class="image-gallery" v-for="(g, index) in galleryImages" :key="index">
      <img :src="require(`../assets/images/${g}`)" />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      galleryImages: [
        "home1.jpg",
        "home2.jpg",
        "home3.jpg",
        "home1.jpg",
        "home2.jpg",
        "home3.jpg",
        "home1.jpg",
        "home2.jpg",
        "home3.jpg",
        "home3.jpg",
        "home1.jpg",
        "home2.jpg",
        "home3.jpg",
        "home3.jpg",
        "home1.jpg",
        "home2.jpg",
        "home3.jpg",
        "home1.jpg",
        "home1.jpg",
        "home2.jpg",
        "home3.jpg",
        "home3.jpg",
        "home1.jpg",
        "home2.jpg",
        "home3.jpg",
        "home3.jpg",
        "home1.jpg",
        "home2.jpg",
        "home3.jpg",
        "home1.jpg",
        "home1.jpg",
        "home2.jpg",
        "home3.jpg",
        "home1.jpg",
      ],
    };
  },
};
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  margin-bottom:30px;
}
.image-gallery {
  cursor: pointer;
  width: 255px;
  height: 197px;
  margin: 10px;
}
.image-gallery img {
  width: 100%;
  height: 100%;
}
</style>