<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-bold text-green-600"
            >Posts App</NuxtLink
          >
          <NuxtLink
            to="/"
            class="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
            >Posts</NuxtLink
          >
        </nav>
      </div>
    </header>
    <div class="px-4">
      <slot />
    </div>
  </div>
</template>
