import React, { FC, JSX } from 'react';
import PageTop from '@/components/page-top';

const BG_IMAGE=`http://theme-brothers.com/AquraHTML/assets/img/content/galSg.jpg`;

const GalleryParallax: FC = (): JSX.Element => {
  return (
    <div>
      <div className="fusion-bg-parallax" data-bg-align="center center" data-bg-image="assets/img/gallery/galScroll.png"
           data-bg-repeat="false" data-break-parents={0} data-direction="left" data-mobile-enabled="false"
           data-mute="yes" data-opacity={100} data-velocity="-0.7"/>
      <div
        className="fusion-fullwidth fullwidth-box fusion-fullwidth-2 fusion-parallax-left nonhundred-percent-fullwidth"
        style={{
          borderColor: 'transparent',
          borderBottomWidth: '0px',
          borderTopWidth: '0px',
          borderBottomStyle: 'solid',
          borderTopStyle: 'solid',
          paddingBottom: '130px',
          paddingTop: '130px',
          paddingLeft: '40px !important',
          paddingRight: '40px !important'
        }}>
        <div className="fusion-row">
          <a href="gallerySingle.html">Album <span>Example</span></a>
          <p>December 15, 2016</p>
        </div>
      </div>
      <div className="fusion-bg-parallax" data-bg-align="center center" data-bg-image="assets/img/gallery/galScroll.png"
           data-bg-repeat="false" data-break-parents={0} data-direction="right" data-mobile-enabled="false"
           data-mute="yes" data-opacity={100} data-velocity="-0.7"/>
      <div
        className="fusion-fullwidth fullwidth-box fusion-fullwidth-3 fusion-parallax-right nonhundred-percent-fullwidth"
        style={{
          borderColor: 'transparent',
          borderBottomWidth: '0px',
          borderTopWidth: '0px',
          borderBottomStyle: 'solid',
          borderTopStyle: 'solid',
          paddingBottom: '130px',
          paddingTop: '130px',
          paddingLeft: '40px !important',
          paddingRight: '40px !important'
        }}>
        <div className="fusion-row">
          <a href="gallerySingle.html">Album <span>Example</span></a>
          <p>December 15, 2016</p>
        </div>
      </div>
      <div className="fusion-sep-clear"/>
      <div className="fusion-separator fusion-full-width-sep sep-none"
           style={{borderColor: '#e0dede', marginTop: '-5px'}}>
      </div>
      <div className="fusion-bg-parallax" data-bg-align="center center" data-bg-image="assets/img/gallery/galScroll.png"
           data-bg-repeat="false" data-break-parents={0} data-direction="left" data-mobile-enabled="false"
           data-mute="yes" data-opacity={100} data-velocity="-0.7"/>
      <div
        className="fusion-fullwidth fullwidth-box fusion-fullwidth-4 fusion-parallax-left nonhundred-percent-fullwidth"
        style={{
          borderColor: 'transparent',
          borderBottomWidth: '0px',
          borderTopWidth: '0px',
          borderBottomStyle: 'solid',
          borderTopStyle: 'solid',
          paddingBottom: '130px',
          paddingTop: '130px',
          paddingLeft: '40px !important',
          paddingRight: '40px !important'
        }}>
        <div className="fusion-row">
          <a href="gallerySingle.html">Album <span>Example</span></a>
          <p>December 15, 2016</p>
        </div>
      </div>
      <div className="fusion-bg-parallax" data-bg-align="center bottom" data-bg-image="assets/img/gallery/galScroll.png"
           data-bg-repeat="false" data-break-parents={0} data-direction="right" data-mobile-enabled="false"
           data-mute="yes" data-opacity={100} data-velocity="-0.7"/>
      <div
        className="fusion-fullwidth fullwidth-box fusion-fullwidth-5 fusion-parallax-right nonhundred-percent-fullwidth"
        style={{
          borderColor: 'transparent',
          borderBottomWidth: '0px',
          borderTopWidth: '0px',
          borderBottomStyle: 'solid',
          borderTopStyle: 'solid',
          paddingBottom: '130px',
          paddingTop: '130px',
          paddingLeft: '40px !important',
          paddingRight: '40px !important'
        }}>
        <div className="fusion-row">
          <a href="gallerySingle.html">Album <span>Example</span></a>
          <p>December 15, 2016</p>
        </div>
      </div>
      <div className="fusion-bg-parallax" data-bg-align="center center" data-bg-image="assets/img/gallery/galScroll.png"
           data-bg-repeat="false" data-break-parents={0} data-direction="left" data-mobile-enabled="false"
           data-mute="yes" data-opacity={100} data-velocity="-0.7"/>
      <div
        className="fusion-fullwidth fullwidth-box fusion-fullwidth-6 fusion-parallax-left nonhundred-percent-fullwidth"
        style={{
          borderColor: 'transparent',
          borderBottomWidth: '0px',
          borderTopWidth: '0px',
          borderBottomStyle: 'solid',
          borderTopStyle: 'solid',
          paddingBottom: '130px',
          paddingTop: '130px',
          paddingLeft: '40px !important',
          paddingRight: '40px !important'
        }}>
        <div className="fusion-row">
          <a href="gallerySingle.html">Album <span>Example</span></a>
          <p>December 15, 2016</p>
        </div>
      </div>
    </div>

  );
};

export default GalleryParallax;