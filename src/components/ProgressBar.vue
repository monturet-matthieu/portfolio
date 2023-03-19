<template>
    <div class="w-full h-full flex flex-col gap-5 items-center">
        <img class="max-w-[125px]" :src="icon" :alt="alt">
        <div class="bg-blanc-gris w-56 h-3 rounded-md font-karla">
            <div ref="progressBar" :class="`${color} h-3 rounded-md transition-all ease-linear duration-500`" :style="{ width: progress + '%' }"><span :class="`${border} border-[3px] h-10 w-10 rounded-full bg-blanc-gris float-right -mt-[13px] -mr-5 text-noir text-sm text-center pt-[5px]`">{{ percent }}%</span></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        alt: String,
        color: String,
        border: String,
        progress: Number,
        percent: Number,
    },
    mounted() {
        const options = {
        threshold: 0.5
        };
        const observer = new IntersectionObserver(this.handleIntersect, options);
        observer.observe(this.$refs.progressBar);
    },
    methods: {
        handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('animate-progress');
            observer.unobserve(entry.target);
            }
        });
        }
    }
}
</script>

<style>
.animate-progress {
  animation: animateProgress 1s ease-out;
}

@keyframes animateProgress {
  from {
    width: 0%;
  }
  to {
    width: 14,5%;
  }
}
</style>