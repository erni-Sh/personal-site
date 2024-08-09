"use client"
import React, { FC, JSX } from 'react';
import { useSelector } from 'react-redux';
import { getIsHeaderCovered } from '@/redux/selectors/appStateSelectors';
import { ImageBG } from '@/ui-kit/image-bg/image-bg';

interface PageTopProps {
  backgroundImageUrl?: string;
  children?: JSX.Element
}

const PageTop: FC<PageTopProps> = ({backgroundImageUrl, children}): JSX.Element => {
  const isHeaderCovered = useSelector(getIsHeaderCovered);

  return (
    <section className="no-mb">
      <div className="row">
        <div className="col-sm-12">
          {/*<div className="before-FullscreenSlider"/>*/}
          <div className={'before-affix-breadcrumb'} style={{
            height: !isHeaderCovered ? '100vh' : 0
          }}/>
          <div className={`breadcrumb-fullscreen-parent phone-menu-bg ${!isHeaderCovered ? 'affix' : ''}`}>
            <div
              className="breadcrumb breadcrumb-fullscreen alignleft small-description overlay almost-black-overlay"
              // style={{backgroundImage: backgroundImageUrl && `url(${backgroundImageUrl})`}}
              // data-stellar-background-ratio="0.5"
              // data-stellar-vertical-offset={0}
            >
              {backgroundImageUrl &&
                <ImageBG
                  src={backgroundImageUrl}
                  className={'breadcrumb_BG'}
                />
              }
              { children }
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PageTop;
