<script setup>

</script>

<template>
    <div class="text-blanc flex flex-wrap space-x-12 pl-16 pt-2">
        <div class="w-1/2 space-y-12 pt-24 pl-12">
            <h1 class="font-gothic text-3xl pr-64">
                Matthieu Monturet
                Front Developper
            </h1>
            <div class="font-karla text-2xl">
                <p>Étudiant en 2e année de BUT MMI de Montbéliard</p>
                <p>Spécialisé dans l'intégration web et le webdesign</p>
            </div>
            <a class="font-cabin hover:before:w-full relative inline-block text-xl uppercase text-blanc-gris px-5 py-8 tracking-[.125rem] font-black mt-16 before:absolute before:left-0 before:top-3 before:w-16 before:h-16 before:rounded-[50px] before:bg-bleu before:-z-10 before:transition-all before:ease-in before:delay-100 before:duration-500" href="/real">Me découvrir</a>
        </div>
        <div class="img">
            <div class="social-icons">
                <a href="https://twitter.com/MatthieuMontur1">
                    <img class="absolute w-28 top-0 left-[42%]" src="@/assets/icons/twitter-icon.svg" alt="">
                </a>
                <a href="https://www.instagram.com/matthieumonturet">
                    <img class="absolute w-28 top-[42%] right-0" src="@/assets/icons/instagram-icon.svg" alt="">
                </a>
                <a href="https://www.linkedin.com/in/matthieumonturet">
                    <img class="absolute w-28 top-[42%] left-0" src="@/assets/icons/linkedin-icon.svg" alt="">
                </a>
                <a href="mailto:monturetmatthieu@gmail.com">
                    <img class="absolute w-28 top-[84%] right-[42%]" src="@/assets/icons/mail-icon.svg" alt="">
                </a>
            </div>
            <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " src="@/assets/icons/social-icon.svg" alt="">
        </div>
    </div>
    <div class="-mt-28 wave">
        <img src="@/assets/icons/wave.svg" alt="">
    </div>
</template>

<style>
.img{
    position: relative;
    width: 600px;
    height: 600px;
    background: radial-gradient(520px, #fafafa, transparent 50%);
    margin-top: -50px
}

.social-icons{
    height: 100%;
    animation: rotation 60s linear infinite;
}

@keyframes rotation {
    100% {
        transform: rotate(360deg);
    }
}

.wave{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    line-height: 0;
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