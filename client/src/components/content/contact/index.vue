<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<template>
  <div>
    <div class="pb-16">
      <div class="w-full relative ">
        <div class="h-[90%] w-full opacity-50 top-[-90px] absolute z-0 bg-center	bg-[url('/src/assets/laptop-human.jpg')]">
        </div>
        <div class="relative text-center text-white pt-6">
          <h1 class="text-4xl font-semibold">Contate-me</h1>
          <p>Sinta-se à vontade para entrar em contato e discutiremos como podemos trabalhar juntos.</p>
        </div>
        <div
          class="bg-black-invisible-2 rounded-md bg-opacity-80 md:m-auto px-7 mx-10 w-auto md:w-[650px] md:h-[630px] h-[735px] top-10 flex flex-col items-center justify-center gap-14 relative z-40">
          <div class="w-full">
            <button @click="router.push('/')" type="button"
              class="flex items-center justify-center px-5 py-2 text-sm text-white border-primary-1 transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto ">
              <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              <span>Voltar ao portfólio</span>
            </button>
          </div>
          <form class="w-full">
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block tracking-wide text-white text-sm font-bold mb-2" for="grid-first-name">
                  Primeiro nome
                </label>
                <input
                  class="focus:border-primary-1 appearance-none block w-full bg-black-invisible text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-zinc-800"
                  id="grid-first-name" type="text" placeholder="Ryan">
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block tracking-wide text-white text-sm font-bold mb-2" for="grid-last-name">
                  Segundo nome
                </label>
                <input
                  class="focus:border-primary-1 appearance-none block w-full bg-black-invisible text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-zinc-800"
                  id="grid-last-name" type="text" placeholder="Barbosa">
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3">
                <label class="block tracking-wide text-white text-sm font-bold mb-2" for="grid-password">
                  E-mail
                </label>
                <input
                  class="focus:border-primary-1 appearance-none block w-full bg-black-invisible text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-zinc-800"
                  id="email" type="email" placeholder="email@email.com">
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3">
                <label class="block tracking-wide text-white text-sm font-bold mb-2" for="grid-password">
                  Mensagem
                </label>
                <textarea
                  class="focus:border-primary-1 no-resize appearance-none block w-full bg-black-invisible text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-zinc-800 h-48 resize-none"
                  id="message" placeholder="Escreva aqui sua mensagem"></textarea>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button
                  class="shadow bg-primary-1 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button">
                  Enviar mensagem
                </button>
              </div>
              <div class="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- <div class="grid md:grid-flow-col md:auto-cols-max justify-evenly md:gap-28 md:pt-0 pt-10 pb-2 gap-10">
      <div class="w-64 flex flex-col items-center">
        <div class="p-3 w-max rounded-md bg-black-invisible-2">
          <svg class="text-gray-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
            <path fill="currentColor"
              d="M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5zm-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51c-.13.16-.43.15-.56.05l-4.37-3.73l-2.14 1.95l-2.13-1.95l-4.37 3.73c-.13.1-.43.11-.56-.05c-.14-.15-.06-.37.06-.51l3.9-4.06l-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04l6.25-5.04c.28-.24.62-.4.95-.07z" />
          </svg>
        </div>
        <h1 class="mt-1 text-lg font-bold text-white">Email: </h1>
        <p class="mb-1 text-base w-auto text-center">Meu email profissional</p>
        <a class="text-base text-primary-1 hover:underline" href="">ryanbsdeveloper@email.com</a>
      </div>
      <div class="w-64 flex flex-col items-center">
        <div class="p-3 w-max rounded-md bg-black-invisible-2">
          <svg class="text-gray-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M4.75 1.875a2.125 2.125 0 1 0 0 4.25a2.125 2.125 0 0 0 0-4.25Zm-2 6A.125.125 0 0 0 2.625 8v13c0 .069.056.125.125.125h4A.125.125 0 0 0 6.875 21V8a.125.125 0 0 0-.125-.125h-4Zm6.5 0A.125.125 0 0 0 9.125 8v13c0 .069.056.125.125.125h4a.125.125 0 0 0 .125-.125v-7a1.875 1.875 0 1 1 3.75 0v7c0 .069.056.125.125.125h4a.125.125 0 0 0 .125-.125v-8.62c0-2.427-2.11-4.325-4.525-4.106a7.168 7.168 0 0 0-2.169.548l-1.306.56V8a.125.125 0 0 0-.125-.125h-4Z" />
          </svg>
        </div>
        <h1 class="mt-1 text-lg font-bold text-white">Linkedin: </h1>
        <p class="mb-1 text-base w-auto text-center">Conecte-se comigo!</p>
        <button type="button" class="text-primary-1 border border-primary-1 font-medium rounded-lg text-sm px-5 py-1 text-center ">Acessar</button>
      </div>
      <div class="w-64 flex flex-col items-center">
        <div class="p-3 w-max rounded-md bg-black-invisible-2">
          <svg class="text-gray-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
          </svg>
        </div>
        <h1 class="mt-1 text-lg font-bold text-white">Discord: </h1>
        <p class="mb-1 text-base w-auto text-center">Venha ao meu servidor</p>
        <button type="button" class="text-primary-1 border border-primary-1 font-medium rounded-lg text-sm px-5 py-1 text-center ">Acessar</button>
      </div>
    </div> -->
  </div></template>
