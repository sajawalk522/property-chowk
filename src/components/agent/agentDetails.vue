<template>
  <div class="container">
    <div class="agent-details">
      <ul class="details-list">
        <li>
          <div>Agent Name</div>
          <div>Malik Ali</div>
        </li>

        <li>
          <div>Agent Phone Number</div>
          <div>0312-3456789</div>
        </li>

        <li>
          <div>Estate Name</div>
          <div>Broad Land Estate</div>
        </li>
        <li>
          <div>City</div>
          <div>Lahore</div>
        </li>
        <li>
          <div>Area</div>
          <div>10 Marla</div>
        </li>
        <li>
          <div>Property Type</div>
          <div>Residential</div>
        </li>
        <li>
          <div>Office Timing</div>
          <div>9AM to 7PM</div>
        </li>
        <li>
          <div>Full Address</div>
          <div>Block D, Phase 5, Sector D, DHA, Lahore</div>
        </li>
      </ul>
      <div class="agent-image">
        <img src="../../assets/images/avatar.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgentDetails"
};
</script>

<style scoped>
/* agent details  */

.agent-details {
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
}

.agent-details .details-list {
  list-style: none;
  padding: 0 0 20px 0;
  width: 50%;
}

.agent-details .details-list li {
  color: #606060;
  font-size: 18px;
  text-align: left;
  padding: 6px 0;
  line-height: 1.5;
  display: flex;
  white-space: nowrap;
}

.agent-details .details-list li div:nth-child(1) {
  min-width: 240px;
  font-weight: 400;
}

.agent-details .details-list li div:nth-child(2) {
  color: #000 !important;
  font-weight: 400;
}

.agent-image {
  border-radius: 5px;
  width: 250px;
  height: 250px;
  box-shadow: 0px 0px 10px #0000001a;
}

.agent-image img {
  width: 100%;
}

/* ageent details  */
@media (max-width: 479px) and (min-width: 320px) {
  .agent-details {
    flex-wrap: wrap-reverse;
    padding: 30px 10px;
  }
  .agent-details .details-list li div:nth-child(2) {
    white-space: pre-wrap;
  }
  .agent-image {
    margin: 10px 0;
  }
  .agent-details .details-list {
    width: 100%;
  }
  .agent-details .details-list li div:nth-child(1) {
  min-width: 150px;
}
}
</style>