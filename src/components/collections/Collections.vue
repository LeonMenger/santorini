<script setup lang="ts">
    import Product from './Product.vue';
    import { useVisibility } from '../../composables/visibility.ts';
    import { useTemplateRef } from 'vue';

    const sectionRef = useTemplateRef('section');
    const { isVisible } = useVisibility(sectionRef, 0.1);

    const products = [
        {
            title: 'Jóias',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nibh ex, ut porta dui placerat. Integer tempor aliquam cursus. Sed eget convallis tellus.',
            imageSrc: '/images/products/product-0.jpg',
        },
        {
            title: 'Roupas',
            description:
                'Suspendisse porttitor sapien vitae orci sagittis, a condimentum quam molestie. Ut ornare lacinia dolor, eu dapibus dui non. Sed ac vestibulum ante.',
            imageSrc: '/images/products/product-2.jpg',
        },
        {
            title: 'Acessórios',
            description:
                'am ultricies arcu sollicitudin fermentum scelerisque. Donec sed dictum nulla. Nunc congue velit luctus laoreet cursus. Fusce sit amet orci lectus. Sed magna mi, pharetra vitae eros at, tempus efficitur dolor.',
            imageSrc: '/images/products/product-1.jpg',
        },
    ];
</script>
<template>
    <section
        ref="section"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
        class="transition-all duration-2000"
    >
        <ul class="grid grid-cols-3 gap-10 px-24 mt-24">
            <Product
                v-for="product in products"
                :title="product.title"
                :description="product.description"
                :image-src="product.imageSrc"
            />
        </ul>
    </section>
</template>
