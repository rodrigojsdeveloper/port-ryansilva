import React from 'react';

const Qualifications = ({ activeTab='education' }) => {
  return (
    <div>
      <div style={{ display: activeTab === 'education' ? 'block' : 'none' }}>
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

    <div style={{ display: activeTab === 'work' ? 'block' : 'none' }}>
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
  );
};

export default Qualifications;
