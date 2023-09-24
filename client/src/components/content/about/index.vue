<script setup>
import { ref } from "vue";

const githubLink = ref('https://github.com/ryanbsdeveloper')
const linkedinLink = ref('https://www.linkedin.com/in/ryanbarbosasilva/')

import euImage from "../../../assets/eu.png";

</script>
<template>
  <div>
    <div class="flex flex-row items-center gap-4 md:gap-6 my-12 md:mt-20">
      <img class="rounded-full h-24 w-24 md:h-28 md:w-28" :src="euImage" alt="Carlos Kelly Profile Image" />
      <div class="flex flex-col gap-2">
        <div>
          <h1
            class="text-3xl md:text-4xl tracking-tighter font-bold -ml-0.5 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff4444] bg-clip-text bg-gradient-to-r dark:from-yellow-400 dark:to-yellow-500">
            Ryan Barbosa Silva
          </h1>
          <h4>Desenvolvedor FullStack</h4>
        </div>
        <section class="flex flex-row gap-6">
          <a title="GitHub" class="group" :href="githubLink" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
              <path fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a title="LinkedIn" class="group" :href="linkedinLink" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
              <path fill="currentColor"
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
        </section>
      </div>
    </div>
    <div>
      <p class="text-sm">
        Sou um especialista em planejamento, documentação e implementação de processos, com sólida expertise em Python.
        Minhas habilidades avançadas abrangem análise, desenvolvimento, integração, consultoria e suporte de sistemas.
        Além disso, sou proficiente em desenvolvimento front-end, com foco em React, Vue e Next.js, e acumulei ampla
        experiência na plataforma AWS. Minha competência em práticas de DevOps inclui a criação de pipelines de CI/CD e
        automação de infraestrutura, refletindo meu compromisso constante com a melhoria técnica para entregar resultados
        excepcionais.
      </p>
    </div>
  </div>
</template>
<style>
.ktbZfG {
  width: 100%;
  max-width: 1400px;
}

.ktbZfG>div {
  width: 100%;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  padding: 0 3em;
}

.ktbZfG>div>p:nth-child(1) {
  font-weight: 700;
  max-width: 11em;
  font-size: 18px;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.ktbZfG>div>hr {
  width: 3px;
  height: 102px;
  border: none;
  /* background-color: var(--color-blue); */
  margin: 0px 15px;
}

.ktbZfG>div>p:nth-child(3) {
  width: 100%;
  font-size: 18px;
  color: gray;
  max-width: 19em;
}

.ktbZfG>menu {
  display: flex;
  /* grid-template-columns: repeat(3, 33.33%); */
  /* grid-template-rows: repeat(2, 50%); */
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
}

.dFyEuu {
  width: 100%;
  max-width: 328px;
  height: 180px;
  border-radius: 4px;
  border: 2px solid #0000001c;
  padding: 20px;
}

.dFyEuu>h3 {
  font-size: 20px;
  font-weight: 600;
  color: #ff4444;
  padding-bottom: 20px;
}

.dFyEuu>p {
  font-size: 14px;
  font-weight: 500;
  color: gray;
}</style>