import React, { FC, JSX } from 'react';

const GallerySingleGrid: FC = (): JSX.Element => {
  return (
    <section id="content">
      <div className="gallerySection">
        <div className="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
          <div className="col-sm-12">
            {/* Content Container */}
            <div className="content-container clearfix">
              {/* Single Album Container */}
              <div className="single-photo-album-container">
                <div className="row">
                  {/* Single Album Article */}
                  <article className="col-sm-12 col-md-6 col-xs-12">
                    {/* Single Album Contant Container */}
                    <figure>
                      {/* Single Album Image */}
                      <figcaption>
                        {/* Single Album Image */}
                        <div className="hovereffect">
                          <img className="img-responsive" src="assets/img/gallery/wideGal.png" alt=""/>
                          <div className="overlay">
                            <a className="info lightbox" href="assets/img/gallery/wideGal.png"/>
                          </div>
                        </div>
                      </figcaption>
                      {/* Single Album View Button */}
                    </figure>
                  </article>
                  {/* Single Album Article */}
                  <article className="col-sm-3 col-xs-6">
                    {/* Single Album Contant Container */}
                    <figure>
                      {/* Single Album Image */}
                      <figcaption>
                        <div className="hovereffect">
                          <img className="img-responsive" src="assets/img/gallery/squareGal.png" alt=""/>
                          <div className="overlay">
                            <a className="info lightbox" href="assets/img/gallery/wideGal.png"/>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                  {/* Single Album Article */}
                  <article className="col-sm-3 col-xs-6">
                    {/* Single Album Contant Container */}
                    <figure>
                      {/* Single Album Image */}
                      <figcaption>
                        <div className="hovereffect">
                          <img className="img-responsive" src="assets/img/gallery/squareGal.png" alt=""/>
                          <div className="overlay">
                            <a className="info lightbox" href="assets/img/gallery/wideGal.png"/>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                  {/* Single Album Article */}
                  <article className="col-sm-3 col-xs-6">
                    {/* Single Album Contant Container */}
                    <figure>
                      {/* Single Album Image */}
                      <figcaption>
                        <div className="hovereffect">
                          <img className="img-responsive" src="assets/img/gallery/squareGal.png" alt=""/>
                          <div className="overlay">
                            <a className="info lightbox" href="assets/img/gallery/wideGal.png"/>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                  {/* Single Album Article */}
                  <article className="col-sm-3 col-xs-6">
                    {/* Single Album Contant Container */}
                    <figure>
                      {/* Single Album Image */}
                      <figcaption>
                        <div className="hovereffect">
                          <img className="img-responsive" src="assets/img/gallery/squareGal.png" alt=""/>
                          <div className="overlay">
                            <a className="info lightbox" href="assets/img/gallery/wideGal.png"/>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                  {/* Single Album Article */}
                  <article className="col-sm-12 col-md-6 col-xs-12">
                    {/* Single Album Contant Container */}
                    <figure>
                      {/* Single Album Image */}
                      <figcaption>
                        <div className="hovereffect">
                          <img className="img-responsive" src="assets/img/gallery/wideGal.png" alt=""/>
                          <div className="overlay">
                            <a className="info lightbox" href="assets/img/gallery/wideGal.png"/>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                  {/* Single Album Article */}
                  <article className="col-sm-12 col-md-6 col-xs-12">
                    {/* Single Album Contant Container */}
                    <figure>
                      {/* Single Album Image */}
                      <figcaption>
                        {/* Single Album Image */}
                        <div className="hovereffect">
                          <img className="img-responsive" src="assets/img/gallery/wideGal.png" alt=""/>
                          <div className="overlay">
                            <a className="info lightbox" href="assets/img/gallery/wideGal.png"/>
                          </div>
                        </div>
                      </figcaption>
                      {/* Single Album View Button */}
                    </figure>
                  </article>
                  {/* Single Album Article */}
                  <article className="col-sm-3 col-xs-6">
                    {/* Single Album Contant Container */}
                    <figure>
                      {/* Single Album Image */}
                      <figcaption>
                        <div className="hovereffect">
                          <img className="img-responsive" src="assets/img/gallery/squareGal.png" alt=""/>
                          <div className="overlay">
                            <a className="info lightbox" href="assets/img/gallery/wideGal.png"/>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                  {/* Single Album Article */}
                  <article className="col-sm-3 col-xs-6">
                    {/* Single Album Contant Container */}
                    <figure>
                      {/* Single Album Image */}
                      <figcaption>
                        <div className="hovereffect">
                          <img className="img-responsive" src="assets/img/gallery/squareGal.png" alt=""/>
                          <div className="overlay">
                            <a className="info lightbox" href="assets/img/gallery/wideGal.png"/>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end container */}
      </div>
    </section>

  );
};

export default GallerySingleGrid;