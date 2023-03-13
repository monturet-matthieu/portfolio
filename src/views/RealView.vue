<script setup>
import Card from '../components/Card.vue';
</script>

<template>
    <h2 class="font-gothic text-center mt-8 text-2xl desktop:mb-8 desktop:mx-12 desktop:text-6xl text-blanc-gris">Mes projets & réalisations</h2>
    <h3 class="font-gothic text-center mt-8 text-xl desktop:text-left desktop:mb-8 desktop:mx-24 desktop:text-4xl text-blanc-gris">Sites web</h3>
    <!--Importation composant Card-->
    <div class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8">
        <Card 
            imageUrl=""
            alt=""
            titre=""
            description=""
            technos=""
            link=""
            buttonText="Détails"
        />
    <h3 class="font-gothic text-center mt-8 text-xl desktop:text-left desktop:mb-8 desktop:mx-24 desktop:text-4xl text-blanc-gris">Maquettes Figma</h3>
        <Card 
                imageUrl=""
                alt=""
                titre=""
                description=""
                technos=""
                link=""
                buttonText="Détails"
            />
    <h3 class="font-gothic text-center mt-8 text-xl desktop:text-left desktop:mb-8 desktop:mx-24 desktop:text-4xl text-blanc-gris">Visuels</h3>
    </div>
    <!--Réseaux-->
    <div class="desktop:w-full desktop:mr-24 text-blanc-gris my-8">
            <h2 class="font-gothic underline underline-offset-4 text-center text-lg mx-10 my-8 desktop:text-3xl">Retrouvez-moi sur les réseaux !</h2>
            <div class="flex space-x-12 mx-12 place-content-center">
                <a href="https://twitter.com/MatthieuMontur1">
                    <img class="w-16 desktop:w-24" src="@/assets/icons/twitter-icon.svg" alt="twitter icon">
                </a>
                <a href="https://www.instagram.com/matthieumonturet">
                    <img class="w-16 desktop:w-24" src="@/assets/icons/instagram-icon.svg" alt="instagram icon">
                </a>
                <a href="https://www.linkedin.com/in/matthieumonturet">
                    <img class="w-16 desktop:w-24" src="@/assets/icons/linkedin-icon.svg" alt="linkedin icon">
                </a>
            </div>
        </div>
</template>