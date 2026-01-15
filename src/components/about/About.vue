<script setup lang="ts">
    import { useVisibility } from '../../composables/visibility.ts';
    import { useTemplateRef } from 'vue';

    const sectionRef = useTemplateRef('section');
    const { isVisible } = useVisibility(sectionRef, 0.1);
</script>

<template>
    <section
        ref="section"
        class="grid grid-cols-2 my-24 bg-white overflow-hidden shadow-[6px_6px_36px_rgba(0,0,0,0.2)]"
    >
        <div
            class="pl-24 flex flex-col justify-center transition-all duration-2000"
            :class="isVisible ? 'translate-x-0' : '-translate-x-1/2'"
        >
            <h2 class="text-4xl text-[#634427] font-bold text-shadow-xs">
                Nossa História
            </h2>
            <p class="text-zinc-500 mt-6 text-justify">
                Cras aliquam arcu mauris, nec varius ex tempor eget. Sed
                porttitor massa at magna tristique pretium in vitae lectus.
                Maecenas facilisis nec eros sed euismod. Praesent eu lectus mi.
                Vivamus tempus libero et enim cursus, eget aliquam mi varius.
                Aliquam non gravida lorem. Aliquam eu odio malesuada, interdum
                arcu a, venenatis quam. Fusce id feugiat tellus, in congue
                turpis. Sed elit sapien, ornare non lobortis quis, iaculis ac
                diam. Morbi dapibus vel tortor nec hendrerit. Vivamus commodo in
                magna et dapibus. Morbi sagittis lectus tellus, quis suscipit
                orci porttitor vel. Suspendisse accumsan ex dui, quis luctus
                eros consequat eu. Proin cursus, mi vitae facilisis sodales,
                sapien mi tempus nisi, nec convallis ex orci sit amet enim.
                Vestibulum eget semper nisi. Quisque at lectus tempor, venenatis
                lectus in, pellentesque tortor. Phasellus vehicula elit nisi, ac
                auctor massa rhoncus id. Ut tincidunt molestie tincidunt.
            </p>
        </div>
        <div
            class="pl-24 transition-all duration-2000"
            :class="isVisible ? 'translate-x-0' : 'translate-x-1/2'"
        >
            <img
                src="/images/profile/profile.jpg"
                alt=""
                class="w-full shadow-[6px_6px_36px_rgba(0,0,0,0.2)]"
            />
        </div>
    </section>
</template>
