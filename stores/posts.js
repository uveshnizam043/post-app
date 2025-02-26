
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

      const cachedPosts = sessionStorage.getItem("posts");
      const cachedTime = sessionStorage.getItem("posts_timestamp");

      if (cachedPosts && cachedTime) {
        const currentTime = new Date().getTime();
        const cacheTime = parseInt(cachedTime);
        if (currentTime - cacheTime < 900000) {
          this.posts = JSON.parse(cachedPosts);
          this.loading = false;
          return;
        }
      }
      try {
        const data = await $fetch("https://dummyjson.com/posts");
        this.posts = data.posts;

        sessionStorage.setItem("posts", JSON.stringify(this.posts));
        sessionStorage.setItem(
          "posts_timestamp",
          new Date().getTime().toString()
        );
      } catch (error) {
        console.log("error", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPostById(id) {
      this.loading = true;

      const cachedPost = sessionStorage.getItem(`post_${id}`);
      const cachedTime = sessionStorage.getItem(`post_${id}_timestamp`);

      if (cachedPost && cachedTime) {
        const currentTime = new Date().getTime();
        const cacheTime = parseInt(cachedTime);

        if (currentTime - cacheTime < 900000) {
          this.post = JSON.parse(cachedPost);
          this.loading = false;
          return;
        }
      }
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await response.json();

        this.post = data;
        sessionStorage.setItem(`post_${id}`, JSON.stringify(this.post));
        sessionStorage.setItem(
          `post_${id}_timestamp`,
          new Date().getTime().toString()
        );
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
