<script setup>

</script>

<template>
    <!--Home Page-->
    <div class="text-blanc-gris overflow-hidden flex phone:flex-col tablet:flex-row flex-wrap desktop:space-x-24 desktop:pl-16 desktop:pt-2">
        <!--Présentation-->
        <div class="text-center mt-8 space-y-16 mb-14 pt-8 desktop:text-left desktop:w-1/2 desktop:space-y-12 desktop:pt-10 desktop:pl-12">
            <h1 class="font-gothic text-2xl px-16 desktop:text-3xl desktop:px-0 desktop:mr-[500px]">
                Matthieu&nbspMonturet
                Front&nbspDevelopper
            </h1>
            <div class="font-karla space-y-2 phone:text-sm desktop:text-2xl">
                <p>Étudiant en 3e année de <span class="text-orange-500 font-semibold">BUT MMI</span> de Montbéliard</p>
                <p>Spécialisé dans <span class="text-orange-500 font-semibold">l'intégration web</span> et le <span class="text-orange-500 font-semibold">webdesign</span></p>
            </div>
            <!--Bouton interactif (desktop only)-->
            <RouterLink class="font-cabin text-center text-base bg-orange-500 rounded-3xl px-4 py-5 before:invisible desktop:before:visible desktop:bg-transparent desktop:text-xl desktop:mt-16 desktop:px-5 desktop:py-8 hover:before:w-full desktop:relative inline-block uppercase tracking-[.125rem] font-black before:absolute before:left-0 before:top-3 before:w-16 before:h-16 before:rounded-[50px] before:bg-orange-500 before:-z-10 before:transition-all before:ease-in before:delay-100 before:duration-500" to="/about">Me découvrir</RouterLink>
        </div>

        <!--Espace social-->
        <div class="phone:w-[350px] phone:h-[350px] phone:self-center desktop:relative desktop:w-[400px] desktop:h-[400px] desktop:-mt-12">
            <img src="../../public/icons/social-circle.svg" class="w-[300px] h-[300px] -mb-[327.5px] ml-6 desktop:absolute desktop:w-5/6 desktop:h-5/6 desktop:left-[35px] desktop:ml-0 desktop:top-[40px]" alt="circle">
            <!--Icônes réseaux sociaux animées-->
            <div class="social-icons h-full">
                <a href="https://twitter.com/MatthieuMontur1" target="_blank">
                    <img class="absolute w-16 desktop:w-20 bottom-[80%] left-[39%]" src="../../public/icons/twitter-icon.svg" alt="twitter icon">
                </a>
                <a href="https://github.com/monturet-matthieu" target="_blank">
                    <img class="absolute w-16 desktop:w-20 top-[42%] left-[80%]" src="../../public/icons/github-icon.svg" alt="github icon">
                </a>
                <a href="https://www.linkedin.com/in/matthieumonturet" target="_blank">
                    <img class="absolute w-16 desktop:w-20 top-[42%] left-0" src="../../public/icons/linkedin-icon.svg" alt="linkedin icon">
                </a>
                <a href="mailto:monturetmatthieu@gmail.com" target="">
                    <img class="absolute w-16 desktop:w-20 top-[82%] right-[39%]" src="../../public/icons/mail-icon.svg" alt="mail icon">
                </a>
            </div>
            <img class="shadow-orange-500 w-36 -mt-56 ml-[100px] desktop:absolute desktop:mt-0 desktop:ml-0 desktop:top-1/2 desktop:left-1/2 desktop:-translate-x-1/2 desktop:-translate-y-1/2 desktop:w-48" src="../../public/icons/social-icon.svg" alt="social icon">
        </div>
    </div>

    <!--Footer page accueil-->
    <div class="wave absolute bottom-0 left-0 w-full h-auto">
        <img src="../../public/icons/wave.svg" alt="wave animation">
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
    background: url(../../public/icons/wave.svg) repeat-x;
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
    background: url(../../public/icons/wave.svg) repeat-x;
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