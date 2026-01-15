<template>
    <div class="h-dvh relative">
        <img
            src="../../assets/images/heroes/hero-4.jpg"
            alt=""
            class="object-cover w-full h-full"
        />
        <div
            class="absolute top-1/4 left-1/5 right-1/6 text-white text-shadow-[4px_4px_36px_rgba(0,0,0)]"
        >
            <h1 class="text-8xl font-bold">
                Delicadeza transformada em acessório.
            </h1>
            <p class="text-2xl mt-8 w-3/5">
                Duis laoreet diam ut tincidunt euismod. Vestibulum ligula nunc,
                vehicula et efficitur non, vulputate eget eros.
            </p>
            <button
                class="cursor-pointer px-5 py-3 bg-[#C89E76] hover:brightness-80 active:brightness-108 uppercase mt-12 transition-all"
            >
                Conheça nossas coleções
                <span
                    class="pl-3 pb-1 pr-0 transition-all duration-1000 ease-in-out hover:pl-0 hover:pr-3"
                    >---></span
                >
            </button>
        </div>
    </div>
</template>
<style lang="css" scoped>
    button span {
        animation: in-out 1s ease-in-out infinite alternate;
    }

    @keyframes in-out {
        from {
            padding-left: 6px;
            padding-right: 0px;
        }
        to {
            padding-left: 0px;
            padding-right: 6px;
        }
    }
</style>
