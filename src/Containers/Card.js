import React from 'react';


const Card = (props) => {
  return (
    <React.Fragment>
      <div className='Card'>{props.children}</div>
    </React.Fragment>
  );
};

export default Card;
