import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './skills.css';

const Skills = () => {
  return (
    <>
      <Navbar />
      <section class="skills">
        <div class="max-width">
          <h2 class="title">Minhas Skills</h2>
          <div class="skills-content">
            <div class="column left">
              <div class="text">Minhas habilidades & tecnologias.</div>
              <p>
                Sou um "aprendedor" e a cada dia busco evoluir cada vez mais nas
                tecnologias que tenho conhecimento. Ao lado é possível ver a
                lista de tecnologia que tenho conhecimento assim como também o
                nível atualizado que me encontro em cada uma delas.
              </p>
            </div>
            <div class="column right">
              <div class="bars">
                <div class="info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div class="line html"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>CSS</span>
                  <span>60%</span>
                </div>
                <div class="line css"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>JavaScript</span>
                  <span>80%</span>
                </div>
                <div class="line js"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>React</span>
                  <span>90%</span>
                </div>
                <div class="line react"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Jest</span>
                  <span>70%</span>
                </div>
                <div class="line jest"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>MYSQL</span>
                  <span>60%</span>
                </div>
                <div class="line mysql"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
