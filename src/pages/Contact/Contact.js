import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './contact.css';
const Contact = () => {
  return (
    <>
      <Navbar />
      <section class="contact" id="contact">
        <div class="max-width">
          <h2 class="title">Contato</h2>
          <div class="contact-content">
            <div class="column left">
              <div class="text">Como me encontrar?</div>
              <p>
                Caso queira entrar em contato ficarei muito feliz e responderei o mais rápido possível.
              </p>
              <div class="icons">
                <div class="row">
                  <i class="fas fa-user"></i>
                  <div class="info">
                    <div class="head">Nome</div>
                    <div class="sub-title">Ivanildo Cândido</div>
                  </div>
                </div>
                <div class="row">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="info">
                    <div class="head">Endereço</div>
                    <div class="sub-title">Campina Grande, PB</div>
                  </div>
                </div>
                <div class="row">
                  <i class="fas fa-envelope"></i>
                  <div class="info">
                    <div class="head">Email</div>
                    <div class="sub-title">ivanildocandidodevelop@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column right">
              <div class="text">Me envie um mensagem</div>
              <form class="contact-form" action="#" method="POST">
                <div class="fields">
                  <div class="field name">
                    <input type="text" class="fullname" placeholder="Nome" />
                  </div>
                  <div class="field email">
                    <input
                      type="text"
                      class="email-input"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="field">
                  <input type="text" class="subject" placeholder="Assunto" />
                </div>
                <div class="field textarea">
                  <textarea
                    class="message"
                    cols="30"
                    rows="10"
                    placeholder="Mensagem ..."
                  ></textarea>
                </div>
                <div class="button-area">
                  <button class="send-msg" type="submit" name="send">
                    Enviar mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
