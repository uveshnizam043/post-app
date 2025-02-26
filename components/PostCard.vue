<template>
    <div
      class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <div class="p-6 flex-grow">
        <h2 class="text-xl font-bold mb-2 text-gray-800 line-clamp-2">
          {{ post.title }}
        </h2>
        <p class="text-gray-600 mb-4 line-clamp-3">{{ post.body }}</p>
  
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full capitalize"
          >
            {{ tag }}
          </span>
        </div>
      </div>
  
      <div class="px-6 py-4 bg-gray-50 flex justify-between items-center">
        <div class="text-sm text-gray-600 flex justify-center align-center">
          <div class="flex justify-center items-center px-4">
            <Icon name="uil:thumbs-up" class="font-medium"/>
            {{ post.reactions.likes }}
          </div>
          <div class="flex justify-center items-center">
            <Icon name="uil:thumbs-down" class="font-medium"  />
            {{ post.reactions.dislikes }}
          </div>
        </div>
        <NuxtLink
      
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-400 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          Read More
          <Icon name="uil:arrow-right" size="24" />
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    post: {
      type: Object,
      required: true,
    },
  });
  </script>
  