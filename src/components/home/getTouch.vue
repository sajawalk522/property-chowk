<template>
  <section class="get-app">
    <div class="app-inner container">
      <div class="app-left">
        <div>
          <img src="../../assets/images/gettouch.jpg" />
        </div>
      </div>
      <div class="app-right">
        <div>
          <h3>Let us know your dream house</h3>
          <h4>and we will build for you</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
          </p>
          <button class="btn">Get in Touch</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GetTouch"
};
</script>

<style scoped>
.get-app {
  background: #fff;
  padding: 20px 0;
}
.get-app .app-inner {
  display: flex;
  justify-content: space-between;
  /* box-shadow: 0px 0px 10px #0000001a; */
  margin: 30px auto;
  padding: 10px 10px 0px 10px;
}
.get-app .app-inner .app-left {
  width: 40%;
  display: flex;
  padding: 0px 10px;
}
.get-app .app-inner .app-left div img {
  width: 100%;
  height: 100%;
  box-shadow: -15px 15px 0px 0px #e28c1f;
}
.get-app .app-inner .app-right {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
}
.get-app .app-inner .app-right h3 {
  font-size: 32px;
  font-weight: 600;
  padding-bottom: 5px;
}
.get-app .app-inner .app-right h4 {
  font-size: 32px;
  font-weight: 600;
  color: #1783b4;
}
.get-app .app-inner .app-right p {
  font-size: 18px;
  line-height: 1.5;
  color: #282828;
  padding: 20px 0;
}
.get-app .app-inner .app-right button {
  background-color: #1783b4;
  border-radius: 5px;
}
.get-app .app-inner .app-right button:hover {
  background-color: #282828;
}
@media (max-width: 479px) and (min-width: 320px) {
  .get-app .app-inner {
    flex-wrap: wrap;
  }
  .get-app .app-inner .app-left {
    width: 100%;
  }
  .get-app .app-inner .app-right {
    width: 100%;
  }
}
</style>