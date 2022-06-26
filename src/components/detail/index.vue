<template>
  <section class="container">
    <!-- top header  -->
    <div class="top-head">
      <h3>New Upper Portion For Sale DHA2 Islamabad</h3>
      <button class="btn btn-hot">SUPER HOT</button>
    </div>
    <!-- top header  -->
    <div class="detail-container">
      <!-- left content  -->
      <div class="details-left">
        <BigCard />
        <div class="overview">
          <h2>OVERVIEW</h2>
          <content-layout :title="'DESCRIPTION'">
            <DESCRIPTION />
          </content-layout>
          <content-layout :title="'DETAILS'">
            <PropertyDetails />
          </content-layout>
          <content-layout :title="'FEATURES'">
            <FeaturesView />
          </content-layout>
          <content-layout :title="'AGENT DETAILS'">
            <AgentDetails />
          </content-layout>
        </div>
      </div>
      <!-- left content  -->
      <!-- right content  -->
      <div class="details-right">
        <SendEmail />
        <QuickLinks />
      </div>
      <!-- right content  -->
    </div>
    <!-- similar propert cards  -->
    <div class="similar-property">
      <h1>Similar Properties</h1>
      <div class="similar-container">
        <SimilarProperty />
        <SimilarProperty />
        <SimilarProperty />
        <SimilarProperty />
        <SimilarProperty />
        <SimilarProperty />
      </div>
    </div>
    <!-- similar propert cards  -->
  </section>
</template>

<script>
import BigCard from "../detail/bigCard.vue";
import SendEmail from "../detail/email.vue";
import QuickLinks from "../detail/quickLinks.vue";
import ContentLayout from "../common/ContentLayout.vue";
import DESCRIPTION from "../detail/description.vue";
import PropertyDetails from "../detail/propertyDetails.vue";
import FeaturesView from "../detail/features.vue";
import AgentDetails from "../detail/agentDetails.vue";
import SimilarProperty from "../common/CardProperty.vue";
export default {
  name: "DetailPage",
  components: {
    BigCard,
    SendEmail,
    QuickLinks,
    ContentLayout,
    DESCRIPTION,
    PropertyDetails,
    FeaturesView,
    AgentDetails,
    SimilarProperty,
  },
};
</script>

<style>
.detail-container {
  display: flex;
  padding-bottom: 15px;
}
.top-head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}
.top-head h3 {
  font-size: 18px;
  color: #000000;
}
.top-head .btn-hot {
  background: #f9193a;
}
.detail-container .details-left {
  width: 70%;
}
.detail-container .details-right {
  width: 30%;
  margin-left: 40px;
}
.overview h2 {
  color: #0cb2da;
  font-size: 20px;
  padding: 15px 0 30px 0;
  text-align: left;
}
.similar-property {
  padding: 40px 0;
  border-top: 1px solid #eee;
}
.similar-property h1 {
  font-size: 24px;
  color: #000000;
  text-align: left;
  padding-bottom: 25px;
}
.similar-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 479px) and (min-width: 320px) {
  .similar-property {
    padding: 20px 10px;
  }
  .similar-property h1 {
    padding-bottom: 20px;
  }
  .detail-container {
    flex-wrap: wrap;
  }
  .detail-container .details-left {
    width: 100%;
  }
  .detail-container .details-right {
    width: 100%;
    margin-left: 0px;
    padding: 0 10px;
  }
  .top-head {
    justify-content: space-around !important;
  }
  .top-head h3 {
    font-size: 14px;
    line-height: 1.3;
  }
  .top-head .btn-hot {
    font-size: 12px !important;
    padding: 6px 10px !important;
  }
  .overview {
    padding: 0 10px;
  }
}
</style>