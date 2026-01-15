<script setup lang="ts">
    defineProps<{ imageSrc: string; title: string; description: string }>();
</script>
<template>
    <li class="bg-white overflow-hidden shadow-[6px_6px_36px_rgba(0,0,0,0.2)]">
        <div class="aspect-5/6 overflow-hidden">
            <img
                :src="imageSrc"
                alt=""
                class="object-cover w-full h-full antialiased"
            />
        </div>
        <div class="p-5">
            <h3 class="text-xl text-[#634427]">{{ title }}</h3>
            <p class="text-zinc-500 text-justify">{{ description }}</p>
        </div>
    </li>
</template>
