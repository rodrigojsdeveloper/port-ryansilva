<template>
    <carousel :items-to-show="2">
        <slide v-for="slide in 6" :key="slide">
            <div class="w-[20px h]">
                {{slide}}
            </div>
        </slide>

        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
</template>
  
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import avaliation from '../avaliation/index.vue';

export default {
    name: 'App',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        avaliation
    },
}
</script>
  