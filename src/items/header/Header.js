import './header.css';
import logo from '../../images/header/cart.svg';

function Header () {
  return(
      <div className='header-main'>
          <div className='header-wrapper'>
              <p className='header-left'>MNTN</p>
              <div className='header-center'>
                  <p className='header-title-small'>Equipment</p>
                  <p className='header-title-small'>About us</p>
                  <p className='header-title-small'>Blog</p>
              </div>
              <div className='header-right'>
                  <img src={logo} alt='logo'/>
                  <p className='header-title-small'>Account</p>
              </div>
          </div>
      </div>
  )
}
export default Header;
