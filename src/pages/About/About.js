import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import profile from '../../assets/images/profile.png';
import './about.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about">
        <div className="max-width">
          <h2 className="title">Sobre</h2>
          <div className="about-content">
            <div className="column left">
              <img src={profile} alt="" />
            </div>
            <div className="column right history">
              <div className="text">
                Olá tudo bom? Conheça mais quem eu sou.
              </div>
              Meu nome é Ivanildo Cândido tenho 34 anos e atualmente moro na
              cidade de Campina Grande - PB.
              <p>
                Desde os meus 16 anos quando pude comprar meu primeiro
                computador me apaixonei por tecnologia.
              </p>
              <p>
                Sou formado em Análise e Desenvolvimento de Sistemas e meu maior
                Hobby é aprender novas tecnologias e criar soluções que ajude as
                pessoas ao meu redor a ter mais praticidade no seu dia a dia.{' '}
              </p>
              <p>
                Estou em busca de uma oportunidade onde eu possa contribuir com os meus conhecimentos para tornar o ambiente em que vivemos melhor e mais justo.
              </p>
              <Link to="/files/ivanildo-candido.pdf" target="_blank" download>
                Download do meu Currículo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
