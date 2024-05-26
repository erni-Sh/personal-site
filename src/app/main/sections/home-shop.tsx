import React, {FC, JSX} from 'react';

const HomeShop: FC = (): JSX.Element => {
  return (
    <section className="shopHomePage shopHomePadding hide-section">
      <div className="shopSection">
        <div className="container-fluid">
          <div className="shopContent">
            <div className="sectionTitle paddingBottom">
              <span className="heading-t3"/>
              <h2><a href="shop.html">Shop Online</a></h2>
              <span className="heading-b3"/>
            </div>
            {/* end sectionTtile */}
            <div className="row">
              <nav className="shop-products">
                <ul className="clearfix">
                  <li className="col-sm-3">
                    <figure>
                      <figcaption>
                        <img src="assets/img/shop/shopProduct.png" alt=""/>
                      </figcaption>
                      <div className="content">
                        <div className="shopHover">
                          <div className="price">
                            £ 15,99
                          </div>
                          <div className="proTitle">
                            <a href="shopSingle.html">Original T. Brothers</a>
                          </div>
                          <div className="product">Hoodie Aqura</div>
                          <a href="shopSingle.html" className="icon-button shopIcon"><i
                            className="fa fa-shopping-cart"/><span/></a>
                          <a href="shopSingle.html" className="icon-button shopIcon"><i className="fa fa-info"/><span/></a>
                        </div>
                      </div>
                    </figure>
                  </li>
                  <li className="col-sm-3">
                    <figure>
                      <figcaption>
                        <img src="assets/img/shop/shopProduct.png" alt=""/>
                      </figcaption>
                      <div className="content">
                        <div className="shopHover">
                          <div className="price">
                            £ 15,99
                          </div>
                          <div className="proTitle">
                            <a href="shopSingle.html">Original T. Brothers</a>
                          </div>
                          <div className="product">Hoodie Aqura</div>
                          <a href="shopSingle.html" className="icon-button shopIcon"><i
                            className="fa fa-shopping-cart"/><span/></a>
                          <a href="shopSingle.html" className="icon-button shopIcon"><i className="fa fa-info"/><span/></a>
                        </div>
                      </div>
                    </figure>
                  </li>
                  <li className="col-sm-3">
                    <figure>
                      <figcaption>
                        <img src="assets/img/shop/shopProduct.png" alt=""/>
                      </figcaption>
                      <div className="content">
                        <div className="shopHover">
                          <div className="price">
                            £ 15,99
                          </div>
                          <div className="proTitle">
                            <a href="shopSingle.html">Original T. Brothers</a>
                          </div>
                          <div className="product">Hoodie Aqura</div>
                          <a href="shopSingle.html" className="icon-button shopIcon"><i
                            className="fa fa-shopping-cart"/><span/></a>
                          <a href="shopSingle.html" className="icon-button shopIcon"><i className="fa fa-info"/><span/></a>
                        </div>
                      </div>
                    </figure>
                  </li>
                  <li className="col-sm-3">
                    <figure>
                      <figcaption>
                        <img src="assets/img/shop/shopProduct.png" alt=""/>
                      </figcaption>
                      <div className="content">
                        <div className="shopHover">
                          <div className="price">
                            £ 15,99
                          </div>
                          <div className="proTitle">
                            <a href="shopSingle.html">Original T. Brothers</a>
                          </div>
                          <div className="product">Hoodie Aqura</div>
                          <a href="shopSingle.html" className="icon-button shopIcon"><i
                            className="fa fa-shopping-cart"/><span/></a>
                          <a href="shopSingle.html" className="icon-button shopIcon"><i className="fa fa-info"/><span/></a>
                        </div>
                      </div>
                    </figure>
                  </li>
                </ul>
              </nav>
              {/* end shop-products */}
            </div>
            {/* end row */}
          </div>
          {/* end shopContent */}
        </div>
      </div>
    </section>
  );
};

export default HomeShop;