import React from 'react';
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
  <div className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href="https://www.linkedin.com/in/ivan-herrera-garcia-8b64411b8/">
          <img scr={Logo} alt=''/>
        </a>
        <button className='btn btn-sm'>Trabajemos juntos</button>

      </div>
    </div>
  </div>
  );
};

export default Header;
