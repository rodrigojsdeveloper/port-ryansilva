import React from "react";
import CodeLine from "../CodeLine";

const IDE = ({ className }) => {
  return (
    <div className="-mx-4 sm:mx-0">
      <div className={`relative overflow-hidden flex bg-gray-secondary/70 !h-auto max-h-[none] ${className}`}>
        <div className="relative w-full flex flex-col">
          <div className="flex-none border-b border-stone-500/30">
            <div className="flex items-center h-8 space-x-1.5 px-3">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="relative min-h-0 flex-auto flex flex-col">
            <div className="w-full flex-auto flex min-h-0 overflow-auto">
              <div className="w-full relative flex-auto">
                <pre className="flex min-h-full text-sm leading-6">
                  <div
                    aria-hidden="true"
                    className="text-stone-600 flex-none py-4 pr-4 flex flex-col items-center"
                    style={{ width: "50px" }}
                  >
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                    <p>15</p>
                    <p>16</p>
                    <p>17</p>
                    <p>18</p>
                    <p>19</p>
                    <p>20</p>
                    <p>22</p>
                    <p>23</p>
                    <p>24</p>
                    <p>25</p>
                    <p>26</p>
                    <p>27</p>
                    <p>28</p>
                    <p>29</p>
                    <p>30</p>
                    <p>31</p>
                    <p>32</p>
                    <p>33</p>
                    <p>34</p>
                    <p>35</p>
                    <p>36</p>
                    <p>37</p>
                    <p>38</p>
                  </div>
                  <code className="lg:overflow-hidden flex-auto relative text-slate-50 pt-4 pb-4 px-4 overflow-auto flex flex-col">
                    <span className="token comment">{'"""@ryanbsdeveloper"""'}</span>
                    <span> </span>

                    <CodeLine>
                      <span className="token tag">
                        class{" "}
                        <span className="class">SobreMim</span><span className="rule">:</span>
                      </span>
                    </CodeLine>
                    <span> </span>

                    {/* __init__ */}
                    <CodeLine>
                      <span className="token tag space-1">
                        def{" "}
                        <span className="self">__init__</span>
                        <span className="rule">{'('}</span>
                        <span className="self">self</span>
                        <span className="rule">{')'}</span>
                        <span>{' -> '}</span>
                        <span className="self">None</span>
                        <span className="rule">:</span>
                      </span>
                    </CodeLine>
                    <CodeLine>
                      <span className="token self space-2">
                        self.
                        <span className="rule">idade</span>
                        <span className="tag">{' = '}</span><span />
                        <span>21</span>
                      </span>
                    </CodeLine>
                    <CodeLine>
                      <span className="token self space-2">
                        self.
                        <span className="rule">nome</span>
                        <span className="tag">{' = '}</span><span />
                        <span className="string">{'"Ryan"'}</span>
                      </span>
                    </CodeLine>
                    <CodeLine>
                      <span className="token self space-2">
                        self.
                        <span className="rule">profissao</span>
                        <span className="tag">{' = '}</span><span />
                        <span className="string">{'"Desenvolvedor fullStack"'}</span>
                      </span>
                    </CodeLine>
                    <CodeLine>
                      <span className="token self space-2">
                        self.
                        <span className="rule">anos_de_experiencia</span>
                        <span className="tag">{' = '}</span><span />
                        <span>5</span>
                      </span>
                    </CodeLine>

                    <span> </span>

                    {/* Função Hobby */}
                    <CodeLine>
                      <span className="token tag space-1">
                        def{" "}
                        <span className="func">hobby</span>
                        <span className="rule">{'('}</span>
                        <span className="self">self</span>
                        <span className="rule">{')'}</span>
                        <span>{' -> '}</span>
                        <span className="type">str</span>
                        <span className="rule">:</span>
                      </span>
                    </CodeLine>
                    <CodeLine>
                      <span className="token tag space-2">
                        return{" "}
                        <span className="string">{'"""'}</span>
                      </span>                      
                    </CodeLine>

                    {/* Texto Hobby */}
                    <div className="flex flex-col">
                      <CodeLine>
                        <span className="token tag space-3">
                          <span className="string">{'Eu gosto de jogar videogames, ser o camisa 10 no campo,'}</span>
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token tag space-3">
                          <span className="string">{'assistir séries e filmes'}</span>
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token tag space-3">
                          <span className="string">{'e sempre iniciar outro projeto pessoal que provavelmente não vou terminar kkk.'}</span>
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token tag space-2">
                          <span className="string">{'"""'}</span>
                        </span>
                      </CodeLine>
                    </div>

                    <span> </span>

                    {/* Função Detalhes */}
                    <CodeLine>
                      <span className="token tag space-1">
                        def{" "}
                        <span className="func">detalhes</span>
                        <span className="rule">{'('}</span>
                        <span className="self">self</span>
                        <span className="rule">{')'}</span>
                        <span>{' -> '}</span>
                        <span className="type">str</span>
                        <span className="rule">:</span>
                      </span>
                    </CodeLine>
                    <CodeLine>
                      <span className="token tag space-2">
                        return{" "}
                        <span className="string">{'"""'}</span>
                      </span>
                    </CodeLine>

                    {/* Texto Detalhes */}
                    <div className="flex flex-col">
                      <CodeLine>
                        <span className="token tag space-3">
                          <span className="string">{'Bom, você já sabe! Meu nome é Ryan.'}</span>
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token tag space-3">
                          <span className="string">{'Estou na área há 5 anos, sempre entregando serviços de qualidade'}</span>
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token tag space-3">
                          <span className="string">{'e me desenvolvendo profissionalmente.'}</span>
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token tag space-3">
                          <span className="string">{'Vejo esta área com muita gratidão pelas possibilidades'}</span>
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token tag space-3">
                          <span className="string">{'que ela nos oferece e por todo o crescimento que tive, tanto como profissional'}</span>
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token tag space-3">
                          <span className="string">{'quanto como pessoa, por estar aqui! Além disso, estou sempre em busca de'}</span>
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token tag space-3">
                          <span className="string">{'novos desafios e oportunidades para expandir meus conhecimentos e contribuir'}</span>
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token tag space-3">
                          <span className="string">{'ainda mais para o sucesso dos projetos em que me envolvo.'}</span>
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token tag space-2">
                          <span className="string">{'"""'}</span>
                        </span>
                      </CodeLine>
                    </div>

                    <span> </span>

                    {/* Função __ */}
                    <CodeLine>
                      <span className="token decorator space-1">
                        @
                        <span className="string class">staticmethod</span>
                      </span>
                    </CodeLine>
                    <CodeLine>
                      <span className="token tag space-1">
                        def{" "}
                        <span className="func">__</span>
                        <span className="rule">{'():'}</span>
                      </span>
                    </CodeLine>

                    {/* Texto __ */}
                    <div className="flex flex-col">
                      <CodeLine>
                        <span className="token comment space-2">
                          {'"""'}
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token comment space-3">
                          {'en: The only way to do something great is to love what you do.'}
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token comment space-3">
                          {'pt: A única maneira de fazer algo grandioso é amar o que você faz.'}
                        </span>
                      </CodeLine>
                      <CodeLine>
                        <span className="token comment space-2">
                          {'"""'}
                        </span>
                      </CodeLine>
                    </div>
                    <CodeLine>
                      <span className="token tag space-2">
                        pass
                      </span>
                    </CodeLine>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDE;
