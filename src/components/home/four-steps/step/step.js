import React from 'react';

const Step = (props) => {
  const {imgSrc, imgAlt, instruction, tip} = props;
  return (
    <div className="four-steps__step">
      <img className="four-steps__step__icon" 
        src={imgSrc} 
        alt={imgAlt} />
      <h5 className="four-steps__step__instruction">
        {instruction}
      </h5>
      <hr className="four-steps__step__hr" />
      <p className="four-steps__step__tip">
        {tip}
      </p>
    </div>
  );
}

export default Step;
