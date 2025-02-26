export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
    loading: false,
  }),
  actions: {
    async fetchPosts() {
      console.log("fetchPosts");
      this.loading = true;
      try {
        const data = await $fetch("https://dummyjson.com/posts");
        this.posts = data.posts;
      } catch (error) {
        console.log("error", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
