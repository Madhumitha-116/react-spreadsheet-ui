import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
}

export default Header;
