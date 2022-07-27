<template>
  <div>
    <layout-home>
      <div class="container">
        <div class="post-main">
          <div class="blog-left">
            <PostDetail />
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
import PopularPosts from "@/components/blog/popularPost.vue";
import PostSearch from "@/components/blog/postSearch.vue";
import RecentPosts from "@/components/blog/recentPost.vue";
import PostDetail from "@/components/blog/detailPost.vue";
export default {
  name: "PostDetailView",
  components: {
    LayoutHome,
    PostDetail,
    PopularPosts,
    PostSearch,
    RecentPosts,
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