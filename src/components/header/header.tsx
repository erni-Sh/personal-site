'use client'
import React, {FC, JSX, useState} from 'react';
import dynamic from 'next/dynamic';
import CartParent from '@/components/header/cartParent';
import Link from 'next/link';
import ROUTES from '@/data/routes';
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
            <CartParent />
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
        <Link href={ROUTES.MAIN.path}>
          <img src="/assets/img/logo/whiteLogo.png" alt="Aqura" />
        </Link>
      </div>
      {/* =============== END LOGO ================ */}
    </div>
  );
};

export default Header;