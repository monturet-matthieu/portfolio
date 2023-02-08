<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-">
      <nav class="flex justify-between items-center my-4 mx-12">
        <RouterLink to="/">
          <img class="" src="@/assets/icons/logo.svg" alt="logo">
        </RouterLink>
        <div class="space-x-16 mr-16">
          <RouterLink to="/real">Mes Réalisations</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/about">À propos</RouterLink>
        </div>
      </nav>
  </header>

  <RouterView />
</template>