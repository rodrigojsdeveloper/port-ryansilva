<script setup>
import { ref } from "vue";

const githubLink = ref('https://github.com/ryanbsdeveloper')
const linkedinLink = ref('https://www.linkedin.com/in/ryanbarbosasilva/')

import euImage from "../../assets/eu.png";

</script>
<template>
  <div class="sticky top-0 z-10 h-20 w-[100%] min-w-[180px] max-w-[16em] pt-8 max-lg:mr-0 max-lg:hidden">
    <img class="rounded-full h-24 w-24 md:h-30 md:w-30" :src="euImage" alt="Ryan Foto" />
    <div class="mb-6">
      <div>
        <h1
          class="text-2xl md:text-3xl tracking-tighter font-bold -ml-0.5 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff4444] bg-clip-text bg-gradient-to-r">
          Ryan Barbosa Silva
        </h1>
        <p class="cursor-pointer text-sm text-primary-1 my-2" title="GitHub" :href="githubLink" target="_blank">@ryanbsdeveloper</p>
        <p>Desenvolvedor FullStack</p>
      </div>
    </div>
    <div class="my-3 block h-px w-full bg-gray-1"></div>
    <div class="my-6">
      <!-- <div class="flex items-center gap-3 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="m21.743 12.331l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z" />
        </svg>
        Inicio
      </div> -->
      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="m12 22l-.25-3h-.25q-3.55 0-6.025-2.475T3 10.5q0-3.55 2.475-6.025T11.5 2q1.775 0 3.313.662t2.7 1.825q1.162 1.163 1.824 2.7T20 10.5q0 1.875-.613 3.6t-1.675 3.2q-1.062 1.475-2.525 2.675T12 22Zm-.525-6.025q.425 0 .725-.3t.3-.725q0-.425-.3-.725t-.725-.3q-.425 0-.725.3t-.3.725q0 .425.3.725t.725.3ZM10.75 12.8h1.5q0-.75.15-1.05t.95-1.1q.45-.45.75-.975t.3-1.125q0-1.275-.863-1.913T11.5 6q-1.1 0-1.85.613T8.6 8.1l1.4.55q.125-.425.475-.838T11.5 7.4q.675 0 1.012.375t.338.825q0 .425-.25.763t-.6.687q-.875.75-1.063 1.188T10.75 12.8Z" />
        </svg>
        <div class="cursor-pointer">
          <p class="text-xs text-gray-300">
            Algum assunto?
          </p>
          <p>
            Fale comigo!
          </p>
        </div>
      </div>
    </div>
    <div class="my-3 block h-px w-full bg-gray-1"></div>
    <div class="text-xs flex">
      <span class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M10 16h4q.425 0 .713-.288T15 15v-2h-2v1h-2v-4h2v1h2V9q0-.425-.288-.713T14 8h-4q-.425 0-.713.288T9 9v6q0 .425.288.713T10 16Zm2 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z" />
        </svg>
        <p>
          2023 - Ryan Barbosa Silva
        </p>
      </span>
    </div>
</div></template>
  