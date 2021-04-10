import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Olá meu nome é</div>
            <div className="text-2">Ivanildo Cândido</div>
            <div className="text-3">
              E eu sou um <span>Desenvolvedor</span>
            </div>
            <Link to="/about">Sobre mim</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
