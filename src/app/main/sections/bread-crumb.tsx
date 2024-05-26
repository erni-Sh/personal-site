import React, {FC, JSX} from 'react';

const BreadCrumb: FC = (): JSX.Element => {
  return (
    <section className="no-mb">
      <div className="row">
        <div className="col-sm-12">
          <div className="breadcrumb-fullscreen-parent phone-menu-bg">
            <div className="breadcrumb breadcrumb-fullscreen alignleft small-description overlay almost-black-overlay"
                 style={{backgroundImage: 'url("assets/img/header/header.png")'}} data-stellar-background-ratio="0.5"
                 data-stellar-vertical-offset={0}>
              <div id="home" style={{position: 'absolute', left: 0, top: 0}}>
                <div className="intro-header">
                  <div className="js-height-full star" style={{height: '955px'}}>
                    <div className="star-pattern-1 js-height-full" style={{height: '994px'}}/>
                    <div className="col-sm-12">
                      <div className="starTitle">
                        <h4>Theme Brothers</h4>
                        <div className="grid__item">
                          <h1>
                            <a className="link link-yaku" href="#">
                              <span>A</span><span>Q</span><span>U</span><span>R</span><span>A</span>
                            </a>
                          </h1>
                        </div>
                        <h4>Template</h4>
                      </div>
                      <canvas className="cover" width={1920} height={955}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;