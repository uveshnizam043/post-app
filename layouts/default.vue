<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-bold text-blue-600"
            >Posts App</NuxtLink
          >
         
        </nav>
      </div>
    </header>
    <div class="px-4">
      <slot />
    </div>
  </div>
</template>
