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
    <h2 class="text-blanc-gris font-gothic text-center font-semibold text-3xl desktop:text-6xl my-12">Velotaf NFC</h2>
    <div class="text-blanc-gris font-karla text-lg desktop:text-xl mx-10">
        <!--Présentation-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6">Présentation</h3>
            <p>Velotaf NFC est un projet réalisé lors d'une semaine d'évaluation de ma première année de BUT MMI. Ce site a pour but de promouvoir la pratique du vélotaf dans les agglomérations de Belfort et Montbéliard, en créant un site web et la communication autour de ce dernier.</p>
            <p>Cette évaluation a été réalisée en groupe avec deux autres personnes, à savoir <a class="text-orange-500 underline underline-offset-4" href="https://iversenc.fr" target="_blank">Alicia Iversenc</a> et <a class="text-orange-500 underline underline-offset-4" href="https://lucasmoramarco.fr" target="_blank">Lucas Moramarco</a>.</p>
        </div>
        <!--Site web-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6">Site web</h3>
            <div class="flex flex-col items-center">
                <img class="my-6 w-full desktop:w-[1000px]" src="/img/velotaf.png" alt="site web Velotaf NFC">
                <a href="https://velotaf-nfc.lucasmoramarco.fr" target="_blank">
                    <button class="font-cabin rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 desktop:py-4 desktop:px-12 uppercase text-lg desktop:text-2xl font-black mb-8">
                        Visiter le site
                    </button>
                </a>
            </div>
            <p>Le site Velotaf NFC est composé de 4 pages au total. Dans le pied de page se situe un formulaire de contact servant à s'inscrire à l'évènement fictif organisé autour de la promotion du vélotaf La page d'accueil présente brièvement les différents avantages de la pratique du vélotaf.</p>
            <div class="flex flex-col items-center gap-5 my-8 italic text-base desktop:text-lg text-center">
                <img class="w-full desktop:w-[1000px]" src="/img/velotaf/velotaf-accueil.jpg" alt="Img page d'accueil Velotaf NFC">
                <caption>Textes de présentation du vélotaf et de ses avantages</caption>
                <img class="w-full mt-5 desktop:w-[1000px]" src="/img/velotaf/velotaf-popup.jpg" alt="Popup page d'accueil Velotaf NFC">
                <caption>Exemple de fenêtre pop-up développée</caption>
            </div>
            <p>En bas de chaque page, on retrouve un formulaire de contact permettant aux utilisateurs de s'inscrire à l'évènement. On peut y voir des liens vers toutes les pages ainsi que les boutons pour changer de langue.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[1000px]" src="/img/velotaf/velotaf-footer.jpg" alt="Footer site Velotaf NFC">
                <caption>Footer du site</caption>
            </div>
            <p>La page Évenement présente l'organisation théorique de la course mise en place dans le cadre du projet. En effet, cet évènement fictif consiste à faire une course de 20km dans la ville de Belfort (90) et ses alentours. Cet évènement a pour but de donner un aperçu de la pratique du vélotaf aux habitants de la ville en suscitant leur intérêt de façon ludique et compétitive.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[1000px]" src="/img/velotaf/velotaf-event.gif" alt="Gif page Évènement">
                <caption>Aperçu de la page Évènement</caption>
            </div>
            <p>La page "Les vélotafeurs" est consacrée au retour d'expérience de personnes interviewées sur le sujet du vélotaf. Ce retour est présenté sous forme de publi-reportage entièrement réalisé par notre équipe.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <video class="mt-6 w-full desktop:w-[1000px]" controls>
                    <source src="../../../public/img/velotaf/velotaf-itw.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <figcaption>Publi-reportage sur le vélotaf</figcaption>
            </div>
            <p>La dernière page "Règlement" contient les mentions légales ainsi que les CGU du site.</p>
        </div>
        <!--Maquette-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6" id="maquette">Maquette</h3>
            <div class="flex flex-col items-center">
                <img class="my-6 w-full desktop:w-[1000px]" src="/img/velotaf/m_velotaf-cover.jpg" alt="Cover maquette Velotaf NFC">
                <a href="https://www.figma.com/file/b8ggSkdBzPFqzBvPwwVaqI/SAE_202_IVERSENC_MORAMARCO_MONTURET?node-id=1-3" target="_blank">
                    <button class="font-cabin rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 desktop:py-4 desktop:px-12 uppercase text-lg desktop:text-2xl font-black mb-8">
                        Voir la maquette
                    </button>
                </a>
            </div>
            <p>Avant de concevoir le site Velotaf NFC, nous avons réalisé un prototype sous forme de maquette à l'aide de Figma. Nous avons commencé par définir l'identité visuelle de notre site, à l'aide d'un guide de style.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[1000px]" src="/img/velotaf/m_velotaf-guide.jpg" alt="Guide de style maquette Velotaf NFC">
                <caption>Guide de style de la maquette</caption>
            </div>
            <p>Les polices que nous avons choisi d'utiliser sont Impact, Antonio et Balsamiq Sans. Quant aux couleurs, nous avons choisi 2 nuances de violet et 2 nuances de bleu-vert. En outre, nous avons pris du blanc bleuté en tant que couleur de fond, pour se rapprocher de nos couleurs dominantes.</p>
            <div class="flex flex-col items-center gap-5 mb-8 italic desktop:text-lg text-base">
                <img class="mt-6 w-full desktop:w-[500px]" src="/img/m_velotaf.png" alt="Maquette Velotaf NFC">
                <caption>Maquette du site Velotaf NFC</caption>
            </div>
            <p>Le site ayant pour but d'être responsive, nous avons réalisé deux maquettes distinctes, une pour ordinateur et une pour téléphone (Iphone XR). On peut également constater quelques différences entre la maquette et le site actuel, notamment la disparition du "Menu" dans la version desktop pour laisser place à un header plus ergonomique.</p>
            <p>Aussi, par souci d'efficacité et de délais réduits, la maquette ne contient que les pages Accueil et Évènement, qui sont celles ayant une mise en page spécifique contrairement aux autres pages du site.</p>
        </div>
        <!--Visuels-->
        <div class="mb-8 desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6" id="visuels">Visuels</h3>
            <div class="flex flex-col items-center">
                <img class="my-6 w-full desktop:w-[1000px]" src="/img/velotaf_visuels.jpg" alt="Visuels maquette Velotaf NFC">
                <a href="https://www.figma.com/file/b8ggSkdBzPFqzBvPwwVaqI/SAE_202_IVERSENC_MORAMARCO_MONTURET?node-id=814-798" target="_blank">
                    <button class="font-cabin rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 desktop:py-4 desktop:px-12 uppercase text-lg desktop:text-2xl font-black mb-8">
                        Voir les visuels
                    </button>
                </a>
            </div>
            <p>Afin d'appuyer le site web dans la promotion du vélotaf dans les agglomérations de Belfort et Montbéliard, nous avons réalisés différents visuels. Certains sont prévus pour être utilisés physiquement, comme des flyers à distribuer ou des affiches à coller dans certains commerces. D'autres ont été conçus pour faire passer le message sur les réseaux sociaux, notamment Instagram où nous avions prévu de diffuser une story et un post. La bannière a été directement intégrée dans le site web.</p>
            <div class="flex flex-col desktop:flex-row place-content-center gap-8 mx-8 my-6">
                <button class="rounded-full shadow shadow-black/60 border-orange-500 border-2 bg-blanc-gris/30 py-2 px-6 uppercase text-lg font-black" @click="downloadPdf">Télécharger le flyer</button>
                <button class="rounded-full shadow shadow-black/60 border-orange-500 border-2 bg-blanc-gris/30 py-2 px-6 uppercase text-lg font-black" @click="downloadPdf2">Télécharger l'affiche</button>
            </div>
        </div>
        <!--Behance-->
        <div class="desktop:mx-[428px]">
            <h3 class="font-gothic font-medium text-xl desktop:text-3xl my-6" id="behance">Behance</h3>
            <div class="flex flex-col items-center">
                <img class="my-6 w-full desktop:w-[500px]" src="/img/velotaf_behance.jpg" alt="Guide de style maquette Velotaf NFC">
                <a href="https://www.figma.com/file/fIEORYXWCBYWS55IAAbGph/SAE-204" target="_blank">
                    <button class="font-cabin rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 desktop:py-4 desktop:px-12 uppercase text-lg desktop:text-2xl font-black mb-8">
                        Voir le Behance
                    </button>
                </a>
            </div>
            <p>Lors d'une différente évaluation en lien avec le vélotaf, nous devions individuellement réaliser une maquette de promotion du vélotaf à partir de ce que nous avions réalisé précédemment (site web, visuels, etc.) en suivant le format du réseau Behance.</p>
            <p>Le but de ce format est de présenter en une seule grande page l'ensemble des éléments de notre campagne de communication ainsi que le site web et ses enjeux.</p>
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
            fetch('/src/assets/pdf/velotaf_flyer.pdf')
            .then(response => response.blob())
            .then(blob => {
            const url = URL.createObjectURL(blob);
            window.open(url);
            })
            .catch(error => console.error(error));
        },
        downloadPdf2() {
            fetch('/src/assets/pdf/velotaf_affiche.pdf')
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