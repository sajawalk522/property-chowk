<template>
  <div>
    <layout-home>
      <div class="container">
        <div class="post-main">
          <div class="blog-left">
            <BolgPosts />
            <BolgPosts />
            <section class="section-pagination">
              <paginate
                :page-range="3"
                :margin-pages="2"
                :click-handler="clickCallback"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'"
              ></paginate>
            </section>
          </div>
          <div class="blog-right">
            <PopularPosts />
            <PostSearch />
            <RecentPosts />
          </div>
        </div>
      </div>
    </layout-home>
  </div>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import BolgPosts from "@/components/blog/Posts.vue";
import PopularPosts from "@/components/blog/popularPost.vue";
import PostSearch from "@/components/blog/postSearch.vue";
import RecentPosts from "@/components/blog/recentPost.vue";
import Paginate from "vuejs-paginate-next";
export default {
  name: "BlogView",
  components: {
    LayoutHome,
    BolgPosts,
    PopularPosts,
    PostSearch,
    RecentPosts,
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
.section-pagination{
  display: flex;
  justify-content: center;
}
.post-main {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
}
.post-main .blog-left {
  width: 60%;
}
.post-main .blog-right {
  width: 30%;
}
</style>