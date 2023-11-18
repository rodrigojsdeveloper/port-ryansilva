<script setup>
import { ref, computed, onMounted } from "vue";
import card from "../../card/index.vue"
import group from "../../../../assets/group.png";

const statusMet = ref(false);
const isMobile = computed(() => {
  return window.innerWidth <= 1000;
});

function openMet() {
  statusMet.value = !statusMet.value;
}

onMounted(() => {
  statusMet.value = !isMobile.value;
});
</script>
<template>
  <section class="mt-28 scrolllock">
    <div class="locked">
      <div class="mb-4">
        <p class="font-bold mb-4 text-white text-2xl max-w-[11em]">
          Meus serviços
        </p>
        <p class="text-gray-1 text-base max-w-[19em]">
          Metodologias que utilizo no meu trabalho.
        </p>
      </div>
      <img class="fill-red-500" :src="group" alt="Ryan Foto" />
      <!-- <div class="flex flex-row-reverse items-center">
        <div class="cursor-pointer flex items-center mb-2 gap-2 bg-black-invisible w-max px-4 rounded" @click="openMet">
          <span class="font-bold text-sm text-gray-300"
            v-text="statusMet ? 'Retrair metodologias' : 'Expandir metodologias'"></span>
          <svg class="transition duration-300 transform" :class="{ 'rotate-180': !statusMet }"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#3019b2"
              d="M11.29 8.71L6.7 13.3a.996.996 0 1 0 1.41 1.41L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0z" />
          </svg>
        </div>
      </div> -->
    </div>
    <div class="scrollblock" v-if="statusMet">
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
    padding: 80px 20px;
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
@media screen and (min-width: 960px){
section.scrolllock .scrollblock > div {
    min-height: 80vh;
}}
section.scrolllock .scrollblock p {
    margin: 32px 0;
}
</style>
