<script setup>

</script>

<template>
    <!--Home Page-->
    <div class="text-blanc-gris flex phone:flex-col tablet:flex-row flex-wrap desktop:space-x-12 desktop:pl-16 desktop:pt-2">
        <!--Présentation-->
        <div class="phone:text-center mt-8 space-y-16 mb-14 phone:pt-8 desktop:text-left desktop:w-1/2 desktop:space-y-12 desktop:pt-24 desktop:pl-12">
            <h1 class="font-gothic phone:text-2xl phone:px-16 desktop:text-3xl desktop:px-0 desktop:pr-64">
                Matthieu Monturet
                Front Developper
            </h1>
            <div class="font-karla space-y-2 phone:text-sm desktop:text-2xl">
                <p>Étudiant en 2e année de <span class="text-orange-500 font-semibold">BUT MMI</span> de Montbéliard</p>
                <p>Spécialisé dans <span class="text-orange-500 font-semibold">l'intégration web</span> et le <span class="text-orange-500 font-semibold">webdesign</span></p>
            </div>
            <!--Bouton interactif (desktop only)-->
            <a class="font-cabin text-center text-base bg-orange-500 rounded-3xl px-4 py-5 phone:before:invisible desktop:before:visible desktop:bg-transparent desktop:text-xl desktop:mt-16 desktop:px-5 desktop:py-8 hover:before:w-full desktop:relative inline-block uppercase tracking-[.125rem] font-black before:absolute before:left-0 before:top-3 before:w-16 before:h-16 before:rounded-[50px] before:bg-orange-500 before:-z-10 before:transition-all before:ease-in before:delay-100 before:duration-500" href="/real">Me découvrir</a>
        </div>

        <!--Espace social-->
        <div class="phone:w-[350px] phone:h-[350px] phone:self-center desktop:relative desktop:w-[600px] desktop:h-[600px] desktop:-mt-12">
            <img src="@/assets/icons/social-circle.svg" class="w-[300px] h-[300px] -mb-[327.5px] ml-6 desktop:absolute desktop:w-5/6 desktop:h-5/6 desktop:left-[50px] desktop:ml-0 desktop:top-[50px]" alt="circle">
            <!--Icônes réseaux sociaux animées-->
            <div class="social-icons h-full">
                <a href="https://twitter.com/MatthieuMontur1">
                    <img class="absolute w-16 desktop:w-28 top-0 left-[42%]" src="@/assets/icons/twitter-icon.svg" alt="twitter icon">
                </a>
                <a href="https://www.instagram.com/matthieumonturet">
                    <img class="absolute w-16 desktop:w-28 top-[42%] right-0" src="@/assets/icons/instagram-icon.svg" alt="instagram icon">
                </a>
                <a href="https://www.linkedin.com/in/matthieumonturet">
                    <img class="absolute w-16 desktop:w-28 top-[42%] left-0" src="@/assets/icons/linkedin-icon.svg" alt="linkedin icon">
                </a>
                <a href="mailto:monturetmatthieu@gmail.com">
                    <img class="absolute w-16 desktop:w-28 top-[84%] right-[42%]" src="@/assets/icons/mail-icon.svg" alt="mail icon">
                </a>
            </div>
            <img class="shadow-orange-500 w-36 -mt-56 ml-[100px] desktop:absolute desktop:mt-0 desktop:ml-0 desktop:top-1/2 desktop:left-1/2 desktop:-translate-x-1/2 desktop:-translate-y-1/2 desktop:w-72" src="@/assets/icons/social-icon.svg" alt="social icon">
        </div>
    </div>

    <!--Footer page accueil-->
    <div class="wave absolute bottom-0 left-0 w-full">
        <img src="@/assets/icons/wave.svg" alt="wave animation">
    </div>
</template>

<style>
.social-icons{
    animation: rotation 60s linear infinite;
}

@keyframes rotation {
    100% {
        transform: rotate(360deg);
    }
}

.wave::before{
    content:'';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(@/assets/icons/wave.svg) repeat-x;
    background-size: cover;
    background-position: -1000px 0;
    opacity: .5;
    animation: waveOne 60s linear infinite;
    z-index: -1
}

.wave::after{
    content:'';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(@/assets/icons/wave.svg) repeat-x;
    background-size: cover;
    background-position: 2732px 0;
    opacity: .4;
    animation: waveOne 120s linear infinite;
    z-index: -1
}

@keyframes waveOne  {
    50% {
        background-position: 0 0;
    }
}

</style>