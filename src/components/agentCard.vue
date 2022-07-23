<template>
  <div class="agent-card">
    <div class="agent-image">
      <img src="../assets/images/expert.svg" />
    </div>
    <h1>Malik Ali</h1>
    <router-link to="/agent" class="info-btn">More Info</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.agent-card {
  background: #fff;
  width: 17%;
  border: 2px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px 0;
}
.agent-card h1 {
  font-size: 20px;
  color: #000;
  padding: 0px 10px 5px 10px;
  text-align: center;
}
.agent-card .info-btn {
  font-size: 16px;
  color: #fff;
  background-color: #0cb2da;
  padding: 8px 30px;
  text-decoration: none;
  text-align: center;
}

.agent-image img {
  width: 150px;
  height: 150px;
}
</style>