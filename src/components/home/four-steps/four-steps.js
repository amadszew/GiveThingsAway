import React from 'react';
import { Link } from 'react-router-dom';

import Step from './step/step';

import SectionHeader from '../../../utils/section-header/section-header';
import IconShirt from '../../../assets/Icon-shirt.png';
import IconBag from '../../../assets/Icon-bag.png';
import IconHandGlass from '../../../assets/Icon-handglass.png';
import IconRecycle from '../../../assets/Icon-recycle.png';

const FourSteps = () => {
  return (
    <section className="four-steps">
      <SectionHeader title={"Wystarczą 4 proste kroki"} />
      <div className="four-steps__steps">
        <Step 
          imgSrc={IconShirt}
          imgAlt={"icon shirt"}
          instruction={"Wybierz rzeczy"}
          tip={"ubrania, zabawki, sprzęt i inne"}
        />
        <Step 
          imgSrc={IconBag}
          imgAlt={"icon bag"}
          instruction={"Spakuj je"}
          tip={"skorzystaj z worków na śmieci"}
        />
        <Step 
          imgSrc={IconHandGlass}
          imgAlt={"icon handglass"}
          instruction={"Zdecyduj komu chcesz pomóc"}
          tip={"wybierz zaufane miejsce"}
        />
        <Step 
          imgSrc={IconRecycle}
          imgAlt={"icon recycle"}
          instruction={"Zamów kuriera"}
          tip={"kurier przyjedzie w dogodnym terminie"}
        />
      </div>
      <div className="four-steps__buttons">
        <Link className="four-steps__button" to="/logowanie">
          Oddaj <br /> rzeczy
        </Link>
      </div>
    </section>
  );
}

export default FourSteps;
