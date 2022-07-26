<template>
  <div class="overview-container">
    <ul class="details-list">
      <li>
        <div>Property Type</div>
        <div>{{ data.property_type }}</div>
      </li>

      <li>
        <div>City</div>
        <div>{{ data.city }}</div>
      </li>

      <li>
        <div>Area</div>
        <div>{{ data.area }} {{ data.area_type }}</div>
      </li>
      <li>
        <div>Floor</div>
        <div>{{ data.floor }}</div>
      </li>

      <li>
        <div>Address</div>
        <div>
          <span v-if="data.street">Street {{ data.street }},</span>
          <span data.block>Block {{ data.block }},</span>
          <span v-if="data.phase">Phase {{ data.phase }},</span>
          {{ data.society }}, {{ data.city }}
        </div>
      </li>

      <li>
        <div>Bedrooms</div>
        <div>{{ data.bedrooms }}</div>
      </li>
      <li>
        <div>Bathrooms</div>
        <div>{{ data.bathrooms }}</div>
      </li>
      <li>
        <div>Property Title</div>
        <div>{{ data.property_title }}</div>
      </li>
      <li>
        <div>Property Number</div>
        <div>{{ data.property_number }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DescriptionView",
  props: ["data"],
};
</script>

<style scoped>
.details-list {
  list-style: none;
  padding: 0 0 20px 0;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  display: table-caption;
}
.details-list li {
  color: #606060;
  font-size: 14px;
  text-align: left;
  padding: 10px 0;
  line-height: 1.5;
  display: flex;
  white-space: nowrap;
}
.details-list li div:nth-child(1) {
  min-width: 125px;
}
.details-list li div:nth-child(2) {
  color: #000 !important;
}
@media (max-width: 479px) and (min-width: 320px) {
  .details-list {
    columns: 1;
    -webkit-columns: 1;
    -moz-columns: 1;
    display: block;
  }
  .details-list li div:nth-child(2) {
    white-space: normal;
  }
}
</style>