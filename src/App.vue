<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-blanc py-4 shadow-xl mb-16 font-gothic text-base uppercase">
      <nav class="flex justify-between items-center my-4 mx-16">
        <RouterLink to="/">
          <img class="w-3/4" src="@/assets/icons/logo.svg" alt="logo">
        </RouterLink>
        <div class="space-x-20 mr-8">
          <RouterLink class="hover:text-blue-800" to="/real">Mes Réalisations</RouterLink>
          <RouterLink class="hover:text-blue-800" to="/about">À propos</RouterLink>
          <RouterLink class="hover:text-blue-800" to="/contact">Contact</RouterLink>
        </div>
      </nav>
  </header>

  <RouterView />
</template>