<template>
  <div class="mt-28">
    <div class="flex items-center mb-4">
      <p class="font-bold text-white text-xl max-w-[11em]">
        Qualificações
      </p>
      <hr class="w-[2px] bg-gray-400 h-[50px] border-none mx-4">
      <p class="text-gray-1 text-lg max-w-[19em]">
        Minha experiência educacional e profissional
      </p>
    </div>
    <div class="container-qualifications pb-20 px-5 max-w-2xl mx-auto">
      <div class="qualification_tabs flex justify-evenly mb-4 mt-4">
        <div class="text-gray-300 flex items-center gap-2 text-lg cursor-pointer transition-colors duration-500 hover:text-primary-1 bg-black-invisible px-4 py-1 rounded"
          :class="{ 'active': activeTab === 'education' }" @click="setActiveTab('education')">
          <span v-if="activeTab === 'education'" class="w-2 h-2 rounded-full bg-primary-1"></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M8.82 17L13 19.28V22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v8.54l-1.5-.82L8.82 17M24 17l-5.5-3l-5.5 3l5.5 3l5.5-3m-9 2.09v2L18.5 23l3.5-1.91v-2L18.5 21L15 19.09Z" />
          </svg>Educação
        </div>
  
        <div class="text-gray-300 flex items-center  gap-2 text-lg cursor-pointer transition-colors duration-500 hover:text-primary-1 bg-black-invisible px-4 py-1 rounded"
          :class="{ 'active': activeTab === 'work' }" @click="setActiveTab('work')">
          <span v-if="activeTab === 'work'" class="w-2 h-2 rounded-full bg-primary-1"></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="m14.16 10.4l-5-3.57c-.7-.5-1.63-.5-2.32 0l-5 3.57c-.53.38-.84.98-.84 1.63V20c0 .55.45 1 1 1h4v-6h4v6h4c.55 0 1-.45 1-1v-7.97c0-.65-.31-1.25-.84-1.63z" />
            <path fill="currentColor"
              d="M21.03 3h-9.06C10.88 3 10 3.88 10 4.97l.09.09c.08.05.16.09.24.14l5 3.57c.76.54 1.3 1.34 1.54 2.23H19v2h-2v2h2v2h-2v4h4.03c1.09 0 1.97-.88 1.97-1.97V4.97C23 3.88 22.12 3 21.03 3zM19 9h-2V7h2v2z" />
          </svg>Trabalho
        </div>
      </div>
      <div>
        <div :style="{ display: activeTab === 'education' ? 'block' : 'none' }">
          <div class="qualification_data">
            <div></div>
            <div>
              <span class="qualification_circle"></span>
              <span class="qualification_line"></span>
            </div>
            <div class="text-data">
              <span class="qualification_title">Uninove (Ensino Superior)</span>
              <span class="qualification_subtitle">Analíse e desenvolvimento de sistemas (ADS)</span>
              <div class="flex gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M4 9V7a2 2 0 0 1 2-2h2M4 9h16m0 0V7a2 2 0 0 0-2-2h-2m0 0V3m0 2H8m0-2v2" />
                </svg> 2023 - 2026
              </div>
            </div>
          </div>
          <div class="qualification_data">
            <div class="text-data">
              <span class="qualification_title">Cursos Profissionais online</span>
              <span class="qualification_subtitle">Cursos de tecnologia</span>
              <div class="flex gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M4 9V7a2 2 0 0 1 2-2h2M4 9h16m0 0V7a2 2 0 0 0-2-2h-2m0 0V3m0 2H8m0-2v2" />
                </svg> 2019 - Presente
              </div>
            </div>
            <div>
              <span class="qualification_circle"></span>
              <span class="qualification_line"></span>
            </div>
          </div>
  
          <div class="qualification_data">
            <div></div>
            <div>
              <span class="qualification_circle"></span>
              <span class="qualification_line"></span>
            </div>
            <div class="text-data">
              <span class="qualification_title">Ensino médio</span>
              <span class="qualification_subtitle">Escola do Governo de São Paulo</span>
              <div class="flex gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M4 9V7a2 2 0 0 1 2-2h2M4 9h16m0 0V7a2 2 0 0 0-2-2h-2m0 0V3m0 2H8m0-2v2" />
                </svg> 2014 - 2021
              </div>
            </div>
          </div>
        </div>
  
        <div :style="{ display: activeTab === 'work' ? 'block' : 'none' }">
          <div class="qualification_data">
            <div></div>
  
            <div>
              <span class="qualification_circle"></span>
              <span class="qualification_line"></span>
            </div>
  
            <div>
              <h3 class="qualification_title">VISIE Padrões Web</h3>
              <span class="qualification_subtitle">FullStack Developer</span>
              <div class="flex gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M4 9V7a2 2 0 0 1 2-2h2M4 9h16m0 0V7a2 2 0 0 0-2-2h-2m0 0V3m0 2H8m0-2v2" />
                </svg> Agosto 2022 - Presente
              </div>
            </div>
          </div>
  
          <div class="qualification_data">
            <div>
              <h3 class="qualification_title">Freelancer</h3>
              <span class="qualification_subtitle">Desenvolvedor de Software</span>
              <div class="flex gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M4 9V7a2 2 0 0 1 2-2h2M4 9h16m0 0V7a2 2 0 0 0-2-2h-2m0 0V3m0 2H8m0-2v2" />
                </svg> Outubro 2021
              </div>
            </div>
  
            <div>
              <span class="qualification_circle"></span>
              <span class="qualification_line"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('education')

function setActiveTab(tab) {
  activeTab.value = tab
}
</script>

<style scoped>
.container-qualifications {
  padding: 0 5em 2em 1em;
  max-width: 700px;
  margin: auto;
}

.container-qualifications h1 {
  color: white;
  text-align: center;
}

.container-qualifications p {
  color: gray;
  text-align: center;
}

.qualification_tabs {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 4px;
  margin-top: 4px;
}


.qualification_data {
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
  justify-items: center;
}

.qualification_title {
  color: white;
  font-size: calc(0.7em + .5vw);
}

.qualification_subtitle {
  display: inline-block;
  font-size: 12px;
  color: gray;
  margin-bottom: 5px;
}


.qualification_circle {
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: var(--color-primary);
  border-radius: 50%;
}

.qualification_line {
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--color-primary);
  transform: translate(6px, -7px);
}
</style>
