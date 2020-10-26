import React from 'react';

import signature from '../../../assets/Signature.svg';

import SectionHeader from '../../../utils/section-header/section-header';

const aboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us__desc">
        <SectionHeader title={"O nas"} />
        <p className="about-us__text">
          Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
        </p>
        <div  className="about-us__sign">
          <img src={signature} alt="signature" />
        </div>
      </div>
      <div className="about-us__image"></div>
    </section>
  );
}

export default aboutUs;
