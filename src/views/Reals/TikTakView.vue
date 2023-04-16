<template>
    <!--Réseaux-->
    <nav class="fixed">
        <div class="flex flex-col gap-5 bg-blanc-gris px-2 py-4 desktop:py-5 desktop:px-4 rounded-r-xl desktop:rounded-r-3xl">
            <a href="https://twitter.com/MatthieuMontur1" target="_blank">
                <img class="w-6 desktop:w-12" src="@/assets/icons/twitter-icon.svg" alt="twitter icon">
            </a>
            <a href="https://github.com/monturet-matthieu">
                <img class="w-16 desktop:w-24" src="@/assets/icons/github-icon.svg" alt="github icon">
            </a>
            <a href="https://www.linkedin.com/in/matthieumonturet" target="_blank">
                <img class="w-6 desktop:w-12" src="@/assets/icons/linkedin-icon.svg" alt="linkedin icon">
            </a>
        </div>
    </nav>
    <!--Corps de la page-->
    <h2 class="text-blanc-gris font-gothic text-center font-semibold text-3xl desktop:text-6xl my-12">TikTak</h2>
    <div class="text-blanc-gris font-karla text-lg desktop:text-xl mx-10">
        <!--Présentation-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6">Présentation</h3>
            <p>TikTak est un site de personnalisation de montres en ligne. Ce site a été réalisé lors d'une évaluation individuelle de 3 jours durant le semestre 3 de mon BUT MMI. Il a été développé à l'aide de VueJS et TailwindCSS pour le code front, et Supabase pour le back-end.</p>
        </div>
        <!--Site web-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6">Site web</h3>
            <div class="flex flex-col items-center">
                <img class="my-6 w-full desktop:w-[1000px]" src="/img/tiktak.png" alt="site web TikTak">
                <a href="https://tiktak.mmonturet.fr" target="_blank">
                    <button class="font-cabin rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 desktop:py-4 desktop:px-12 uppercase text-lg desktop:text-2xl font-black mb-8">
                        Visiter le site
                    </button>
                </a>
            </div>
            <p>Le site web est composé de 2 pages principales et une page d'inscription / connexion. Cette page est d'ailleurs la page sur laquelle tout utilisateur arrive, pour permettre aux utilisateurs de conserver leurs montres personnalisées grâce à la base de données du site. Malheureusement, la base de données a été supprimée et une partie des fonctionnalités du site (dont celle-ci) ne sont plus disponible.</p>
            <div class="flex flex-col items-center gap-5 my-8 italic text-base desktop:text-lg text-center">
                <img class="w-full desktop:w-[1000px]" src="/img/tiktak/tiktak_connex.jpg" alt="Page connexion TikTak">
                <caption>Page de connexion du site</caption>
            </div>
            <p>Une fois l'utilisateur inscrit, il arrive sur la page d'accueil du site qui présente les différentes possibilités qui s'offrent à lui. On peut également y trouver un modèle de montre pré-conçu en utilisant l'outil de personnalisation. Ces modèles ont été réalisés sur Adobe Illustrator.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[1000px]" src="/img/tiktak.png" alt="Page accueil TikTak">
                <caption>Page d'accueil du site</caption>
            </div>
            <p>En bas de cette page, on peut trouver un bouton qui amène directement à la page de personnalisation. Elle est également accessible depuis le header du site. Ce header contient d'ailleurs toutes les pages du site, ainsi qu'une icône permettant de passer le site en mode Jour ou en mode Nuit. Malheureusement, cette option fait partie de celles impactées par l'absence de base de données, et est donc indisponible. Cependant, le site est tout de même configuré pour changer de mode selon les paramètres de votre navigateur.</p>
            <div class="flex flex-col text-center items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[1000px]" src="/img/tiktak/tiktak_perso.gif" alt="Gif page Personnalisation">
                <caption>Démonstration des fonctionnalités de la personnalisation de montre</caption>
            </div>
            <p>La page Personnalisation permet de changer la couleur et les matériaux de certaines parties distinctes de la montre. Ces parties sont respectivement l'écran, le boitier et le bracelet de la montre. Chaque partie possède une large palette de couleurs et nuances. Il existe également 2 modèles de montres différents, un modèle rond et un carré.</p>
        </div>
        <!--Maquette-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6" id="maquette">Maquette</h3>
            <div class="flex flex-col items-center">
                <img class="my-6 w-full desktop:w-[1000px]" src="/img/m_tiktak.png" alt="Maquette TikTak">
                <a href="https://www.figma.com/file/VEDREPcIkbjk4E61l8MsG1/Maquette-SAE-301" target="_blank">
                    <button class="font-cabin rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 desktop:py-4 desktop:px-12 uppercase text-lg desktop:text-2xl font-black mb-8">
                        Voir la maquette
                    </button>
                </a>
            </div>
            <p>Avant de développer le site, une maquette a été mise en place notamment pour des questions pratiques comme prévoir les différences entre les versions "Light" et "Dark" du site.</p>
            <p>Pour définir l'identité visuelle du site et de la maquette, j'ai réalisé un guide de style regroupant les couleurs et typographies utilisées.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[1000px]" src="/img/tiktak/m_tiktak-guide.jpg" alt="Guide de style maquette TikTak">
                <caption>Guide de style de TikTak</caption>
            </div>
            <p>L'harmonie colorée est composée de deux couleurs de fond/texte (noir et blanc) et deux couleurs dominantes (bleu et jaune). Pour les typographies, j'ai choisi d'utiliser la font Piazzolla pour les titres, Montserrat pour les textes et Poppins pour les boutons.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[1000px]" src="/img/m_tiktak.png" alt="Maquette TikTak">
                <caption>Maquette du site TikTak</caption>
            </div>
            <p>La maquette a été pensé pour ordinateur, mais elle fonctionne également sur téléphone. Elle comprend toutes les pages du site final, bien qu'il y ait eu des changements mineurs dans l'apparence ou le positionnement de certains éléments (palette de couleurs par exemple).</p>
        </div>
        <!--Contact-->
        <div class="text-blanc-gris flex flex-col items-center mb-16">
            <h2 class="font-gothic text-center text-lg mt-8 mb-6 desktop:text-3xl desktop:mt-16">Vous souhaitez me contacter ?</h2>
            <a href="/contact">
                <button class="font-cabin rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 desktop:py-4 desktop:px-12 uppercase text-lg desktop:text-2xl font-black">
                    Contact
                </button>
            </a>
        </div>
    </div>
</template>

<script>

</script>