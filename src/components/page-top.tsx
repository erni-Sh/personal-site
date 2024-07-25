import React, { FC, JSX } from 'react';

interface PageTopProps {
  backgroundImageUrl: string;
  children: JSX.Element[]
}

const PageTop: FC<PageTopProps> = ({backgroundImageUrl, children}): JSX.Element => {
  return (
    <section className="no-mb">
      <div className="row">
        <div className="col-sm-12">
          <div className="before-FullscreenSlider"/>
          <div className="breadcrumb-fullscreen-parent phone-menu-bg">
            <div className="breadcrumb breadcrumb-fullscreen alignleft small-description overlay almost-black-overlay"
                 style={{backgroundImage: `url(${backgroundImageUrl})`}} data-stellar-background-ratio="0.5"
                 data-stellar-vertical-offset={0}>
              <div className="breadTxt">
                { children.map((child) => child )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PageTop;