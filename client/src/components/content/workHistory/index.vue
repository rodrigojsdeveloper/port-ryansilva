<template>
  <section class="w-11/12 md:w-3/5 lg:w-2/5 mt-10 mb-20">
    <h2
      class="text-md md:text-xl font-bold tracking-tight underline decoration-wavy decoration-yellow-600 dark:decoration-yellow-400 underline-offset-2 mb-6"
    >
      Work History
    </h2>
    <div class="flex flex-col gap-6">
      <!-- Exemplo de entrada de histórico de trabalho usando o componente HistoricoTrabalhoItem -->
      <HistoricoTrabalhoItem
        startDate="2022"
        endDate="present"
        company="Formidable"
        position="CTO"
        description="I head up the engineering delivery organization and manage the engineering leadership team. Formidable is a global design, product, and engineering agency with a team of over 80 employees servicing clients such as Puma, Starbucks, Walmart, The Atlantic, and TechStyle. As a software engineer, I contribute to our open-source software and provide high-level support to our engineering teams."
      />
      <!-- Repita o componente para cada entrada de histórico de trabalho -->
      <HistoricoTrabalhoItem
        startDate="2020"
        endDate="2022"
        company="Formidable"
        position="Director of Engineering"
        description="I managed client projects and a team of engineering managers with a focus on mobile and web applications. Worked with our Business Development team on sales, staffing, and client success."
      />
      <!-- Adicione mais entradas de histórico de trabalho conforme necessário -->
    </div>
  </section>
</template>

<script setup>
import HistoricoTrabalhoItem from "./item/index.vue"; // Importe o componente criado acima
</script>
