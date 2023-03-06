<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="text-blanc py-4 shadow-xl mb-12 font-gothic text-base uppercase">
      <nav class="flex justify-between items-center my-4 mx-16">
        <RouterLink to="/">
          <img class="w-4/5" src="@/assets/icons/logo-white.svg" alt="logo">
        </RouterLink>
        <div class="space-x-20 mr-8">
          <RouterLink class="hover:text-orange-500" to="/real">Mes Réalisations</RouterLink>
          <RouterLink class="hover:text-orange-500" to="/about">À propos</RouterLink>
          <RouterLink class="hover:text-orange-500" to="/contact">Contact</RouterLink>
        </div>
      </nav>
  </header>

  <RouterView />
</template>