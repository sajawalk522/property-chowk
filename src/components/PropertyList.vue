<template>
  <div class="property-list">
    <div class="property-main">
      <div class="card-list">
        <CardProperty
          v-for="(item, index) in filteredItems"
          :key="index"
          :dataList="item"
        />
      </div>
      <!-- <div class="pagination">
        <div class="pagination-primary">
          <div
            class="block-pagination active"
            v-for="(page, p) in page"
            :key="p"
          >
            {{page}}
          </div>
        </div>
      </div> -->
    </div>
    <div class="rite-side">
      <div class="banner">Get the latest update about properties</div>
      <!-- <div class="add-section">
        <img src="../assets/images/160x600.png" alt="" />
      </div> -->
      <div class="add-section">
        <img src="../assets/images/250x250.png" alt="" />
      </div>
      <!-- <div class="add-section">
        <img src="../assets/images/300x600.png" alt="" />
      </div>
      <div class="add-section">
        <img src="../assets/images/250x250.png" alt="" />
      </div> -->
    </div>
  </div>
</template>

<script>
import CardProperty from "./common/CardProperty.vue";
export default {
  props: ["filteredItems"],
  components: {
    CardProperty,
  },
};
</script>

<style>
.property-list {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.property-main {
  width: 73%;
}
.property-list .card-list {
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  justify-content: space-between;
}
.property-list .card-container {
  width: 240px;
}
/* right side */
.rite-side {
  width: 25%;
}
.rite-side .banner {
  padding: 14px 20px;
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
  color: #fff;
  font-size: 14px;
}
.add-section {
  margin-top: 10px;
}
.add-banner{
  margin: 5px 0 15px 0;
}
.add-banner img{
  width: 100%;
  height: 100%;
  border: 1px solid #808080;
}
.add-section img {
  width: 100%;
  height: 100%;
  border: 1px solid #808080;
}
/* pagination */
.pagination {
  display: flex;
  justify-content: center;
}
.pagination .pagination-primary {
  width: 46%;
  display: flex;
  justify-content: space-between;
  margin: 20px 10px 32px 10px;
}
.block-pagination {
  display: flex;
  width: 50px;
  height: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #fff;
  cursor: pointer;
  box-shadow: 0px 0px 10px #00000012;
  font-size: 18px;
}
.block-pagination.active {
  background: #fff;
  color: #fff;
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
}
@media (max-width: 479px) and (min-width: 320px) {
  .property-list .card-list {
    padding: 0 10px;
  }
  .property-list {
    flex-wrap: wrap;
  }
  .property-main {
    width: 100%;
  }
  .rite-side {
    width: 100%;
  }
  .property-list .card-container {
    width: 160px;
  }
  .pagination .pagination-primary {
    width: 80%;
  }
  .block-pagination {
    margin: 0 5px;
  }
}
</style>