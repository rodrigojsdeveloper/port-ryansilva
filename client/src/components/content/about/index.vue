<script setup>
</script>
<template>
  <div>
    <div>
      <div class="flex items-center mb-4">
        <p class="font-bold text-white text-xl max-w-[11em]">
          Sobre mim
        </p>
        <hr class="w-[2px] bg-gray-400 h-[50px] border-none mx-4">
        <p class="text-gray-1 text-lg max-w-[19em]">
          Quem é Ryan Barbosa Silva?
        </p>
      </div>
      <p>Venha conhecer um pouco mais sobre mim, sou o Ryan. Atuo como colaborador na Visie, onde aplico minha sólida
        experiência em planejamento, documentação e implementação de processos, com ênfase em Python. Minhas habilidades
        avançadas englobam análise, desenvolvimento, integração, consultoria e suporte de sistemas.

        No desenvolvimento full-stack, possuo conhecimento profundo em tecnologias como React, Vue e Next.js, cobrindo
        tanto o front-end quanto o back-end. Minha experiência na AWS amplia meu domínio em soluções baseadas em nuvem.

        Como entusiasta de práticas DevOps, destaco-me na criação de pipelines de CI/CD e automação de infraestrutura,
        sempre buscando aprimorar minhas habilidades. Estou comprometido em contribuir de forma significativa para o
        sucesso da <a href="#" class="text-primary-1 underline dark:text-blue-500 hover:no-underline"
          data-popover-target="popover-image">Visie</a>
        , aplicando meu conhecimento e expertise em cada projeto.

        Sinta-se à vontade para explorar mais sobre minha jornada.</p>
      <div data-popover id="popover-image" role="tooltip"
        class="absolute z-[1000] invisible inline-block md:text-sm text-xs text-gray-500 transition-opacity duration-300 bg-black-invisible-2 border-2 border-black rounded-lg shadow-sm opacity-0 md:w-96 w-80 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
        <div class="grid grid-cols-5">
          <div class="col-span-3 p-3">
            <div class="space-y-2">
              <h3 class="font-semibold text-gray-200 ">Tecnologia para simplificar a vida</h3>
              <p class="text-gray-100 ">Tecnologia segura, rápida e fácil de usar, que faz com que você tenha tempo para se
                dedicar à inovação.</p>
              <a href="https://visie.com.br/" target="_blank"
                class="flex items-center font-medium text-primary-1 hover:underline">Saiba mais <svg
                  class="w-2 h-2 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4" />
                </svg></a>
            </div>
          </div>
          <div class="m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="md:w-32 w-20" viewBox="0 0 136 39" fill="none">
              <g clip-path="url(#clip0_545_57)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M31.6736 27.0454C27.0943 26.7616 22.9162 24.3203 20.4944 20.5091L19.9416 19.6382L20.6314 20.1324C22.8966 21.7665 25.5239 22.6569 28.2 22.8232C31.8009 23.0483 35.4897 21.9524 38.5231 19.5893C38.572 16.7615 37.9996 14.0511 36.933 11.6L36.8792 11.7125C36.0524 13.3319 34.9271 14.7752 33.5377 15.9983C30.1032 19.0365 25.4211 20.2645 21.0179 19.2762L20.0101 19.0512L20.8418 18.9191C27.3096 17.8623 32.2852 12.5295 33.1022 5.86603C31.2187 3.91884 28.9192 2.36794 26.336 1.35031L26.3751 1.46773C26.9378 3.19965 27.1628 5.00985 27.0503 6.8592C26.7616 11.4434 24.3203 15.6216 20.5091 18.0433L19.6383 18.5962L20.1324 17.9063C23.9583 12.5882 23.7088 5.29362 19.5795 0.00978257C16.7517 -0.0391418 14.0511 0.533273 11.6 1.59983L11.7125 1.65364C13.3319 2.48046 14.7752 3.60573 15.9983 4.99518C19.0365 8.42967 20.2645 13.1166 19.2811 17.5247L19.0561 18.5277L18.9191 17.6959C17.8623 11.2281 12.5295 6.24764 5.87093 5.4306C3.92374 7.31419 2.37283 9.61364 1.35521 12.2017L1.47263 12.1626C3.20455 11.6 5.01475 11.3749 6.86899 11.4874C11.4434 11.7761 15.6216 14.2174 18.0433 18.0286L18.5962 18.8995L17.9063 18.4054C12.5882 14.5795 5.30341 14.829 0.00978711 18.9582C-0.0391373 21.786 0.53817 24.4867 1.60472 26.9378L1.66343 26.8252C2.48536 25.2058 3.61062 23.7626 5.00007 22.5395C8.43457 19.5062 13.1166 18.2781 17.5247 19.2615L18.5326 19.4817L17.696 19.6187C11.2281 20.6754 6.25254 26.0082 5.4355 32.6668C7.31909 34.614 9.61854 36.1649 12.2017 37.1825L12.1626 37.0651C11.6 35.3332 11.3749 33.523 11.4923 31.6736C11.7761 27.0943 14.2174 22.9162 18.0286 20.4944L18.8995 19.9416L18.4054 20.6314C14.5795 25.9495 14.8339 33.2343 18.9582 38.5231C21.786 38.572 24.4867 37.9996 26.9378 36.933L26.8252 36.8792C25.2058 36.0524 23.7675 34.9271 22.5395 33.5377C19.5062 30.1032 18.2782 25.4211 19.2615 21.013L19.4866 20.0052L19.6187 20.8418C20.6754 27.3096 26.0082 32.2852 32.6668 33.1022C34.614 31.2186 36.1649 28.9192 37.1874 26.336L37.0651 26.3751C35.3332 26.9378 33.523 27.1628 31.6736 27.0454Z"
                  fill="#F71E2E"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M60.9158 15.739L57.9363 24.061L54.9176 15.6509L52.0996 8.78682H46.4243L55.1622 29.6971H60.7103L69.3454 8.9287L69.4041 8.78682H63.7289L60.9158 15.739Z"
                  fill="#F71E2E"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M72.7946 29.6139H78.0099V8.74279H72.7946V29.6139Z"
                  fill="#F71E2E"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M91.9289 16.7615C89.4582 16.6 88.2596 15.8955 88.2596 14.6088C88.2596 13.371 89.5659 12.6665 91.8409 12.6665C93.9495 12.6665 95.4662 13.2243 96.7724 14.4767L96.8556 14.555L99.7764 11.0471L99.703 10.9835C97.5259 9.03633 95.2215 8.24376 91.7577 8.24376C89.6539 8.24376 87.5747 8.76725 86.0629 9.68703C84.1451 10.8465 83.1323 12.6078 83.1323 14.7801C83.1323 19.8584 88.4308 21.0228 91.5914 21.2674C94.4485 21.4338 95.5102 21.9915 95.5102 23.332C95.5102 23.8311 95.2949 24.3007 94.8986 24.6921C94.2431 25.333 93.1178 25.7147 91.9681 25.6902C89.8154 25.6511 86.5326 24.4964 85.0746 22.8477L84.9866 22.7449L82.4034 26.5562L82.4621 26.6149C85.5345 29.8732 88.8027 30.3233 91.8849 30.3233C94.6198 30.3233 96.8996 29.6139 98.4652 28.2783C99.8938 27.0601 100.682 25.3477 100.682 23.4592C100.682 18.0286 96.0092 17.0257 91.9289 16.7615Z"
                  fill="#F71E2E"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M104.904 29.6139H110.114V8.74279H104.904V29.6139Z"
                  fill="#F71E2E"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M120.232 16.7175C120.956 14.3006 122.962 12.916 125.75 12.916C128.671 12.916 130.535 14.3055 130.883 16.7175H120.232ZM133.407 11.2037C131.616 9.23693 128.911 8.19973 125.589 8.19973C119.102 8.19973 114.742 12.5687 114.742 19.0756C114.742 25.9104 119.038 30.157 125.956 30.157C129.4 30.157 132.756 28.8654 134.723 26.7861L134.796 26.7127L131.45 23.3516L131.377 23.4299C130.212 24.653 127.761 25.3135 126.039 25.3135C122.776 25.3135 120.525 23.7185 120.134 21.1402H135.892L135.902 21.0473C136.289 16.8251 135.428 13.42 133.407 11.2037Z"
                  fill="#F71E2E"></path>
              </g>
              <defs>
                <clipPath id="clip0_545_57">
                  <rect width="136" height="38.5328" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div data-popper-arrow></div>
      </div>
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
}
</style>