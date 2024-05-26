import React, {FC, JSX} from 'react';

const Header: FC = (): JSX.Element => {
  return (
    <div className="topHeader">
      <div className="header">
        <div className="rightTopHeader">
          <div className="cartContainer">
            <div className="myCart">
              <ul>
                <li className="cartTitle"><img src="assets/img/shop/cart.png" alt="" /><span>0</span></li>
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
          <a className="open-menu">
            {/* Buttons Bars */}
            <span className="span-1" />
            <span className="span-2" />
            <span className="span-3" />
          </a>
        </div>{/* end rightTopHeader */}
      </div>{/* end header */}
      {/* Menu Fixed Container */}
      <div className="menu-fixed-container">
        {/* Menu Fixed Centred Container */}
        <nav>
          {/* Menu Fixed Close Button */}
          <div className="x-filter">
            <span />
            <span />
          </div>
          {/* Menu Fixed Primary List */}
          <ul>
            {/* Menu Fixed Item */}
            <li>
              <a href="index.html">
                home
              </a>
              <ul className="sub-menu">
                {/* Menu Fixed Sub Menu Item */}
                <li>
                  <a href="index.html">
                    home star
                  </a>
                </li>
                <li>
                  <a href="index-royal-slider.html">
                    home royal slider
                  </a>
                </li>
                {/* Menu Fixed Sub Menu Item */}
                <li>
                  <a href="index-video.html">
                    home video
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="albumsGrid.html">
                discography
              </a>
              <ul className="sub-menu">
                {/* Menu Fixed Sub Menu Item */}
                <li>
                  <a href="albumsFullBackground.html">
                    albums full background
                  </a>
                </li>
                {/* Menu Fixed Sub Menu Item */}
                <li>
                  <a href="albumsGrid.html">
                    albums grid
                  </a>
                </li>
                {/* Menu Fixed Sub Menu Item */}
                <li>
                  <a href="albumsSingle1.html">
                    album description
                  </a>
                </li>
              </ul>
            </li>
            {/* Menu Fixed Item */}
            <li>
              <a href="events.html">
                events
              </a>
            </li>
            {/* Menu Fixed Item */}
            <li>
              <a href="#">
                blog
              </a>
              <ul className="sub-menu">
                {/* Menu Fixed Sub Menu Item */}
                <li>
                  <a href="blogGrid.html">
                    blog grid
                  </a>
                </li>
                {/* Menu Fixed Sub Menu Item */}
                <li>
                  <a href="blogSidebarRight.html">
                    blog sidebar
                  </a>
                </li>
                {/* Menu Fixed Sub Menu Item */}
                <li>
                  <a href="blogSingle.html">
                    blog single
                  </a>
                </li>
              </ul>
            </li>
            {/* Menu Fixed Item */}
            <li>
              <a href="#">
                gallery
              </a>
              <ul className="sub-menu">
                {/* Menu Fixed Sub Menu Item */}
                <li>
                  <a href="galleryGrid.html">
                    albums grid
                  </a>
                </li>
                {/* Menu Fixed Sub Menu Item */}
                <li>
                  <a href="galleryScroll.html">
                    albums scroll
                  </a>
                </li>
                {/* Menu Fixed Sub Menu Item */}
                <li>
                  <a href="gallerySingle.html">
                    gallery single
                  </a>
                </li>
              </ul>
            </li>
            {/* Menu Fixed Item */}
            <li>
              <a href="#">
                Other Pages
              </a>
              <ul className="sub-menu">
                {/* Menu Fixed Sub Menu Item */}
                <li>
                  <a href="biography.html">
                    Biography
                  </a>
                </li>
                {/* Menu Fixed Sub Menu Item */}
                <li>
                  <a href="video.html">
                    Video
                  </a>
                </li>
              </ul>
            </li>
            {/* Menu Fixed Item */}
            <li>
              <a href="contact.html">
                contact
              </a>
            </li>
            {/* Menu Fixed Item */}
            <li>
              <a href="shop.html">
                shop
              </a>
            </li>
          </ul>
          {/* Menu Fixed Close Button */}
          <div className="x-filter">
            <span />
            <span />
          </div>
        </nav>
      </div>{/* end menu-fixed-container */}
      {/* =============== STAR LOGO ================ */}
      <div className="logo-container-top">
        <a href="index.html"><img src="assets/img/logo/whiteLogo.png" alt="Aqura" /></a>
      </div>{/* end logo-container-top */}
      {/* =============== END LOGO ================ */}
    </div>
  );
};

export default Header;