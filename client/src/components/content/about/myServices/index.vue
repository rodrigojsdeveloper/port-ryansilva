<script setup>
import { ref, computed, onMounted } from "vue";
import card from "../../card/index.vue"
import groupImage from "../../../../assets/group.png";

const statusMet = ref(false);
const isMobile = computed(() => {
  return window.innerWidth <= 1000;
});



onMounted(() => {
  statusMet.value = !isMobile.value;
});
</script>
<template>
  <section class="mt-28 scrolllock">
    <div class="locked mt-1 gap-10">
      <div class="mb-24 md:relative top-10">
        <!-- <img class="left-72 w-28 relative" :src="groupImage" alt="Ryan Foto" /> -->
        <p class="font-bold mb-2 text-white text-2xl max-w-[11em]">
          Meus serviços
        </p>
        <p class="text-gray-1 text-base">
          Metodologias que utilizo no meu dia a dia de trabalho.
        </p>
      </div>
    </div>
    <div class="scrollblock">
      <card header="Desenvolvimento Web" content="Um desenvolvimento focado na criação de sites, páginas únicas,
            E-commerce ou outras aplicações. Promovendo uma boa experiência e otimização de websites.">
      </card>
      <card header="Desenvolvimento Responsivo" content="Aplicação web responsiva, disponível para todos os dispositivos móveis, tornando o site mais prático e
            acessível. Ou aplicações 100% móveis, como apps.">
      </card>
      <card header="Experiência do Usuário" content="Aplicações focadas em um conjunto de elementos e fatores de um serviço, produto ou sistema que visam promover
            uma boa experiência para o usuário.">
      </card>
      <card header="Desenvolvimento Backend" content="Um desenvolvimento focado nas ações que os usuários realizam no frontend,
            manipulados por aplicativos ou software e a criação de APIs.">
      </card>
      <card header="Desenvolvimento Móvel" content="Um desenvolvimento focado em tablets, smartphones e outros dispositivos móveis. Visando
            promover uma boa experiência do usuário em telas menores.">
      </card>
      <card header="DevOps" content="Introduzir processos, ferramentas e metodologias para atender às necessidades ao longo do ciclo de vida do meu
            software, em
            todos os processos.">
      </card>
    </div>
  </section>
</template>
<style>
@media screen and (min-width: 960px) {
  section.scrolllock {
    display: inline-flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}
@media screen and (min-width: 960px){
section.scrolllock .locked {
    position: sticky;
    top: 160px;
    min-width: 441px;
}}
@media screen and (min-width: 960px){
section.scrolllock .scrollblock {
    max-width: 533px;
}}

section.scrolllock .scrollblock p {
    margin: 32px 0;
}
</style>
