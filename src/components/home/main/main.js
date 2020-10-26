import React from 'react';
import { Link } from 'react-router-dom';

import DecorativeHr from '../../../utils/decorative-hr/decorative-hr';

const Main = () => {
  return (
    <section className="main-section">
      <div className="main-section__image"></div>
      <div className="main-section__cta">
        <div className="main-section__content">
          <header className="main-section__header">
            <h1>
              Zacznij pomagać! <br/>
              Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <DecorativeHr />
          </header>
          <div className="main-section__buttons">
            <Link className="main-section__button" to="/logowanie">
              Oddaj <br /> rzeczy
            </Link>
            <Link className="main-section__button" to="/logowanie">
              Zorganizuj <br /> zbiórkę
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
