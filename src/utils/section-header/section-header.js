import React from 'react';

import DecorativeHr from '../decorative-hr/decorative-hr';

const SectionHeader = ({ title }) => {
  return (
    <header className="section-header">
        <h2>{title}</h2>
        <DecorativeHr />
      </header>
  );
}

export default SectionHeader;
