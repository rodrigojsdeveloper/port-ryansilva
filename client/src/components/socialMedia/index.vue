<template>
    <li
        class="w-full max-w-fit rounded-def border border-solid border-line px-2.5 py-2 text-sm font-medium text-color-paragraphy hover:bg-line">
        <a :target="'_blank'" :href="link.link" class="flex flex-row items-center gap-1.5">
        <img :src="link.img" :alt="`${link.name} social media`" priority />
        {{ link.name }}
        </a>
    </li>
</template>
  
<script setup>
// import Image from 'next/image'
// import Link from 'next/link'

const link = defineProps(['link'])
</script>
  