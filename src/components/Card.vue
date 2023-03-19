<template>
    <div class="flex items-center justify-center mt-12">
        <div class="group relative items-center justify-center overflow-hidden rounded-t-3xl hover:shadow-xl hover:shadow-black/30 transition-shadow motion-reduce:hover:shadow-black">
            <a class="desktop:cursor-default" :href="link">
                <div class="h-52 w-[300px] desktop:h-96 desktop:w-[500px]">
                    <img class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 motion-reduced:group-hover:scale-100 group-hover:blur-[3px]" :src="imageUrl" :alt="alt">
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/95 group-hover:from-black/80 group-hover:via-black/70 group-hover:to-black/80 motion-reduced:group-hover:via-transparent motion-reduced:group-hover:from-transparent motion-reduced:group-hover:to-transparent desktop:motion-reduced:to-transparent"></div>
                <div class="absolute inset-0 flex flex-col items-center justify-center text-blanc-gris px-9 text-center translate-y-[65%] group-hover:translate-y-4 transition-all ease-in-out motion-reduced:translate-y-0 motion-reduced:group-hover:translate-y-0 gap-8">
                    <h1 class="font-gothic text-3xl font-medium">{{ titre }}</h1>
                    <p class="font-karla text-lg italic opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduced:opacity-100">{{ description }}</p>
                    <p class="font-karla text-lg italic opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduced:opacity-100">{{ technos }}</p>
                    <div class="flex gap-10">
                        <a class="cursor-pointer" :href="link">
                            <button class="rounded-full shadow shadow-black/60 bg-orange-500 py-2 px-6 uppercase text-lg font-black">
                                {{ buttonText }}
                            </button>
                        </a>
                        <a class="cursor-pointer" :href="externalLink" target="_blank">
                            <button class="rounded-full shadow shadow-black/60 border-orange-500 border-2 bg-blanc-gris/30 py-2 px-6 uppercase text-lg font-black">
                                {{ linkText }}
                            </button>
                        </a>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        imageUrl: {
            type: String,
            required: true
        },
        alt: String,
        titre: String,
        description: String,
        technos: String,
        link: String,
        externalLink: String,
        buttonText: String,
        linkText: String,
    },
}
</script>