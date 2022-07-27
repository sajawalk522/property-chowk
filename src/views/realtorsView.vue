<template>
  <div>
    <layout-home>
      <div class="container">
        <div class="agent-card-container">
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
        </div>
        <section class="section-pagination">
          <paginate
            :page-range="3"
            :margin-pages="2"
            :page-count="3"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          ></paginate>
        </section>
      </div>
      <GetApp />
    </layout-home>
  </div>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import AgentCard from "@/components/agentCard.vue";
import GetApp from "@/components/home/getApp.vue";
import Paginate from "vuejs-paginate-next";
export default {
  name: "RealtorsView",
  components: {
    LayoutHome,
    AgentCard,
    GetApp,
    Paginate
  },
  methods: {
    clickCallback(num) {
      this.$refs.slider.slideTo(num);
    }
  }
};
</script>
<style scoped>
.agent-card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0;
}
.section-pagination {
  display: flex;
  justify-content: center;
}
</style>