<template>
  <section class="get-app">
    <div class="app-inner container">
      <div class="app-left">
        <div>
          <h3>Get the Property Chowk App</h3>
          <p>
            Use our app, you can buy and rent property faster and more
            efficiently
          </p>
        </div>
        <div>
          <img src="../../assets/images/app.png" />
        </div>
      </div>
      <div class="app-right">
        <div class="app-image">
          <a href="https://apps.apple.com/pk/app/property-chowk/id1547137259">
            <img src="../../assets/images/ios.jpeg" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.propertychowk.app&hl=en&gl=US"
          >
            <img src="../../assets/images/andriod.png" />
          </a>
        </div>
        <div class="qr-code">
          <p>Scan the QR code <br />to get the app</p>
          <div><img src="../../assets/images/QR.svg" /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.get-app {
  background: #fff;
}
.get-app .app-inner {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 10px #0000001A;
  margin: 49px auto;
  padding: 10px 10px 0px 10px;
}
.get-app .app-inner .app-left {
  width: 60%;
  display: flex;
  padding: 0px 10px;
}
.get-app .app-inner .app-left div:first-child {
  margin-top: 5px;
  width: 425px;
}
.get-app .app-inner .app-left div:nth-child(2) {
  width: 190px;
}
.get-app .app-inner .app-left div:nth-child(2) img {
  width: 100%;
}
.get-app .app-inner .app-left h3 {
  color: #0cb2da;
  font-size: 24px;
  font-weight: 500;
  margin: 10px 0;
  text-align: left;
}
.get-app .app-inner .app-left p {
  color: #000;
  font-size: 16px;
  text-align: left;
  line-height: 1.5;
  padding-right: 50px;
}
.get-app .app-inner .app-right {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 15px;
}
.app-image img {
  width: 110px;
  margin-left: 20px;
}
.get-app .app-inner .app-right .qr-code {
  display: flex;
  margin-top: 40px;
  padding: 10px;
}
.get-app .app-inner .app-right .qr-code img {
  width: 80px;
  height: 80px;
}
.get-app .app-inner .app-right .qr-code p {
  text-align: right;
  margin-right: 15px;
  line-height: 1.5;
  font-size: 14px;
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
  .get-app .app-inner .app-left img {
    width: 100px;
    margin-left: 20px;
  }
  .get-app .app-inner .app-left div:first-child {
    margin-top: 5px;
    width: unset !important;
  }
  .get-app .app-inner .app-left p {
    padding-right: 20px !important;
  }
  .app-image img {
    width: 100px;
    margin-left: 20px;
  }
}
</style>