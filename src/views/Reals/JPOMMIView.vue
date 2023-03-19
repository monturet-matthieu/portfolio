<template>
    <!--Réseaux-->
    <nav class="fixed">
        <div class="flex flex-col gap-5 bg-blanc-gris px-2 py-4 desktop:py-5 desktop:px-4 rounded-r-xl desktop:rounded-r-3xl">
            <a href="https://twitter.com/MatthieuMontur1" target="_blank">
                <img class="w-6 desktop:w-12" src="@/assets/icons/twitter-icon.svg" alt="twitter icon">
            </a>
            <a href="https://www.instagram.com/matthieumonturet" target="_blank">
                <img class="w-6 desktop:w-12" src="@/assets/icons/instagram-icon.svg" alt="instagram icon">
            </a>
            <a href="https://www.linkedin.com/in/matthieumonturet" target="_blank">
                <img class="w-6 desktop:w-12" src="@/assets/icons/linkedin-icon.svg" alt="linkedin icon">
            </a>
        </div>
    </nav>
    <!--Corps de la page-->
    <h2 class="text-blanc-gris font-gothic text-center font-semibold text-3xl desktop:text-6xl my-12">JPO MMI 2023</h2>
    <div class="text-blanc-gris font-karla text-lg desktop:text-xl mx-10">
        <!--Présentation-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6">Présentation</h3>
            <p>Ce projet a consisté à organiser la journée Portes Ouvertes du département MMI de Montbéliard ainsi que toute la communication autour. Il a été réalisé durant le semestre 3 du BUT MMI, en collaboration avec 3 autres personnes : <a class="text-orange-500 underline underline-offset-4" href="https://portfolio.steib-audy.fr">Victoria Steib--Audy</a>, <a href="thomaspaquier.fr" class="text-orange-500 underline underline-offset-4">Thomas Paquier</a> et <a href="https://ilavaine.fr" class="text-orange-500 underline underline-offset-4">Iris Lavaine</a>. La journée Portes Ouvertes s'est tenue en présentiel le 28 janvier 2023.</p>
        </div>
        <!--Site web-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6">Site web</h3>
            <div class="flex flex-col items-center">
                <img class="my-6 w-full desktop:w-[1000px]" src="/img/jpommi.png" alt="site web JPO MMI 2023">
                <a href="https://jpo-mmi.steib-audy.fr" target="_blank">
                    <button class="font-cabin rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 desktop:py-4 desktop:px-12 uppercase text-lg desktop:text-2xl font-black mb-8">
                        Visiter le site
                    </button>
                </a>
            </div>
            <p>Le site JPO MMI 2023 présente tous les aspects principaux et secondaires de la formation pour les visiteurs. Cela va d'informations plutôt générales à propos du BUT MMI aux détails de chaque parcours. Il existe également une foire aux questions qui répond aux questions concernant les attendus Parcoursup, le volume horaire de la formation, etc.</p>
            <p>La page d'accueil contient quant à elle des liens vers les autres évènements du département, tels que le défi 24h et les 25 ans du département. Ces évènements ont également été organisés par des étudiants de 2e année. Elle permet également aux étudiants et enseignants de l'établissement de pouvoir consulter le planning de la journée Portes Ouvertes, en se connectant avec leur adresse universitaire.</p>
            <div class="flex flex-col items-center gap-5 my-8 italic text-base desktop:text-lg text-center">
                <img class="w-full desktop:w-[1000px]" src="/img/jpo/jpo-events.jpg" alt="Img page d'accueil Velotaf NFC">
                <caption>Rubrique de présentation des évènements du département</caption>
                <img class="w-full desktop:w-[1000px]" src="/img/jpo/jpo-planning.jpg" alt="Img page d'accueil Velotaf NFC">
                <caption>Accès au planning depuis la page d'accueil</caption>
            </div>
        </div>
        <!--Maquette-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6" id="maquette">Maquette</h3>
            <div class="flex flex-col items-center">
                <img class="my-6 w-full desktop:w-[1000px]" src="/img/m_jpommi.png" alt="Maquette JPO MMI">
                <a href="https://www.figma.com/file/P8BHiCdUtYEcvTgbonmQob/Maquette-JPO" target="_blank">
                    <button class="font-cabin rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 desktop:py-4 desktop:px-12 uppercase text-lg desktop:text-2xl font-black mb-8">
                        Voir la maquette
                    </button>
                </a>
            </div>
            <p>Nous avons conçu le site web à partir de ce prototype interactif. Il contient 16 pages au total, dont une qui n'a pas été intégrée. Cela est dû à un souci de compatibilité d'outils de développement entre la visite virtuelle (Marzipano) et le framework utilisé pour la conception du site web (VueJS 3). Cette page avait pour but de permettre aux personnes ne pouvant se rendre sur place lors de la journée Portes Ouvertes de visiter les locaux à distance via le site.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[1000px]" src="/img/jpo/m_jpo-visite.jpg" alt="Visite virtuelle maquette JPO MMI">
                <caption>Page Visite virtuelle de la maquette</caption>
            </div>
            <p>Le site ayant pour but d'être responsive, nous avons réalisé deux maquettes distinctes, une pour ordinateur et une pour téléphone (Iphone X). Les deux versions de la maquette contiennent l'intégralité des pages et contenus actuels du site web, hormis la page "Visite virtuelle" pour les raisons que nous avons abordés précédemment.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[1000px]" src="/img/jpo/m_jpo-phone.jpg" alt="Maquette phone JPO MMI">
                <caption>Maquette du site Velotaf NFC</caption>
            </div>
            <p>Avant de réaliser ces pages, nous avons réalisé un guide de style pour déterminer l'identité visuelle du site. Les polices que nous avons choisi d'utiliser sont Montserrat et Arial. Quant aux couleurs, nous avons choisi plusieurs nuances de noir et blanc pour la couleur de fond et du texte, ainsi que du bleu et du jaune pour les composants.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[1000px]" src="/img/jpo/m_jpo-guide.jpg" alt="Style guide JPO MMI">
                <caption>Guide de style du site JPO MMI 2023</caption>
            </div>
        </div>
        <!--Visuels-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6" id="visuels">Visuels</h3>
            <div class="flex flex-col items-center">
                <img class="my-6 w-full desktop:w-[1000px]" src="/img/affiches_jpommi.jpg" alt="Visuels JPO MMI">
                <a href="https://www.figma.com/file/b8ggSkdBzPFqzBvPwwVaqI/SAE_202_IVERSENC_MORAMARCO_MONTURET?node-id=814-798" target="_blank">
                    <button class="font-cabin rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 desktop:py-4 desktop:px-12 uppercase text-lg desktop:text-2xl font-black mb-8">
                        Voir les visuels
                    </button>
                </a>
            </div>
            <p>Si le site web permettait aux visiteurs d'obtenir des informations en amont de la journée, nous avons réalisé différents supports physiques pour permettre aux personnes présentes d'avoir plus d'informations sur le BUT MMI. Nous avons notamment mis en place des affiches dans tout le département. Ces dernières mettaient en lumière des témoignages d'anciens étudiants de MMI, permettant d'attester la qualité des enseignements (et des enseignants) de la formation.</p>
            <div class="flex flex-col desktop:flex-row place-content-center gap-8 mx-8 my-6">
                <button class="rounded-full shadow shadow-black/60 border-orange-500 border-2 bg-blanc-gris/30 py-2 px-6 uppercase text-lg font-black" @click="downloadPdf">Télécharger l'affiche de Laura</button>
                <button class="rounded-full shadow shadow-black/60 border-orange-500 border-2 bg-blanc-gris/30 py-2 px-6 uppercase text-lg font-black" @click="downloadPdf2">Télécharger l'affiche de Julien</button>
            </div>
            <p>En plus de ces affiches, nous avons mis à disposition de tous des brochures explicatives, donnant des informations concernant la formation et l'IUT Nord-Franche-Comté. En outre, pour populariser l'évènement, nous avons fait une campagne de communication accentuée autour de posts Instagram. Cette campagne s'est étalée sur plus d'un mois, avec un exemple de post ci-dessous.</p>
            <div class="flex flex-col items-center">
                <img class="my-6 w-full desktop:w-[1000px]" src="/img/posts_jpommi.png" alt="Posts Instagram JPO MMI">
            </div>
        </div>
        <!--Évènement-->
        <div class="desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6">Évènement</h3>
            <div class="mx-auto mb-10 gap-5 columns-2 space-y-5 w-[1000px]">
                <img class="my-6" src="/img/jpo/jpo-canada.jpg" alt="Guide de style maquette Velotaf NFC">
                <img class="my-6" src="/img/jpo/jpo-design.jpg" alt="Guide de style maquette Velotaf NFC">
                <img class="my-6" src="/img/jpo/jpo-regie.jpg" alt="Guide de style maquette Velotaf NFC">
                <img class="my-6" src="/img/jpo/jpo-webtv.jpg" alt="Guide de style maquette Velotaf NFC">
            </div>
            <p>La journée Portes Ouvertes s'est donc tenue le 28 janvier 2023 de 9h à 17h. En amont de cette date, l'organisation logistique fut un véritable défi pour notre équipe car nous devions prévoir plusieurs éléments, tels qu'allouer des bénévoles à la WebTV qui prenait place au département tout au long de la journée, ou répartir les étudiants dans les différentes salles présentant un aspect en particulier de la formation. Il fallait préparer le parcours que les visiteurs devaient suivre pour avoir une visite complète et prévoir des guides afin de les encadrer.</p>
            <p>En somme, cette journée a demandé beaucoup de travail logistique en amont comme le jour même, car nous devions nous assurer en permanence que tous les visiteurs étaient bien pris en charge. Ce fut une expérience énormément instructive et enrichissante.</p>
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
export default {
    methods: {
        downloadPdf() {
            fetch('/src/assets/pdf/affiche1_jpommi.pdf')
            .then(response => response.blob())
            .then(blob => {
            const url = URL.createObjectURL(blob);
            window.open(url);
            })
            .catch(error => console.error(error));
        },
        downloadPdf2() {
            fetch('/src/assets/pdf/affiche2_jpommi.pdf')
            .then(response => response.blob())
            .then(blob => {
            const url = URL.createObjectURL(blob);
            window.open(url);
            })
            .catch(error => console.error(error));
        }
    },
}
</script>