<template>
  <div>
    <layout-home>
      <AgentDetails />
      <MeetAgent/>
      <NewProperty />
       <GetInTouch/>
    </layout-home>
    <BottomFooter />
  </div>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import NewProperty from "@/components/home/newProperty.vue";
import BottomFooter from "@/components/footer/bottomFooter.vue";
import AgentDetails from "@/components/agent/agentDetails.vue";
import MeetAgent from "@/components/agent/meetAgent.vue";
import GetInTouch from "@/components/agent/getInTouch.vue";
export default {
  name: "AgentView",
  components: {
    LayoutHome,
    NewProperty,
    AgentDetails,
    MeetAgent,
    GetInTouch,
    BottomFooter
  }
};
</script>