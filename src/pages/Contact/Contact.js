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
                Caso queira entrar em contato ficarei muito feliz e responderei
                o mais rápido possível.
              </p>
              <div class="icons">
                <div class="row">
                  <i class="fas fa-user"></i>
                  <div class="info">
                    <div class="head">Nome</div>
                    <div class="sub-title">Ivanildo Cândido Bezerra</div>
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
                    <div class="sub-title">systechtecnologia@gmail.com</div>
                  </div>
                </div>
                <div class="row">
                  <i class="fab fa-linkedin"></i>
                  <div class="info">
                    <div class="head">Linkedin</div>
                    <div class="sub-title">
                      <a
                        href="https://www.linkedin.com/in/ivanildocandido/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.linkedin.com/in/ivanildocandido/
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <i class="fab fa-github"></i>
                  <div class="info">
                    <div class="head">GitHub</div>
                    <div class="sub-title">
                      <a
                        href="https://github.com/IvanildoCandido"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://github.com/IvanildoCandido
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column right">
              <div class="text">Me envie um mensagem</div>
              <form
                class="contact-form"
                action="https://api.staticforms.xyz/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="accessKey"
                  value="1d11a978-663a-4046-976c-2947d46cff28"
                />
                <input
                  type="hidden"
                  name="redirectTo"
                  value="http://ivanildocandido.com.br"
                />
                <div class="fields">
                  <div class="field name">
                    <input
                      type="text"
                      class="fullname"
                      placeholder="Nome"
                      name="name"
                    />
                  </div>
                  <div class="field email">
                    <input
                      type="text"
                      class="email-input"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                </div>
                <div class="field">
                  <input
                    type="text"
                    class="subject"
                    placeholder="Assunto"
                    name="subject"
                  />
                </div>
                <div class="field textarea">
                  <textarea
                    class="message"
                    cols="30"
                    rows="10"
                    placeholder="Mensagem ..."
                    name="message"
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
