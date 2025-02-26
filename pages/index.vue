<template>
  <main>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8 text-center">Posts</h1>
      <div
        v-if="loading"
        class="flex justify-center items-center min-h-[300px]"
      >
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
        ></div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="post in posts"
          :key="post.id"
          :to="`/posts/${post.id}`"
          class="block"
        >
          <PostCard :post="post" />
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { usePostsStore } from "~/stores/posts";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const postsStore = usePostsStore();
const { posts, loading, error } = storeToRefs(postsStore);

onMounted(async () => {
  console.log("loading", loading.value);
  await postsStore.fetchPosts();
  console.log("loading", loading.value);
});
</script>
