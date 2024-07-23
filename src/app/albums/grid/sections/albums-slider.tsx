import React, { FC, JSX } from 'react';

const AlbumsSlider: FC = (): JSX.Element => {
  return (
    <section
      className="no-mb"
      id="top"
      style={{height: '700px'}} // temporary
    >
      <div className="row">
        <div className="col-sm-12">
          <div className="before-FullscreenSlider"/>
          <div className="breadcrumb-fullscreen-parent sliderContainerBreadcrumb">
            <div id="ava-slider" className="royalSlider heroSlider rsMinW change-header-items-color">
              <div className="rsContent"
                   style={{backgroundImage: 'url(/assets/img/header/header.png)', backgroundSize: 'cover'}}>
                <img className="rsImg" src="/assets/img/header/header.png" alt=""/>
              </div>
              <div className="rsContent"
                   style={{backgroundImage: 'url(/assets/img/header/header.png)', backgroundSize: 'cover'}}>
                <img className="rsImg" src="/assets/img/header/header.png" alt=""/>
              </div>
              <div className="rsContent"
                   style={{backgroundImage: 'url(/assets/img/header/header.png)', backgroundSize: 'cover'}}>
                <img className="rsImg" src="/assets/img/header/header.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumsSlider;