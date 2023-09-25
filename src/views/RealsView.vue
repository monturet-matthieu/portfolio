<script setup>
import Card from '@/components/Card.vue';
import CardPdf from '@/components/CardPdf.vue';
</script>

<template>
    <h2 class="font-gothic text-center mt-8 text-2xl desktop:mb-8 desktop:mx-12 desktop:text-6xl text-blanc-gris">Mes projets & réalisations</h2>
    <h3 class="font-gothic text-center mt-8 text-xl desktop:text-left desktop:mb-8 desktop:mx-24 desktop:text-4xl text-orange-500">Sites web</h3>
    <!--Importation composant Card & CardPdf-->
    <div class="grid grid-cols-1 tablet:grid-cols-2 desktop:mx-12 desktop:grid-cols-3 mb-16">
        <Card 
            imageUrl="/img/jhm/jhm-accueil.png"
            alt="Site JHM CONCEPT"
            titre="JHM CONCEPT"
            description="Site WordPress réalisé durant mon stage de 2e année en MMI"
            technos="Technologies utilisées : WordPress / Avada"
            link="/jhm"
            externalLink="https://jhm-concept.com"
            buttonText="Détails"
            linkText="Visiter"
        />
        <Card 
            imageUrl="/img/femin-in.png"
            alt="Site Femin'In"
            titre="Femin'In"
            description="Site mobile réalisé durant mon premier semestre de MMI"
            technos="Technologies utilisées : HTML5 / CSS / JavaScript"
            link="/feminin"
            externalLink="https://feminin.mmonturet.fr"
            buttonText="Détails"
            linkText="Visiter"
        />
        <Card 
            imageUrl="/img/jpommi.png"
            alt="Site JPO MMI 2023"
            titre="JPO MMI 2023"
            description="Site réalisé lors de l'organisation de la journée Portes Ouvertes du département MMI"
            technos="Technologies utilisées : VueJS 3 / TailwindCSS"
            link="/jpommi"
            externalLink="https://jpo-mmi.steib-audy.fr"
            buttonText="Détails"
            linkText="Visiter"
        />
        <Card 
            imageUrl="/img/velotaf.png"
            alt="Site Velotaf NFC"
            titre="Velotaf NFC"
            description="Site de promotion du vélotaf réalisé durant une semaine d'évaluation"
            technos="Technologies utilisées : WordPress / Avada"
            link="/velotaf"
            externalLink="https://velotaf-nfc.lucasmoramarco.fr/"
            buttonText="Détails"
            linkText="Visiter"
        />
        <Card 
            imageUrl="/img/tiktak.png"
            alt="Site TikTak"
            titre="TikTak"
            description="Site de promotion du vélotaf réalisé durant une semaine d'évaluation"
            technos="Technologies utilisées : VueJS 3 / TailwindCSS / Supabase"
            link="/tiktak"
            externalLink="https://tiktak.mmonturet.fr"
            buttonText="Détails"
            linkText="Visiter"
        />
        <Card 
            imageUrl="/img/bluejazz.png"
            alt="Site Festival Blue Jazz"
            titre="Blue Jazz Festival"
            description="Site de festival de musique fictif réalisé au cours d'une semaine d'évaluation"
            technos="Technologies utilisées : VueJS 3 / TailwindCSS / Firebase"
            link="/bluejazz"
            externalLink="https://bluejazzfestival.mmonturet.fr"
            buttonText="Détails"
            linkText="Visiter"
        />
    </div>
    <h3 class="font-gothic text-center mt-8 text-xl desktop:text-left desktop:mb-8 desktop:mx-24 desktop:text-4xl text-orange-500">Maquettes</h3>
    <div class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 mx-12 mb-16">
        <Card 
            imageUrl="/img/jhm/m_jhm.png"
            alt="Maquette JHM CONCEPT"
            titre="Maquette JHM CONCEPT"
            description="Maquette du site JHM CONCEPT réalisée durant mon stage de 2e année de MMI"
            technos="Technologie utilisée : Figma"
            link="/jhm#maquette"
            externalLink="https://www.figma.com/file/bxCBesMgBdcXGnbNEz5tDw/JHM-CONCEPT?type=design&node-id=1%3A5&mode=design&t=j6Bc2BgdsciBrMeD-1"
            buttonText="Détails"
            linkText="Consulter"
        />
        <Card 
            imageUrl="/img/m_femin-in.png"
            alt="Maquette site Femin'In"
            titre="Maquette Femin'In"
            description="Maquette du site Femin'In conçue en amont du développement"
            technos="Technologie utilisée : Figma"
            link="/feminin#maquette"
            externalLink="https://www.figma.com/file/tOuzk2qYpbEh4RkmTytsxZ/Dossier-graphique-Matthieu-Monturet-B2"
            buttonText="Détails"
            linkText="Consulter"
            />
        <Card 
            imageUrl="/img/m_jpommi.png"
            alt="Maquette site JPO MMI"
            titre="Maquette JPO MMI 2023"
            description="Maquette du site JPO MMI réalisée en amont du développement"
            technos="Technologie utilisée : Figma"
            link="/jpommi#maquette"
            externalLink="https://www.figma.com/file/P8BHiCdUtYEcvTgbonmQob/Maquette-JPO"
            buttonText="Détails"
            linkText="Consulter"
        />
        <Card 
            imageUrl="/img/m_velotaf.png"
            alt="Maquette site Velotaf NFC"
            titre="Maquette Velotaf NFC"
            description="Maquette du site Velotaf NFC réalisée en amont du développement"
            technos="Technologie utilisée : Figma"
            link="/velotaf#maquette"
            externalLink="https://www.figma.com/file/b8ggSkdBzPFqzBvPwwVaqI/SAE_202_IVERSENC_MORAMARCO_MONTURET"
            buttonText="Détails"
            linkText="Consulter"
        />
        <Card 
            imageUrl="/img/m_tiktak.png"
            alt="Maquette site TikTak"
            titre="Maquette TikTak"
            description="Maquette du site TikTak conçue en amont du développement"
            technos="Technologies utilisées : Figma / Adobe Illustrator"
            link="/tiktak#maquette"
            externalLink="https://www.figma.com/file/VEDREPcIkbjk4E61l8MsG1/Maquette-SAE-301"
            buttonText="Détails"
            linkText="Consulter"
        />
        <Card 
            imageUrl="/img/fildefer.png"
            alt="Maquette fil de fer"
            titre="Fil de fer mmimontbeliard"
            description="Fil de fer réalisé lors d'une évaluation consistant à la refonte de la page international du site mmimontbeliard.com"
            technos="Technologie utilisée : Figma"
            link="/fildefer"
            externalLink="https://www.figma.com/file/1xsLC8gGlPaobvKLNoCZCW/SAE-302-Fil-de-fer"
            buttonText="Détails"
            linkText="Consulter"
        />
    </div>
    <h3 class="font-gothic text-center mt-8 text-xl desktop:text-left desktop:mb-8 desktop:mx-24 desktop:text-4xl text-orange-500">Visuels</h3>
    <div class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 mx-12 mb-16">
        <CardPdf 
            imageUrl="/img/jhm/v_jhm-recto.png"
            alt="Carte de visite JHM CONCEPT"
            titre="Carte de visite JHM CONCEPT"
            description="Étapes de réalisation du modèle de carte de visite pour JHM CONCEPT"
            technos="Technologies utilisées : Adobe Illustrator / Figma"
            link="/jhm#visuels"
            buttonText="Détails"
            pdfUrl="src/assets/pdf/jhm_carte-visite.pdf"
        />
        <Card 
            imageUrl="/img/affiches_jpommi.jpg"
            alt="Affiches JPO"
            titre="Visuels JPO"
            description="Affiches et posts Instagram réalisés pour promouvoir la journée Portes Ouvertes du département MMI"
            technos="Technologie utilisée : Figma"
            link="/jpommi#visuels"
            externalLink="https://www.figma.com/file/yIVHbZMdkbNNKIlJY5nkQj/Posts-insta"
            buttonText="Détails"
            linkText="Consulter"
        />
        <Card 
            imageUrl="/img/velotaf_visuels.jpg"
            alt="Visuels Velotaf NFC"
            titre="Visuels Velotaf NFC"
            description="Visuels réalisés dans le cadre d'une campagne de communication promouvant le vélotaf"
            technos="Technologie utilisée : Figma"
            link="/velotaf#visuels"
            externalLink="https://www.figma.com/file/b8ggSkdBzPFqzBvPwwVaqI/SAE_202_IVERSENC_MORAMARCO_MONTURET"
            buttonText="Détails"
            linkText="Consulter"
        />
        <Card 
            imageUrl="/img/velotaf_behance.jpg"
            alt="Behance Velotaf NFC"
            titre="Behance Velotaf NFC"
            description="Maquette en format Behance présentant le projet complet Velotaf NFC"
            technos="Technologie utilisée : Behance / Figma"
            link="/velotaf#behance"
            externalLink="https://www.figma.com/file/fIEORYXWCBYWS55IAAbGph/SAE-204"
            buttonText="Détails"
            linkText="Consulter"
        />
        <CardPdf 
            imageUrl="/img/citadelle.jpg"
            alt="Image vectorielle citadelle"
            titre="Citadelle de Besançon"
            description="Réalisation vectorielle de la citadelle de Besançon"
            technos="Technologies utilisées : Adobe Illustrator / Figma"
            link="/citadelle"
            buttonText="Détails"
            pdfUrl="src/assets/pdf/citadelle.pdf"
        />
        <Card 
            imageUrl="/img/Osaka_affiche.jpg"
            alt="Visuels Exposition Universelle"
            titre="Visuels Exposition Universelle"
            description="Visuels conçus pour la promotion de l'Exposition Universelle d'Osa"
            technos="Technologies utilisées : Figma"
            link="/expo"
            externalLink="https://www.figma.com/file/werreLZzdlH7EPo5uDiBnJ/Exposition-Universelle"
            buttonText="Détails"
            linkText="Consulter"
        />
    </div>
    <!--Réseaux-->
    <div class="desktop:w-full desktop:mr-24 text-blanc-gris my-8">
        <h2 class="font-gothic underline underline-offset-4 text-center text-lg mx-10 my-8 desktop:text-3xl">Retrouvez-moi sur les réseaux !</h2>
        <div class="flex space-x-12 mx-12 place-content-center">
            <a href="https://twitter.com/MatthieuMontur1" target="_blank">
                <img class="w-16 desktop:w-24" src="../../public/icons/twitter-icon.svg" alt="twitter icon">
            </a>
            <a href="https://github.com/monturet-matthieu">
                <img class="w-16 desktop:w-24" src="../../public/icons/github-icon.svg" alt="github icon">
            </a>
            <a href="https://www.linkedin.com/in/matthieumonturet" target="_blank">
                <img class="w-16 desktop:w-24" src="../../public/icons/linkedin-icon.svg" alt="linkedin icon">
            </a>
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