<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

// Links array
// let Links = [
//   {name : "Mes Réalisations", link : "/reals"},
//   {name : "À propos", link : "/about"},
//   {name : "Contact", link : "/contact"},
// ]
// Navbar function
let open = ref(false)
function MenuOpen(){
  open.value = !open.value
}
</script>

<template>
  <header class="text-blanc py-4 shadow-xl desktop:mb-12 font-gothic desktop:text-base uppercase">
      <nav class="flex justify-between items-center phone:mx-6 desktop:my-4 desktop:mx-28 z-10">
        <RouterLink to="/">
          <img class="phone:w-2/3 desktop:w-4/5" src="@/assets/logo-white.svg" alt="logo">
        </RouterLink>

        <span @click="MenuOpen()" class="w-auto tablet:hidden cursor-pointer text-5xl">
          <i :class="[open ? 'bi bi-x' : 'bi bi-list' ]"></i>
        </span>

        <div :class="[open ? 'left-0' : 'left-[-150%]']" class="flex flex-col tablet:flex-row bg-gray-800 bg-blend-overlay tablet:bg-transparent space-y-8 items-center tablet:space-x-16 tablet:space-y-0 px-3 py-6 tablet:px-0 tablet:pb-0 tablet:static absolute tablet:w-auto w-full top-24 tablet:top-10 duration-1000 ease-in-out z-10">
          <RouterLink class="hover:text-orange-500" to="/reals">Mes réalisations</RouterLink>
          <RouterLink class="hover:text-orange-500" to="/about">À propos</RouterLink>
          <RouterLink class="hover:text-orange-500" to="/contact">Contact</RouterLink>
        </div>
        <!-- <ul class="flex flex-col tablet:flex-row bg-gray-800 bg-blend-overlay tablet:bg-transparent space-y-8 items-center tablet:space-x-16 tablet:space-y-0 px-3 py-6 tablet:px-0 tablet:pb-0 tablet:static absolute tablet:w-auto w-full top-24 tablet:top-10 duration-1000 ease-in-out"
        :class="[open ? 'left-0' : 'left-[-150%]']">
          <li v-for="link in Links">
            <a :href="link.link" class="hover:text-orange-500">{{ link.name }}</a>
          </li>
        </ul> -->


      </nav>
  </header>

  <RouterView />
</template>