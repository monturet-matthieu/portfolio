<template>
    <!--Réseaux-->
    <nav class="fixed">
        <div class="flex flex-col gap-5 bg-blanc-gris px-2 py-4 desktop:py-5 desktop:px-4 rounded-r-xl desktop:rounded-r-3xl">
            <a href="https://twitter.com/MatthieuMontur1" target="_blank">
                <img class="w-6 desktop:w-12" src="@/assets/icons/twitter-icon.svg" alt="twitter icon">
            </a>
            <a href="https://github.com/monturet-matthieu">
                <img class="w-6 desktop:w-12" src="@/assets/icons/github-icon.svg" alt="github icon">
            </a>
            <a href="https://www.linkedin.com/in/matthieumonturet" target="_blank">
                <img class="w-6 desktop:w-12" src="@/assets/icons/linkedin-icon.svg" alt="linkedin icon">
            </a>
        </div>
    </nav>
    <!--Corps de la page-->
    <h2 class="text-blanc-gris font-gothic text-center font-semibold text-3xl desktop:text-6xl my-12">Femin'In</h2>
    <div class="text-blanc-gris font-karla text-lg desktop:text-xl mx-10">
        <!--Présentation-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6">Présentation</h3>
            <p>Femin'In est un site réalisé tout au long de mon premier semestre de BUT MMI. Il s'agit de mon tout premier site, intégré en mobile first à l'aide des langages HTML, CSS et JS. Basé sur le thème du féminisme, ce site devait mettre en lumière les icônes du féminisme depuis Olympe de Gouges jusqu'à présent.</p>
        </div>
        <!--Site web-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6">Site web</h3>
            <div class="flex flex-col items-center">
                <img class="my-6 w-full desktop:w-[750px]" src="/img/femin-in.png" alt="site web Femin'In">
                <a href="https://feminin.mmonturet.fr" target="_blank">
                    <button class="font-cabin rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 desktop:py-4 desktop:px-12 uppercase text-lg desktop:text-2xl font-black mb-8">
                        Visiter le site
                    </button>
                </a>
            </div>
            <p>Le site s'articule autour d'une page d'accueil, 3 pages d'articles, une page de galerie et un lexique. Il existe également une page à propos et une page présentant les projets de mes camarades. Il a été pensé pour être consulté sur Iphone X. De plus, il s'agit d'un site bilingue, car toutes les pages sont traduites en anglais dans leur entièreté.</p>
            <div class="flex flex-col items-center gap-5 my-8 italic text-base desktop:text-lg text-center">
                <img class="w-full desktop:w-[300px]" src="/img/feminin/feminin-menu.jpg" alt="Menu site web Feminin">
                <caption>Menu du site</caption>
            </div>
            <p>La page d'accueil présente d'abord une vidéo d'un micro-trottoir réalisé durant nos cours d'audiovisuel et qui porte sur le thème du féminisme. En effet, nous avons demandé à plusieurs personnes si elles pensaient que l'égalité homme-femme était présente dans la vie au quotidien.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <video class="mt-6 w-full desktop:w-[1000px]" controls type="video/mp4">
                    <source src="/img/feminin/micro-trottoir.mp4" alt="Micro-trottoir">
                </video>
                <caption>Vidéo micro-trottoir</caption>
            </div>
            <p>Ensuite, on peut retrouver un paragraphe d'introduction ainsi que des liens vers les différents articles. Ces articles portent respectivement sur Emma Watson, le féminisme en France de sa naissance à nos jours et le Deuxième Sexe.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base text-center">
                <img class="mt-6 w-full desktop:w-[300px]" src="/img/feminin/feminin-articles.jpg" alt="Articles de la page d'accueil">
                <caption>Articles présents sur la page d'accueil</caption>
            </div>
            <p>Les pages d'articles sont construits en 3 parties et illustrés. De plus, elles invitent à se tourner vers une page en lien avec l'article après l'avoir lu dans son entièreté. Sur la page qui retrace l'histoire du féminisme en France, on peut trouver une frise chronologique qui résume le contenu de l'article.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base text-center">
                <img class="mt-6 w-full desktop:w-[300px]" src="/img/feminin/feminin-frise.jpg" alt="Frise chronologique">
                <caption>Frise chronologique retraçant les grands évènements du féminisme en France</caption>
            </div>
            <p>La galerie présente 6 figures du féminisme à l'international, comme Frida Kahlo ou Simone Veil par exemple.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base text-center">
                <img class="mt-6 w-full desktop:w-[300px]" src="/img/feminin/feminin-galerie.jpg" alt="Exemple de présentation galerie">
                <caption>Galerie de figures du féminisme</caption>
            </div>
            <p>La page de lexique compile et explique tous les mots et termes techniques présents sur le site. Cette initiative a pour but de faciliter la compréhension des propos pour les jeunes personnes visitant le site.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base text-center">
                <img class="mt-6 w-full desktop:w-[350px]" src="/img/feminin/feminin-lexique.jpg" alt="Lexique Femin'In">
                <caption>Lexique du site Femin'In</caption>
            </div>
        </div>
        <!--Maquette-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6" id="maquette">Maquette</h3>
            <div class="flex flex-col items-center">
                <img class="my-6 w-full desktop:w-[700px]" src="/img/m_femin-in.png" alt="Maquette Femin'In">
                <a href="https://www.figma.com/file/tOuzk2qYpbEh4RkmTytsxZ/Dossier-graphique-Matthieu-Monturet-B2" target="_blank">
                    <button class="font-cabin rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 desktop:py-4 desktop:px-12 uppercase text-lg desktop:text-2xl font-black mb-8">
                        Voir la maquette
                    </button>
                </a>
            </div>
            <p>Pour déterminer l'ambiance globale du site ainsi que les tons présents, j'ai réalisé un moodboard pour exprimer mes intentions graphiques.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[1000px]" src="/img/feminin/m_feminin-moodboard.jpg" alt="Moodboard maquette Femin'In">
                <caption>Moodboard de la maquette</caption>
            </div>
            <p>Ensuite, pour déterminer l'identité visuelle du site, j'ai mis en place un guide de style comprenant également tous les composants et icônes utilisés dans la maquette (et par extension sur le site).</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[300px]" src="/img/feminin/m_feminin-guide.jpg" alt="Guide de style Femin'In">
                <caption>Guide de style du site Feminin</caption>
            </div>
            <p>Lorsqu'il s'agit de la maquette en elle-même, on se rend vite compte qu'elle contient un important nombre de liens internes et externes. Pour ces derniers, il s'agit le plus souvent des liens vers mes réseaux, mais aussi vers d'autres sites tels que celui du département <a class="text-orange-500 underline underline-offset-4" href="http://mmimontbeliard.com">MMI Montbéliard</a>.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[500px]" src="/img/feminin/m_feminin-prototype.jpg" alt="Prototype maquette Femin'In">
                <caption>Version prototypée de la maquette</caption>
            </div>
            <p>En ce qui concerne les liens internes, pour la plupart ce sont des liens menant vers le lexique car les mots présents en son sein sont mis en valeur dans les différentes pages où l'on peut les trouver et redirigent tous vers le lexique, avec une ancre sur le mot en particulier.</p>
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