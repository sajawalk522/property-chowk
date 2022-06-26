<template>
  <div class="overview-container">
    <ul class="details-list">
      <li>
        <div>Property Type</div>
        <div>House</div>
      </li>

      <li>
        <div>City</div>
        <div>Islamabad</div>
      </li>

      <li>
        <div>Area</div>
        <div>1 Kanal</div>
      </li>
      <li>
        <div>Floor</div>
        <div>2</div>
      </li>

      <li>
        <div>Address</div>
        <div>Street 4, Block A, Phase 6, DHA, Islamabad</div>
      </li>

      <li>
        <div>Bedrooms</div>
        <div>3</div>
      </li>
      <li>
        <div>Bathrooms</div>
        <div>3</div>
      </li>
      <li>
        <div>Property Title</div>
        <div>Prime</div>
      </li>
      <li>
        <div>Property Number</div>
        <div>212</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DescriptionView",
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
  min-width: 150px;
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