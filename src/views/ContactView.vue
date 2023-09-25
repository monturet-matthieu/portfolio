<script setup>

</script>

<template>
    <div class="text-blanc-gris space-y-6 desktop:flex desktop:place-content-center desktop:space-y-48">
        <!--Formulaire de contact-->
        <div class="desktop:w-1/2 desktop:mx-48">
            <h2 class="font-gothic underline underline-offset-4 text-center text-lg mx-10 my-8 desktop:text-3xl desktop:mx-0 desktop:mb-10 desktop:mt-0">Une question ? Une demande ? Un avis ?</h2>
            <form action="https://formspree.io/f/xleklbbb" method="POST" class="flex flex-col items-center border-blanc-gris border-4 rounded-3xl mx-4 py-4 desktop:py-10">
                <h3 class="font-cabic text-lg text-center font-black mb-8 desktop:text-2xl desktop:font-black">Contactez-moi !</h3>
                <div class="font-karla space-y-8 text-noir">
                    <div class="w-max flex flex-col space-y-8">
                        <input class="outline-none focus:border-4 focus:border-orange-500 px-5 py-2 rounded-2xl placeholder:text-noir placeholder:italic placeholder:text-xs desktop:pr-80 desktop:pl-4 desktop:py-3 desktop:placeholder:text-base" type="text" name="name" placeholder="Nom*" required>
                        <input class="outline-none focus:border-4 focus:border-orange-500 px-5 py-2 rounded-2xl placeholder:text-noir placeholder:italic placeholder:text-xs desktop:pr-80 desktop:pl-4 desktop:py-3 desktop:placeholder:text-base" type="email" name="email" placeholder="Adresse mail*" required>
                        <input class="outline-none focus:border-4 focus:border-orange-500 px-5 py-2 rounded-2xl placeholder:text-noir placeholder:italic placeholder:text-xs desktop:pr-80 desktop:pl-4 desktop:py-3 desktop:placeholder:text-base" type="text" name="phone" placeholder="N° Téléphone (optionnel)">
                    </div>
                    <div class="flex flex-col space-y-8 w-max items-center">
                        <textarea rows=4 class="outline-none focus:border-4 focus:border-orange-500 px-8 py-3 rounded-2xl placeholder:text-noir placeholder:italic placeholder:text-xs desktop:pr-80 desktop:pl-4 desktop:placeholder:text-base" name="message" placeholder="Votre question, requête, avis..." required></textarea>
                        <button class="font-cabic bg-orange-500 text-lg font-semibold py-2 px-5 rounded-2xl desktop:text-xl desktop:py-4 desktop:px-16" type="submit">Envoyer</button>
                    </div>
                </div>
            </form>
        </div>
        <!--Réseaux-->
        <div class="desktop:w-1/2 desktop:mr-24">
            <h2 class="font-gothic underline underline-offset-4 text-center text-lg mx-10 my-8 desktop:text-3xl">Retrouvez-moi sur les réseaux !</h2>
            <div class="flex space-x-12 mx-12 place-content-center">
                <a href="https://twitter.com/MatthieuMontur1">
                    <img class="w-16 desktop:w-24" src="../../public/icons/twitter-icon.svg" alt="twitter icon">
                </a>
                <a href="https://github.com/monturet-matthieu">
                    <img class="w-16 desktop:w-24" src="../../public/icons/github-icon.svg" alt="github icon">
                </a>
                <a href="https://www.linkedin.com/in/matthieumonturet">
                    <img class="w-16 desktop:w-24" src="../../public/icons/linkedin-icon.svg" alt="linkedin icon">
                </a>
            </div>
        </div>
    </div>
</template>