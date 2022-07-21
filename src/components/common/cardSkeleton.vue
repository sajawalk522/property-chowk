<template>
  <div class="skeleton-conatiner">
    <div class="card-skeleton">
      <div class="image-skeleton"></div>
      <p></p>
      <p></p>
    </div>
    <!-- <div class="card-skeleton">
      <div class="image-skeleton"></div>
      <p></p>
      <p></p>
    </div>
    <div class="card-skeleton">
      <div class="image-skeleton"></div>
      <p></p>
      <p></p>
    </div> -->
  </div>
</template>

<script>
export default {
data() {
    return {
    
    };
  },
};
</script>

<style>
.skeleton-conatiner {
  display: flex;
  justify-content: space-between;
   width: 32%;
}
.card-skeleton {
  width: 100%;
  height: 390px;
}
.card-skeleton .image-skeleton {
  background: #eee;
  height: 250px;
}
.card-skeleton p {
  height: 30px;
  background: #eee;
  margin-top: 20px;
  width: 90%;
}
.card-skeleton p:last-child {
  width: 60%;
}
</style>