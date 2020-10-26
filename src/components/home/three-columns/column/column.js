import React from 'react';

const Column = ( props ) => {
  const {amount, title, text} = props;
  return (
    <section className="three-columns__column">
      <h3 className="three-columns__column__amount">
        {amount}
      </h3>
      <p className="three-columns__column__title">
        {title}
      </p>
      <p className="three-columns__column__text">
        {text}
      </p>
    </section>
  );
}

export default Column;
