import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './services.css';

const Services = () => {
  return (
    <>
      <Navbar />
      <section class="services">
        <div class="max-width">
          <h2 class="title">Serviços</h2>
          <div class="serv-content">
            <div class="card">
              <div class="box">
                <i class="fas fa-paint-brush"></i>
                <div class="text">Web Design</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <i class="fas fa-chart-line"></i>
                <div class="text">Advertising</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <i class="fas fa-code"></i>
                <div class="text">Apps Design</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <i class="fas fa-chart-line"></i>
                <div class="text">Advertising</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <i class="fas fa-chart-line"></i>
                <div class="text">Advertising</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <i class="fas fa-chart-line"></i>
                <div class="text">Advertising</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
