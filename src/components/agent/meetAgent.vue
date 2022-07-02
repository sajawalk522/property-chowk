<template>
  <div class="container">
    <div class="meet-agent">
      <h1>MEET THE AGENT</h1>
      <div class="meet-video">
        <iframe
          src="https://www.youtube.com/embed/XHOmBV4js_E?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=http%3A%2F%2Fui.propertychowk.com&widgetid=1"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeetAgent"
};
</script>

<style>
.meet-agent h1 {
  font-size: 24px;
  font-weight: 600;
  padding: 15px 0;
  text-align: center;
}
.meet-video {
  height: 500px;
  margin-top: 20px;
}
.meet-video iframe {
  max-width: 100%;
  width: 100%;
  height: 100%;
}
</style>