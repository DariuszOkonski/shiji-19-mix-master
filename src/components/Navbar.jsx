import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <span className='logo'>MixMaster</span>
        <div className='nav-links'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/newsletter'>Newsletter</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
