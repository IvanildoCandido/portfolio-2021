import React from 'react';
import { Link } from 'react-router-dom';
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, ratione error est recusandae consequatur, iusto
                illum deleniti quidem impedit, quos quaerat quis minima sequi.
                Cupiditate recusandae laudantium esse, harum animi aspernatur
                quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem
                illum. Ad delectus natus aut hic explicabo minus quod.
              </p>
              <Link to="/">Saiba mais</Link>
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
                <div class="line php"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Jest</span>
                  <span>70%</span>
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
