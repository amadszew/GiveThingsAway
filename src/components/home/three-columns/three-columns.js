import React from 'react';

import Column from './column/column';

const ThreeColumns = () => {
  return (
    <div className="three-columns">
      <Column
        amount={"10"}
        title={"Oddanych worków"}
        text={"Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."}
      />
      <Column
        amount={"5"}
        title={"Wspartych organizacji"}
        text={"Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."}
      />
      <Column
        amount={"7"}
        title={"Zorganizowanych zbiórek"}
        text={"Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."}
      />
    </div>
  );
}

export default ThreeColumns;
