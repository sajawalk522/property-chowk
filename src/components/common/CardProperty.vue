<template>
  <section class="card-container">
    <div class="card-top">
      <div class="image-card">
        <img src="../../assets/images/placeholder.png" />
      </div>
      <div class="super-hot">
        <button class="btn btn-hot">SUPER HOT</button>
      </div>
      <div class="camera">
        <p>20</p>
        <div class="cam-img"><img src="../../assets/images/camera.png" /></div>
      </div>
      <div class="wishlist">
        <div class="wish-img">
          <img src="../../assets/images/wishlist.svg" />
        </div>
      </div>
    </div>

    <div class="card-content">
      <div class="location-button">
        <button class="btn btn-blue">Prime Location</button>
      </div>
      <div class="location">
        <h3>Rs. 2.50 Crore</h3>
        <p>I-8 Islamabad</p>
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
      <div class="bottom-buttons">
        <button class="btn btn-blue">CALL</button>
        <button class="btn btn-blue">EMAIL</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CardView",
};
</script>

<style scoped>
.card-container {
  width: 276px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 10px #00000017;
  height: fit-content;
}
.card-container .card-top {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8e8e8;
  position: relative;
}
.card-container .image-card {
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-container .image-card img {
  width: 100%;
  height: 100%;
}
.card-container .icons-wrapper {
  padding: 7px 15px;
  display: flex;
  width: 68%;
  justify-content: space-between;
}
.card-container .icons-wrapper .icon {
  display: flex;
  align-items: center;
}
.card-container .icons-wrapper .icon .i-img {
  width: 15px;
  height: 15px;
}
.card-container .icons-wrapper .icon .i-img img {
  width: 100%;
  height: 100%;
}
.card-container .icons-wrapper .icon p {
  font-size: 14px;
  color: #606060;
  margin-left: 10px;
}
.card-content {
  width: 100%;
}
.card-content .location {
  padding: 0 15px;
}
.card-content .location h3 {
  text-align: left;
  font-size: 18px;
  color: #000;
  font-weight: 500;
}
.card-content .location p {
  color: #606060;
  font-size: 14px;
  text-align: left;
  line-height: 1.5;
  padding: 6px 0;
}
.card-content .location-button {
  display: flex;
  width: 100%;
  justify-content: center;
}
.card-content .location-button button {
  padding: 7px 15px !important;
  font-size: 12px !important;
  width: 50%;
}
.bottom-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.bottom-buttons button {
  margin: 5px 0 5px 10px;
  padding: 6px 15px !important;
  font-size: 12px !important;
  width: unset;
}
/* super hot button  */
.super-hot {
  position: absolute;
  top: 0;
  left: 0;
}
.super-hot .btn-hot {
  background: #f9193a;
  font-size: 12px;
  padding: 10px 15px;
}
/* camera icon  */
.camera {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: #22202061;
  position: absolute;
  bottom: 0;
  left: 0;
}
.camera p {
  color: #fff;
  font-size: 14px;
  margin-right: 5px;
  position: relative;
  top: 1px;
}
.camera .cam-img {
  width: 18px;
  height: 18px;
}
.camera .cam-img img {
  width: 100%;
  height: 100%;
}
/* wishlist style  */
.wishlist {
  position: absolute;
  bottom: 0;
  right: 0;
}
.wishlist .wish-img {
  height: 27px;
  line-height: 0;
}
.wishlist .wish-img img {
  width: 100%;
  height: 100%;
}
@media (max-width: 479px) and (min-width: 320px) {
  .card-container {
    width: 170px;
  }
  .card-container .image-card {
    height: 140px;
  }
  .super-hot .btn-hot {
    font-size: 10px;
    padding: 6px 10px;
  }
  .wishlist .wish-img {
    height: 24px;
  }
  .card-content .location-button button {
    width: 70%;
    padding: 6px 15px !important;
  }
  .card-container .icons-wrapper {
    width: 78%;
  }
  .card-container .icons-wrapper .icon .i-img {
    width: 12px;
    height: 12px;
  }
  .card-container .icons-wrapper .icon p {
    font-size: 12px;
    margin-left: 5px;
  }
  .bottom-buttons button {
    font-size: 10px;
    padding: 6px 10px;
    margin: 5px;
  }
  .card-content .location h3 {
    font-size: 14px;
  }
  .card-content .location p {
    font-size: 12px;
    padding: 3px 0;
  }
  .btn-blue {
    margin: 10px 0;
  }
}
</style>