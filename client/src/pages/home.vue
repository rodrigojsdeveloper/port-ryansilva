<script setup>
import contentHome from "../components/content/home/index.vue";
import footerContent from "../components/footerContent/index.vue";
import headerMain from "../components/headerMain/index.vue";
import logoTipo from "../components/headerLogoTipo/index.vue";
import headerMobile from "../components/headerMobile/index.vue";
</script>
<template>
  <div>
    <logoTipo />
    <headerMobile />
    <div class="m-auto flex w-full flex-row justify-between gap-24 pt-28 md:px-[4em] max-w-[95em]">
      <headerMain />
      <div>
        <contentHome />
      </div>
    </div>
    <footerContent />
    <div class="bg-yellow-700">
      <p class="text-center">Portfolio em desenvolvimento</p>
    </div>

  </div>
</template>
