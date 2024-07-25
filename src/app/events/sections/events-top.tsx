import React, { FC, JSX } from 'react';

const EventsTop: FC = (): JSX.Element => {
  return (
    <section className="no-mb">
      <div className="row">
        <div className="col-sm-12">
          <div className="breadcrumb-fullscreen-parent phone-menu-bg">
            <div
              className="breadcrumb breadcrumb-fullscreen alignleft small-description overlay almost-black-overlay"
              style={{ minHeight: '100vh' }}
              data-stellar-background-ratio="0.5"
              data-stellar-vertical-offset={0}
            >
              {/*<div id="bgndVideo" className="player"*/}
              {/*     data-property="{videoURL:'TT6VndrijlU',containment:'.player',autoPlay:true, mute:true, startAt:0, opacity:1}">*/}
              {/*</div>*/}

              {/*   start iframe */}

              <div className="mbYTP_wrapper" id="wrapper_mbYTP_bgndVideo" style={{
                position: 'absolute',
                zIndex: 0,
                minWidth: '100%',
                minHeight: '100%',
                left: '0px',
                top: '0px',
                overflow: 'hidden',
                opacity: 1,
                transitionProperty: 'opacity',
                transitionDuration: '2000ms'
              }}>
                <iframe id="mbYTP_bgndVideo" className="playerBox" style={{
                  position: 'absolute',
                  zIndex: 0,
                  width: '1790px',
                  height: '1279.24px',
                  top: '0px',
                  left: '0px',
                  overflow: 'hidden',
                  opacity: 1,
                  marginTop: '-164.12px',
                  marginLeft: '-248.5px',
                  transitionProperty: 'opacity',
                  transitionDuration: '1000ms'
                }} frameBorder={0} allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="ELECTRIC CASTLE 2014 - OFFICIAL AFTERMOVIE" width={640} height={360}
                        src="https://www.youtube.com/embed/TT6VndrijlU?autoplay=0&modestbranding=1&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=mbYTP_bgndVideo&origin=http%3A%2F%2Ftheme-brothers.com&allowfullscreen=true&wmode=transparent&iv_load_policy=3&html5=1&widget_referrer=http%3A%2F%2Ftheme-brothers.com%2FAquraHTML%2FalbumsSingle1.html&widgetid=1"/>
                <div className="YTPOverlay"
                     style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%'}}/>
              </div>

              {/*   end iframe */}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default EventsTop;