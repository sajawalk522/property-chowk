<template>
  <div class="range">
    <label>{{ category }}</label>
    <div :class="['range-box', {active: $route.fullPath == '/search'}]">
      <div class="range-area">
        <input type="number" placeholder="0" />
        <div class="area-unit">
          <select>
            <option selected>Marla</option>
            <option>Kanal</option>
          </select>
        </div>
      </div>
      <span>to</span>
      <div class="range-area">
        <input type="number" placeholder="0" />
        <div class="area-unit">
          <select>
            <option selected>Marla</option>
            <option>Kanal</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
};
</script>

<style scoped>
.range {
  padding: 12px 16px;
  background: #fff;
  width: 35%;
}
.range-box {
  display: flex;
  padding: 10px 0;
}
.range-box.active{
  padding-bottom: 2px;
}
.range-box span {
  color: #707070;
  margin: 0 24px;
}
.range-box input {
  border: none;
  color: #707070;
  width: 78%;
  font-size:16px;
}
.range-box input:focus {
  outline: none;
}
.range-area {
  display: flex;
}
.range-area select {
  outline: none;
  border: none;
  width: 35px;
  font-size: 10px;
  color: #707070;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff!important;
}
.area-unit {
  position: relative;
  top:2px;
}
.area-unit:after {
  content: ">";
  font: 9px "Consolas", monospace;
  color: #707070;
  transform: rotate(90deg);
  right: 0px;
  top: 26%;
  position: absolute;
  pointer-events: none;
}
</style>