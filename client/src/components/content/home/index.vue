<script setup>
import logoTipo from "../../photo/index.vue";
import about from "../about/index.vue";
import card from "../card/index.vue";
</script>
<template>
  <div>
    <div class="flex flex-col w-3/4 md:px-32 md:w-2/3 m-auto">
      <logoTipo />
      <about/>
      <div>
        <div class="flex items-center">
          <p class="font-bold text-white text-lg max-w-[11em]">
            Conheça meus serviços
          </p>
          <hr class="w-3 h-[102px] border-none mx-4">
          <p class="text-gray-500 text-lg max-w-[19em]">
            Metodologias que utilizo no meu trabalho.
          </p>
        </div>
        <div class="flex flex-wrap">
          <card
            header="Desenvolvimento Web"
            content="Um desenvolvimento focado na criação de sites, páginas únicas,
            E-commerce ou outras aplicações. Promovendo uma boa experiência e otimização de websites."
          >
          </card>
          <card
            header="Desenvolvimento Responsivo"
            content="Aplicação web responsiva, disponível para todos os dispositivos móveis, tornando o site mais prático e
            acessível. Ou aplicações 100% móveis, como apps."
          >
          </card>
          <card
            header="Experiência do Usuário"
            content="Aplicações focadas em um conjunto de elementos e fatores de um serviço, produto ou sistema que visam promover
            uma boa experiência para o usuário."
          >
          </card>
          <card
            header="Desenvolvimento Backend"
            content="Um desenvolvimento focado nas ações que os usuários realizam no frontend,
            manipulados por aplicativos ou software e a criação de APIs."
          >
          </card>
          <card
            header="Desenvolvimento Móvel"
            content="Um desenvolvimento focado em tablets, smartphones e outros dispositivos móveis. Visando
            promover uma boa experiência do usuário em telas menores."
          >
          </card>
          <card
            header="DevOps"
            content="Introduzir processos, ferramentas e metodologias para atender às necessidades ao longo do ciclo de vida do meu
            software, em
            todos os processos."
          >
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
