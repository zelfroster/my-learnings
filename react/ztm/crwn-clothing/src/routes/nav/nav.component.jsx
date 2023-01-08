import { useContext, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { signOutUser } from '../../utils/firebase/firebase.utils'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import './nav.styles.scss'

const Nav = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  const openCheckout = () => {
    setIsOpen(isOpen => !isOpen)
    console.log(isOpen)
  }

  return (
    <>
      <div className='nav'>
        <Link className="logo-container" to='/'>
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="shop-container" to='/shop'>SHOP</Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link className="nav-link" to='/auth'>SIGN IN</Link>
            )
          }
          <CartIcon onClick={openCheckout} />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Nav
