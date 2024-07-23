import React, { FC, JSX } from 'react';

const AlbumTop: FC = (): JSX.Element => {
  return (
    <section className="no-mb">
      <div className="row">
        <div className="col-sm-12">
          <div className="before-FullscreenSlider"/>
          <div className="breadcrumb-fullscreen-parent phone-menu-bg">
            <div
              className="breadcrumb breadcrumb-fullscreen alignleft small-description overlay almost-black-overlay"
              style={{
                backgroundImage: 'url("http://theme-brothers.com/AquraHTML/assets/img/albums/single1.jpg")',
                height: 800
              }}
              data-stellar-background-ratio="0.5"
              data-stellar-vertical-offset={0}
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumTop;