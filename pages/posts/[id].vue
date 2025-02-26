<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="loading" class="flex justify-center items-center min-h-[300px]">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    
    <div v-else-if="post" class="bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl mx-auto">
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 flex items-center">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Posts
          </NuxtLink>
          <span class="text-gray-500">Post #{{ post.id }}</span>
        </div>
        
        <h1 class="text-3xl font-bold mb-4 text-gray-800">{{ post.title }}</h1>
        
        <div class="flex flex-wrap gap-2 mb-6">
          <span v-for="tag in post.tags" :key="tag" 
                class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {{ tag }}
          </span>
        </div>
        
        <p class="text-gray-700 text-lg leading-relaxed mb-6 whitespace-pre-line">{{ post.body }}</p>
        
        <div class="flex  items-center pt-4 border-t border-gray-200">
          <div class="flex justify-center items-center px-4">
            <Icon name="uil:thumbs-up" class="font-medium"/>
            {{ post.reactions.likes }}
          </div>
          <div class="flex justify-center items-center">
            <Icon name="uil:thumbs-down" class="font-medium"  />
            {{ post.reactions.dislikes }}
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="text-center py-12">
      <p class="text-gray-600">Post not found</p>
    </div>
  </div>
</template>

<script setup>
import { usePostsStore } from '~/stores/posts';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const route = useRoute();
const postId = route.params.id;

const postsStore = usePostsStore();
const { post, loading } = storeToRefs(postsStore);

onMounted(async () => {
  await postsStore.fetchPostById(postId);
});
</script>