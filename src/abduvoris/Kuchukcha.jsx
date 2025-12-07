import React from 'react';
import { useNavigate } from 'react-router-dom';

const Kuchukcha = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dog'); // Bu yerda '/dog' - ma’lumot sahifangiz URLi
  }

  return (
    <div onClick={handleClick} style={{cursor: 'pointer'}}>
      yjtrh
    </div>
  );
}

export default Kuchukcha;
