import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Navbar from '../../components/Navbar/Navbar';
import profile1 from '../../assets/images/projects.jpg';
import './projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="teams">
        <div className="max-width">
          <h2 className="title">Meus Projetos</h2>
          <div className="carousel owl-carousel project-list">
            <div className="card">
              <div className="box">
                <img src={profile1} alt="" />
                <div className="text">Nome do Projeto</div>
                <p>Breve descrição do projeto.</p>
                <Link to="/projects/1">Veja mais</Link>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={profile1} alt="" />
                <div className="text">Nome do Projeto</div>
                <p>Breve descrição do projeto.</p>
                <Link to="/projects/1">Veja mais</Link>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={profile1} alt="" />
                <div className="text">Nome do Projeto</div>
                <p>Breve descrição do projeto.</p>
                <Link to="/projects/1">Veja mais</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
