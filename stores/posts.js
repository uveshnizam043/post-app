export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
    loading: false,
    post: null,
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

    async fetchPostById(id) {
      this.loading = true;
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await response.json();

        this.post = data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
