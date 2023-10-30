<script setup>
import { ref, computed, onMounted } from "vue";
import card from "../../card/index.vue"

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
  <div class="mt-28">
    <div class="flex items-center mb-4">
      <p class="font-bold text-white text-xl max-w-[11em]">
        Meus serviços
      </p>
      <hr class="w-[2px] bg-gray-400 h-[50px] border-none mx-4">
      <p class="text-gray-1 text-lg max-w-[19em]">
        Metodologias que utilizo no meu trabalho.
      </p>
    </div>
    <div class="flex flex-row-reverse items-center">
      <div class="cursor-pointer flex items-center mb-2 gap-2 bg-black-invisible w-max px-4 rounded" @click="openMet">
        <span class="font-bold text-sm text-gray-300"
          v-text="statusMet ? 'Retrair metodologias' : 'Expandir metodologias'"></span>
        <svg class="transition duration-300 transform" :class="{ 'rotate-180': !statusMet }"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#ff4444"
            d="M11.29 8.71L6.7 13.3a.996.996 0 1 0 1.41 1.41L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0z" />
        </svg>
      </div>
    </div>
    <div class="flex flex-wrap" v-if="statusMet">
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
  </div></template>
