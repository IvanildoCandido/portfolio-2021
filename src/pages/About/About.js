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
            <div className="column right">
              <div className="text">
                Olá tudo bom? Conheça mais quem eu sou.
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                ut voluptatum eveniet doloremque autem excepturi eaque, sit
                laboriosam voluptatem nisi delectus. Facere explicabo hic minus
                accusamus alias fuga nihil dolorum quae. Explicabo illo unde,
                odio consequatur ipsam possimus veritatis, placeat, ab molestiae
                velit inventore exercitationem consequuntur blanditiis omnis
                beatae. Dolor iste excepturi ratione soluta quas culpa
                voluptatum repudiandae harum non.
              </p>
              <Link to="/files/ivanildo-candido.pdf" target="_blank" download>Download do meu Currículo</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
