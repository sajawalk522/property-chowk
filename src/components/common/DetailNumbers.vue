<template>
  <div class="primary-type">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="type-list">
      <ul>
        <li
          :class="{ active: selected == n }"
          v-for="(key, n) in data"
          :key="n"
          @click="clickedOn(key, n)"
        >
          {{ key }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "data"],
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    clickedOn(val, index) {
      this.selected = index;
    },
  },
};
</script>

<style scoped>
.primary-type .title {
  padding: 14px 0 18px 0;
}
.primary-type {
  margin-top: 20px;
}
.primary-type h1 {
  color: #000;
  font-size: 16px;
}
.type-list ul {
  display: flex;
}
.type-list ul li {
  display: flex;
  background: #e8e8e8;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
}
.type-list ul li.active {
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
}
</style>