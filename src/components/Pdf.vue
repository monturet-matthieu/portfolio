<template>
    <div>
      <button class="rounded-full shadow shadow-black/60 border-orange-500 border-2 bg-blanc-gris/30 py-2 px-6 uppercase text-lg font-black" @click="downloadPdf">Télécharger le PDF</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Pdf',
    props: {
      pdfLink: {
        type: String,
        required: true
      }
    },
    methods: {
    downloadPdf() {
      const newWindow = window.open(this.pdfLink, '_blank');

      if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
        console.error("Le navigateur a bloqué l'ouverture de la nouvelle fenêtre. Veuillez autoriser les pop-ups pour ce site.");
      }
    }
  }
}
  </script>
  