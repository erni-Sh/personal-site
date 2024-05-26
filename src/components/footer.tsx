import React, {FC, JSX} from 'react';

const Footer: FC = (): JSX.Element => {
  return (
    <section style={{backgroundColor: '#eeeeee'}} className="hide-section">
      <div className="footer footerPadding">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="copyFooter">
                <a href="#">© Aqura 2016</a>
              </div>
            </div>
            <div className="col-sm-4">
              <nav className="social-icons">
                <ul className="clearfix">
                  <li><a href="#" className="icon-button shopIcon"><i className="fa fa-twitter"/><span/></a></li>
                  <li><a href="#" className="icon-button shopIcon"><i className="fa fa-facebook"/><span/></a></li>
                  <li><a href="#" className="icon-button shopIcon"><i className="fa fa-apple"/><span/></a></li>
                  <li><a href="#" className="icon-button shopIcon"><i className="fa fa-lastfm"/><span/></a></li>
                  <li><a href="#" className="icon-button shopIcon"><i className="fa fa-soundcloud"/><span/></a></li>
                  <li><a href="#" className="icon-button shopIcon"><i className="fa fa-youtube-play"/><span/></a></li>
                  <li><a href="#" className="icon-button shopIcon"><i className="fa fa-vimeo"/><span/></a></li>
                </ul>
              </nav>
            </div>
            <div className="col-sm-4">
              <div className="goTop back-to-top" id="back-to-top">
                <i className="fa fa-angle-up"/>
                <a href="#">Go Top</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;