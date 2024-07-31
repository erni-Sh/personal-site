import React, {FC, JSX} from 'react';
import PageTop from '@/components/page-top';

const BG_IMAGE = 'https://theme-brothers.com/AquraHTML/assets/img/starHomePage/star.jpg';

const BreadCrumb: FC = (): JSX.Element => {
  return (
    <PageTop backgroundImageUrl={BG_IMAGE}>
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
    </PageTop>
  );
};

export default BreadCrumb;