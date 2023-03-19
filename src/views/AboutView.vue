<template>
    <h2 class="text-blanc-gris font-gothic text-center font-semibold text-3xl desktop:text-6xl my-12">À mon sujet</h2>
    <div class="text-blanc-gris grid grid-cols-1 tablet:grid-cols-2 desktop:mx-32 place-content-center">
        <img class="w-64 rounded-2xl desktop:ml-16 desktop:w-96 desktop:rounded-3xl place-self-center desktop:mt-7" src="/img/mm_img.jpg" alt="Photo de Matthieu Monturet">
        <div class="text-blanc-gris font-karla text-lg desktop:text-xl desktop:mr-64">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6 text-center desktop:text-left">Qui suis-je ?</h3>
            <div class="flex flex-col gap-6 mx-8 desktop:mx-0">
                <p>Actuellement étudiant en 2e année de BUT MMI au département de l'IUT de Montbéliard, je suis spécialisé dans le développement web, et notamment l'intégration front-end.</p>
                <p>Ayant récemment découvert les différents moyens de création numérique et de développement, je me suis pris de passion pour la réalisation de sites web, de leur conception théorique à leur déploiement en ligne.</p>
                <p>Âgé de 20 ans, je possède le permis B. Mes centres d'intérêts tournent autour de l'audiovisuel, de la lecture et du jeu vidéo.</p>
            </div>
        </div>
    </div>
    <div class="flex place-content-center mt-8 mb-16 desktop:my-16">
        <button class="text-blanc-gris rounded-full shadow shadow-black/60 border-orange-500 border-2 bg-blanc-gris/30 py-2 px-6 uppercase text-lg desktop:px-8 desktop:py-4 desktop:text-2xl font-black" @click="downloadPdf">Télécharger mon CV</button>
    </div>
    <div class="desktop:my-16 text-center desktop:text-left text-blanc-gris">
        <div class="mx-12">
            <h3 class="font-gothic text-center font-medium text-xl desktop:text-3xl my-6">Mes compétences</h3>
            <h4 class="font-gothic font-medium text-lg desktop:text-xl my-16">Développement & Intégration web</h4>
            <div class="flex flex-col space-y-12 desktop:space-y-0 tablet:flex-row">
                <ProgressBar
                icon="/src/assets/icons/html.svg"
                alt="Icône HTML5"
                color="bg-orange-500"
                border="border-orange-500"
                :progress="90"
                :percent="90"
                />
                <ProgressBar
                    icon="/src/assets/icons/css.svg"
                    alt="Icône CSS"
                    color="bg-blue-700"
                    border="border-blue-700"
                    :progress="85"
                    :percent="85"
                />
                <ProgressBar
                    icon="/src/assets/icons/js.svg"
                    alt="Icône JS"
                    color="bg-yellow-400"
                    border="border-yellow-400"
                    :progress="65"
                    :percent="65"
                />
            </div>
            <div class="flex flex-col space-y-12 mt-12 desktop:space-y-0 tablet:flex-row desktop:mt-24">
                <ProgressBar
                    icon="/src/assets/icons/vuejs.svg"
                    alt="Icône VueJS"
                    color="bg-green-500"
                    border="border-green-500"
                    :progress="95"
                    :percent="95"
                />
                <ProgressBar class="mt-8"
                    icon="/src/assets/icons/tailwind.svg"
                    alt="Icône Tailwind"
                    color="bg-blue-400"
                    border="border-blue-400"
                    :progress="85"
                    :percent="85"
                />
                <ProgressBar
                    icon="/src/assets/icons/wordpress.svg"
                    alt="Icône WordPress"
                    color="bg-blue-700"
                    border="border-blue-700"
                    :progress="75"
                    :percent="75"
                />
            </div>
            <div class="flex flex-col space-y-12 mt-12 desktop:space-y-0 tablet:flex-row desktop:mt-24">
                <ProgressBar
                    icon="/src/assets/icons/firebase.svg"
                    alt="Icône Firebase"
                    color="bg-yellow-600"
                    border="border-yellow-600"
                    :progress="60"
                    :percent="60"
                />
                <ProgressBar class="mt-12"
                    icon="/src/assets/icons/supabase.svg"
                    alt="Icône Supabase"
                    color="bg-green-500"
                    border="border-green-500"
                    :progress="65"
                    :percent="65"
                />
                <ProgressBar
                    icon="/src/assets/icons/netlify.svg"
                    alt="Icône Netlify"
                    color="bg-green-300"
                    border="border-green-300"
                    :progress="85"
                    :percent="85"
                />
            </div>
            <ProgressBar class="mt-12 desktop:mt-24"
                    icon="/src/assets/icons/github.svg"
                    alt="Icône Github"
                    color="bg-green-300"
                    border="border-green-300"
                    :progress="85"
                    :percent="85"
                />
            <h4 class="font-gothic font-medium text-lg desktop:text-xl my-16">Création numérique</h4>
            <div class="flex flex-col space-y-12 desktop:space-y-0 tablet:flex-row">
                <ProgressBar
                    icon="/src/assets/icons/photoshop.svg"
                    alt="Icône Photoshop"
                    color="bg-blue-500"
                    border="border-blue-500"
                    :progress="70"
                    :percent="70"
                />
                <ProgressBar
                    icon="/src/assets/icons/illustrator.svg"
                    alt="Icône Illustrator"
                    color="bg-orange-500"
                    border="border-orange-500"
                    :progress="75"
                    :percent="75"
                />
                <ProgressBar
                    icon="/src/assets/icons/indesign.svg"
                    alt="Icône Indesign"
                    color="bg-rose-500"
                    border="border-rose-500"
                    :progress="75"
                    :percent="75"
                />
            </div>
            <div class="flex flex-col space-y-12 desktop:space-y-0 mt-12 desktop:flex-row desktop:mt-24 desktop:mx-64 mb-12">
                <ProgressBar class="mt-5"
                    icon="/src/assets/icons/figma.svg"
                    alt="Icône Figma"
                    color="bg-red-500"
                    border="border-red-500"
                    :progress="85"
                    :percent="85"
                />
                <ProgressBar
                    icon="/src/assets/icons/davinci.svg"
                    alt="Icône DaVinci"
                    color="bg-red-500"
                    border="border-red-500"
                    :progress="70"
                    :percent="70"
                />
            </div>
        </div>
    </div>
    <!--Contact-->
    <div class="text-blanc-gris flex flex-col items-center mb-16">
        <h2 class="font-gothic text-center text-lg mx-10 my-8 desktop:text-3xl desktop:mt-16">Vous souhaitez me contacter ?</h2>
        <a href="/contact">
            <button class="font-cabin rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 desktop:py-4 desktop:px-12 uppercase text-lg desktop:text-2xl font-black">
                Contact
            </button>
        </a>
    </div>
</template>

<script>
import ProgressBar from '../components/ProgressBar.vue';

export default {
    methods: {
        downloadPdf() {
            fetch("/src/assets/pdf/CV_Matthieu_Monturet.pdf")
                .then(response => response.blob())
                .then(blob => {
                const url = URL.createObjectURL(blob);
                window.open(url);
            })
                .catch(error => console.error(error));
        },
    },
    components: { ProgressBar }
}
</script>