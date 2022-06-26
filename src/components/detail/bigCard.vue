<template>
  <section class="main-card">
    <div class="image-card">
      <img src="../../assets/images/imgplace.svg" />
    </div>
    <div class="icons-wrapper">
      <div class="icon">
        <div class="i-img"><img src="../../assets/images/bed.png" /></div>
        <div><p>4</p></div>
      </div>
      <div class="icon">
        <div class="i-img"><img src="../../assets/images/bath.png" /></div>
        <div><p>3</p></div>
      </div>
      <div class="icon">
        <div class="i-img"><img src="../../assets/images/ft.png" /></div>
        <div><p>5987 sqft</p></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BigCard",
};
</script>

<style scoped>
.main-card .image-card {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8e8e8;
  height: 400px;
  width: 100%;
}
.icons-wrapper {
  padding: 30px 0;
  display: flex;
  width: 35%;
  justify-content: space-between;
}
.icons-wrapper .icon {
  display: flex;
  align-items: center;
}
.icons-wrapper .icon .i-img {
  width: 18px;
  height: 18px;
}
.icons-wrapper .icon .i-img img {
  width: 100%;
  height: 100%;
}
.icons-wrapper .icon p {
  font-size: 14px;
  color: #606060;
  margin-left: 10px;
}
@media (max-width: 479px) and (min-width: 320px) {
  .main-card .image-card {
    height: 320px;
  }
  .icons-wrapper {
    padding: 20px 10px;
    width: 50%;
  }
}
</style>