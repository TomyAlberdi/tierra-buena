import React, { useEffect, useState } from "react";
import { FaCopy, FaInstagram, FaCheck } from "react-icons/fa";

const Contact = () => {
  const [Copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  }, [Copied]);

  return (
    <section className="Contact" id="Contact">
      <div className="location">
        <h2>Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288.64666514219743!2d-57.53176107360134!3d-35.06513298433487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2646a6bdeb53b%3A0xc8398c3f1972d9a2!2sTierrabuena!5e0!3m2!1ses-419!2sar!4v1724263098229!5m2!1ses-419!2sar"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <a href="https://maps.app.goo.gl/RgLAr2mzU6GkgoMu9" target="_blank">
          Cómo llegar
        </a>
      </div>
      <div className="contactInfo">
        <h2>Información de contacto</h2>
        <section className="contactInfoList">
          <article>
            <h3>Email</h3>
            <p>tierrabuenacasadecampo@gmail.com</p>
            <button
              onClick={() => setCopied(true)}
            >
              {Copied ? (
                <>
                  Copiado
                  <FaCheck />
                </>
              ) : (
                <>
                  Copiar <FaCopy />
                </>
              )}
            </button>
          </article>
          <article>
            <h3>Instagram</h3>
            <p>@tierrabuena_casadecampo</p>
            <a
              href="https://www.instagram.com/tierrabuena_casadecampo/"
              target="_blank"
            >
              Visitar <FaInstagram />
            </a>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Contact;
