import { Outlet, Link } from 'react-router-dom'
import './nav.styles.scss'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

const Nav = () => {
  return (
    <>
      <div className='nav'>
        <Link className="logo-container" to='/'>
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/sign-in'>Sign-in</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Nav
