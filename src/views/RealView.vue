<script setup>
import Card from '../components/Card.vue';
import CardPdf from '../components/CardPdf.vue';
</script>

<template>
    <h2 class="font-gothic text-center mt-8 text-2xl desktop:mb-8 desktop:mx-12 desktop:text-6xl text-blanc-gris">Mes projets & réalisations</h2>
    <h3 class="font-gothic text-center mt-8 text-xl desktop:text-left desktop:mb-8 desktop:mx-24 desktop:text-4xl text-blanc-gris">Sites web</h3>
    <!--Importation composant Card-->
    <div class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8 mb-16">
        <Card 
            imageUrl="http://mmonturet.fr/src/assets/img/femin-in.png"
            alt="Site Femin'In"
            titre="Femin'In"
            description="Site mobile réalisé durant mon premier semestre de MMI"
            technos="Technologies utilisées : HTML5 / CSS / JavaScript"
            link="realsreals/feminin"
            externalLink="https://femin-in.mmonturet.fr"
            buttonText="Détails"
            linkText="Visiter"
        />
        <Card 
            imageUrl="src/assets/img/jpommi.png"
            alt="Site JPO MMI 2023"
            titre="JPO MMI 2023"
            description="Site réalisé lors de l'organisation de la journée Portes Ouvertes du département MMI"
            technos="Technologies utilisées : VueJS 3 / TailwindCSS"
            link="reals/jpo"
            externalLink="https://jpo-mmi.steib-audy.fr"
            buttonText="Détails"
            linkText="Visiter"
        />
        <Card 
            imageUrl="src/assets/img/velotaf.png"
            alt="Site Velotaf NFC"
            titre="Velotaf NFC"
            description="Site de promotion du vélotaf réalisé durant une semaine d'évaluation"
            technos="Technologies utilisées : WordPress / Avada"
            link="reals/velotaf"
            externalLink="https://velotaf-nfc.lucasmoramarco.fr/"
            buttonText="Détails"
            linkText="Visiter"
        />
        <Card 
            imageUrl="src/assets/img/tiktak.png"
            alt="Site TikTak"
            titre="TikTak"
            description="Site de promotion du vélotaf réalisé durant une semaine d'évaluation"
            technos="Technologies utilisées : VueJS 3 / TailwindCSS / Supabase"
            link="reals/tiktak"
            externalLink="https://tiktak.mmonturet.fr"
            buttonText="Détails"
            linkText="Visiter"
        />
        <Card 
            imageUrl="src/assets/img/bluejazz.png"
            alt="Site Festival Blue Jazz"
            titre="Blue Jazz Festival"
            description="Site de festival de musique fictif réalisé au cours d'une semaine d'évaluation"
            technos="Technologies utilisées : VueJS 3 / TailwindCSS / Firebase"
            link="reals/bluejazz"
            externalLink="https://bluejazzfestival.mmonturet.fr"
            buttonText="Détails"
            linkText="Visiter"
        />
    </div>
    <h3 class="font-gothic text-center mt-8 text-xl desktop:text-left desktop:mb-8 desktop:mx-24 desktop:text-4xl text-blanc-gris">Maquettes Figma</h3>
    <div class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8 mb-16">
        <Card 
            imageUrl="src/assets/img/m_femin-in.png"
            alt="Maquette site Famin'In"
            titre="Maquette Femin'In"
            description="Maquette du site Femin'In conçue en amont du développement"
            technos="Technologie utilisée : Figma"
            link="reals/feminin#maquette"
            externalLink="https://www.figma.com/file/tOuzk2qYpbEh4RkmTytsxZ/Dossier-graphique-Matthieu-Monturet-B2"
            buttonText="Détails"
            linkText="Consulter"
            />
        <Card 
            imageUrl="src/assets/img/m_jpommi.png"
            alt="Maquette site JPO MMI"
            titre="Maquette JPO MMI 2023"
            description="Maquette du site JPO MMI réalisée en amont du développement"
            technos="Technologie utilisée : Figma"
            link="reals/jpommi#maquette"
            externalLink="https://www.figma.com/file/P8BHiCdUtYEcvTgbonmQob/Maquette-JPO"
            buttonText="Détails"
            linkText="Consulter"
        />
        <Card 
            imageUrl="src/assets/img/m_velotaf.png"
            alt="Maquette site Velotaf NFC"
            titre="Maquette Velotaf NFC"
            description="Maquette du site Velotaf NFC réalisée en amont du développement"
            technos="Technologie utilisée : Figma"
            link="reals/velotaf#maquette"
            externalLink="https://www.figma.com/file/b8ggSkdBzPFqzBvPwwVaqI/SAE_202_IVERSENC_MORAMARCO_MONTURET"
            buttonText="Détails"
            linkText="Consulter"
        />
        <Card 
            imageUrl="src/assets/img/m_tiktak.png"
            alt="Maquette site TikTak"
            titre="Maquette TikTak"
            description="Maquette du site TikTak conçue en amont du développement"
            technos="Technologies utilisées : Figma / Adobe Illustrator"
            link="reals/tiktak#maquette"
            externalLink="https://www.figma.com/file/VEDREPcIkbjk4E61l8MsG1/Maquette-SAE-301"
            buttonText="Détails"
            linkText="Consulter"
        />
        <Card 
            imageUrl="src/assets/img/fildefer.png"
            alt="Maquette fil de fer"
            titre="Fil de fer mmimontbeliard"
            description="Fil de fer réalisé lors d'une évaluation consistant à la refonte de la page international du site mmimontbeliard.com"
            technos="Technologie utilisée : Figma"
            link="reals/fildefer"
            externalLink="https://www.figma.com/file/1xsLC8gGlPaobvKLNoCZCW/SAE-302-Fil-de-fer"
            buttonText="Détails"
            linkText="Consulter"
        />
        <Card 
            imageUrl="src/assets/img/aquaman.png"
            alt="Maquette Aquaman"
            titre="Maquette Aquaman"
            description="Maquette reproduite dans le cadre d'une évaluation"
            technos="Technologie utilisée : Figma"
            link="reals/aquaman"
            externalLink="https://www.figma.com/file/faae1HEZF38wIRfzjfofHF/SAE-105"
            buttonText="Détails"
            linkText="Consulter"
        />
    </div>
    <h3 class="font-gothic text-center mt-8 text-xl desktop:text-left desktop:mb-8 desktop:mx-24 desktop:text-4xl text-blanc-gris">Visuels</h3>
    <div class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8 mb-16">
        <CardPdf 
            imageUrl="src/assets/img/CharteGraphique_19Crac.png"
            alt="Charte graphique 19Crac"
            titre="Charte graphique 19Crac"
            description="Charte graphique de la refonte complète du logo du 19Crac"
            technos="Technologies utilisées : Adobe InDesign / Illustrator / Figma"
            link="reals/19Crac"
            buttonText="Détails"
            pdfUrl="src/assets/pdf/CharteGraphique_19Crac.pdf"
        />
        <Card 
            imageUrl="src/assets/img/affiches_jpommi.jpg"
            alt="Affiches JPO"
            titre="Visuels JPO"
            description="Affiches et posts Instagram réalisés pour promouvoir la journée Portes Ouvertes du département MMI"
            technos="Technologie utilisée : Figma"
            link="reals/jpommi#visuels"
            externalLink="https://www.figma.com/file/yIVHbZMdkbNNKIlJY5nkQj/Posts-insta"
            buttonText="Détails"
            linkText="Consulter"
        />
        <Card 
            imageUrl="src/assets/img/velotaf_visuels.jpg"
            alt="Visuels Velotaf NFC"
            titre="Visuels Velotaf NFC"
            description="Visuels réalisés dans le cadre d'une campagne de communication promouvant le vélotaf"
            technos="Technologie utilisée : Figma"
            link="reals/velotaf#visuels"
            externalLink="https://www.figma.com/file/b8ggSkdBzPFqzBvPwwVaqI/SAE_202_IVERSENC_MORAMARCO_MONTURET"
            buttonText="Détails"
            linkText="Consulter"
        />
        <Card 
            imageUrl="src/assets/img/velotaf_behance.jpg"
            alt="Behance Velotaf NFC"
            titre="Behance Velotaf NFC"
            description="Maquette en format Behance présentant le projet complet Velotaf NFC"
            technos="Technologie utilisée : Behance / Figma"
            link="reals/velotaf#behance"
            externalLink="https://www.figma.com/file/fIEORYXWCBYWS55IAAbGph/SAE-204"
            buttonText="Détails"
            linkText="Consulter"
        />
        <CardPdf 
            imageUrl="src/assets/img/citadelle.jpg"
            alt="Image vectorielle citadelle"
            titre="Citadelle de Besançon"
            description="Réalisation vectorielle de la citadelle de Besançon"
            technos="Technologies utilisées : Adobe Illustrator / Figma"
            link="reals/citadelle"
            buttonText="Détails"
            pdfUrl="src/assets/pdf/citadelle.pdf"
        />
        <Card 
            imageUrl="src/assets/img/Osaka_affiche.jpg"
            alt="Visuels Exposition Universelle"
            titre="Visuels Exposition Universelle"
            description="Visuels conçus pour la promotion de l'Exposition Universelle d'Osa"
            technos="Technologies utilisées : Figma"
            link="reals/expo"
            externalLink="https://www.figma.com/file/werreLZzdlH7EPo5uDiBnJ/Exposition-Universelle"
            buttonText="Détails"
            linkText="Consulter"
        />
    </div>
    <!--Réseaux-->
    <div class="desktop:w-full desktop:mr-24 text-blanc-gris my-8">
            <h2 class="font-gothic underline underline-offset-4 text-center text-lg mx-10 my-8 desktop:text-3xl">Retrouvez-moi sur les réseaux !</h2>
            <div class="flex space-x-12 mx-12 place-content-center">
                <a href="https://twitter.com/MatthieuMontur1">
                    <img class="w-16 desktop:w-24" src="@/assets/icons/twitter-icon.svg" alt="twitter icon">
                </a>
                <a href="https://www.instagram.com/matthieumonturet">
                    <img class="w-16 desktop:w-24" src="@/assets/icons/instagram-icon.svg" alt="instagram icon">
                </a>
                <a href="https://www.linkedin.com/in/matthieumonturet">
                    <img class="w-16 desktop:w-24" src="@/assets/icons/linkedin-icon.svg" alt="linkedin icon">
                </a>
            </div>
        </div>
</template>