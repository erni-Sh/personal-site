'use client'
import React, {FC, JSX, useState} from 'react';
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import('@/components/header/menu'), {ssr: false});

const Header: FC = (): JSX.Element => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const closeMenu = () => setIsNavOpened(false);

  return (
    <div className="topHeader">
      <div className="header">
        <div className="rightTopHeader">
          <div className="cartContainer">
            <div className="myCart">
              <ul>
                <li className="cartTitle"><img src="/assets/img/shop/cart.png" alt="" /><span>0</span></li>
              </ul>
            </div>{/* end myCart */}
            <div className="cartParent">
              <div className="cartItems">
                <ul>
                  <li>
                    <div className="priceCart">
                      <img src="assets/img/shop/cartContainer.png" alt="" />
                      <a href="#">Hoodie T.Brothers {/* <span><i class="fa fa-times"></i></span> */}</a>
                      <p>Price:&nbsp;<span>£15,99</span></p>
                      <p className="quantity">Quantity: <span>1</span></p>
                    </div>
                  </li>
                  <li>
                    <div className="priceCart">
                      <img src="assets/img/shop/cartContainer.png" alt="" />
                      <a href="#">Hoodie T.Brothers {/* <span><i class="fa fa-times"></i></span> */}</a>
                      <p>Price:&nbsp;<span>£15,99</span></p>
                      <p className="quantity">Quantity: <span>1</span></p>
                    </div>
                  </li>
                  <li>
                    <div className="total">
                      <a href="#">Sub Total<span>31,98£</span></a>
                    </div>
                  </li>
                </ul>
                <button type="submit" className="single_add_to_cart_button button alt buttonView">
                  View Cart
                </button>
                <button type="submit" className="single_add_to_cart_button button alt buttonCheck">
                  Checkout
                </button>
              </div>{/* end cartItems */}
            </div>{/* end cartParent */}
          </div>{/*end cartContainer  */}
          {/* Open Menu Button */}
          <a className="open-menu" onClick={() => setIsNavOpened(true)}>
            {/* Buttons Bars */}
            <span className="span-1" />
            <span className="span-2" />
            <span className="span-3" />
          </a>
        </div>{/* end rightTopHeader */}
      </div>{/* end header */}
      {/* Menu Fixed Container */}
      <div className={['menu-fixed-container', isNavOpened && 'open'].join(' ')}>
        <Menu closeMenu={closeMenu} />
      </div>
      {/* =============== STAR LOGO ================ */}
      <div className="logo-container-top">
        <a href="index.html"><img src="/assets/img/logo/whiteLogo.png" alt="Aqura" /></a>
      </div>{/* end logo-container-top */}
      {/* =============== END LOGO ================ */}
    </div>
  );
};

export default Header;