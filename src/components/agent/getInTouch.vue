<template>
  <div class="container">
    <div class="Get-touch-container">
      <h1>GET IN TOUCH</h1>
      <div class="get-content">
        <div class="left">
          <form class="form">
            <div>
              <label for>Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <label for>Phone Number</label>
              <input type="number" placeholder="Phone Number" />
            </div>
            <div>
              <label for>Additional Info</label>
              <textarea rows="4" cols="50" placeholder="Message"></textarea>
            </div>
            <div class="get-button">
              <input type="submit" value="Get in Touch" />
            </div>
          </form>
        </div>
        <div class="right">
          <h1 @click="clicked">Map</h1>
          <div class="map" style="width: 100%">
            <iframe
            id="theiframe"
              width="100%"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Islamabad+(Property%20chownk)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/farm-gps/">gps for tractors</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetInTouch",
  methods:{
    clicked(){
      var iframe = parent.document.getElementById("theiframe");
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

var currentFrame = innerDoc.location.href;
console.log(currentFrame)
    }
  }
};
</script>

<style scoped>
.Get-touch-container {
  padding: 40px 0;
}
.Get-touch-container h1 {
  font-size: 24px;
  font-weight: 600;
  padding: 15px 0;
  text-align: center;
}
.get-content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
}
.get-content .right {
  width: 55%;
}
.get-content .left {
  width: 40%;
}
.form {
  padding: 15px;
  border: 1px solid #eee;
}
.form div {
  margin-top: 8px;
  width: 100%;
}
.form label {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  padding: 0 15px;
  margin-top: 15px;
}
.form input {
  padding: 15px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 10px #00000012;
  color: #606060;
  font-size: 12px;
  border-radius: 5px;
  width: 90%;
  margin: 10px 0;
}
.form textarea {
  padding: 15px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 10px #00000012;
  color: #606060;
  font-size: 14px;
  border-radius: 5px;
  width: 90%;
  margin: 10px 0;
}
.right .map {
  border: 1px solid #eee;
  padding: 10px;
}
.get-button input {
  background-color: #1783b4;
  color: #fff;
  font-size: 18px;
  width: 100%;
}
@media (max-width: 479px) and (min-width: 320px) {
  .get-content .right {
    width: 100%;
    padding: 10px;
  }
  .get-content .left {
    width: 100%;
  }
  .right .map {
    padding: 0;
  }
}
</style>