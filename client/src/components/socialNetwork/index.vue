<template>
    <ul className="flex flex-wrap gap-3">{children}
        <SocialMedia v-for="(link, index) in links" :key="index" :link="link" />
    </ul>
</template>
  
<script setup>
import SocialMedia from '../socialMedia/index.vue'
import links from '../../utils/links'
</script>
  
  