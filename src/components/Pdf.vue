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
            fetch(this.pdfLink)
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