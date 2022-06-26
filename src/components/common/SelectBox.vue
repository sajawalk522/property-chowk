<template>
  <div class="drop-down">
    <div @click="showDropdown">
      <label>{{ category }}</label>
      <select v-model="select" :class="{active: $route.fullPath == '/search'}">
        <option>Islamabad</option>
        <option>Mansehra</option>
        <option>Oghi</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category", "selected"],
  data() {
    return {
      select: this.selected,
    };
  },
};
</script>
<style scoped>
.drop-down {
  padding: 12px 16px;
  background: #fff;
  width: 12%;
  position: relative;
}
.drop-down select {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding: 10px 0;
  color: #707070;
  position: relative;
  font-size: 16px;
  left: -3px;
  background-color: #fff!important;
}
.drop-down .active{
  padding-bottom:2px;
}
</style>