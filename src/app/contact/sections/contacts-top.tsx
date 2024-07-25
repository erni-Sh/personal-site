import React, { FC, JSX } from 'react';

const BG_IMAGE = `http://theme-brothers.com/AquraHTML/assets/img/contact/contact.jpg`;

const ContactsTop: FC = (): JSX.Element => {
  return (
    <section className="no-mb">
      <div className="row">
        <div className="col-sm-12">
          <div className="before-FullscreenSlider"/>
          <div
            className="breadcrumb-fullscreen-parent phone-menu-bg"
          >
            <div
              className="breadcrumb breadcrumb-fullscreen alignleft small-description overlay almost-black-overlay"
              style={{
                backgroundImage: `url(${BG_IMAGE})`,
                height: 951, // by library
                backgroundPosition: '50% 0px',
                backgroundSize: 'cover',
              }}
             data-stellar-background-ratio="0.5"
             data-stellar-vertical-offset={0}>
              <div className="breadTxt">
                <h1>
                  Contact
                </h1>
                <p>
                  Your time is limited, don’t waste it living someone else’s life. Don’t be trapped<br/>by dogma, which
                  is living the result of other people’s thinking.<br/> Don’t let the noise of other opinions
                  drown<br/> your own inner voice.
                </p>
                <a href="#content" data-easing="easeInOutQuint" data-scroll data-speed={900} data-url="false">
                  View More <i className="fa fa-angle-down"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ContactsTop;