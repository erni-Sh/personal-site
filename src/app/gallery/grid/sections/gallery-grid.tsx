import React, { FC, JSX } from 'react';

const GalleryGrid: FC = (): JSX.Element => {
  return (
    <section className="padding gallerySection" id="content">
      <div className="container" style={{padding: 0}}>
        <div className="col-sm-12">
          {/* Content Container */}
          <div className="content-container clearfix">
            {/* Single Album Container */}
            <div className="single-photo-album-container">
              <div className="row">
                {/* Single Album Article */}
                <article className="col-sm-4">
                  {/* Single Album Contant Container */}
                  <figure>
                    {/* Single Album Image */}
                    <figcaption>
                      <div className="hovereffect">
                        <img className="img-responsive" src="assets/img/gallery/galGrid.png" alt=""/>
                        <div className="overlay">
                          <a href="gallerySingle.html" className="info"/>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </article>
                {/* Single Album Article */}
                <article className="col-sm-4">
                  {/* Single Album Contant Container */}
                  <figure>
                    {/* Single Album Image */}
                    <figcaption>
                      <div className="hovereffect">
                        <img className="img-responsive" src="assets/img/gallery/galGrid.png" alt=""/>
                        <div className="overlay">
                          <a href="gallerySingle.html" className="info"/>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </article>
                {/* Single Album Article */}
                <article className="col-sm-4">
                  {/* Single Album Contant Container */}
                  <figure>
                    {/* Single Album Image */}
                    <figcaption>
                      <div className="hovereffect">
                        <img className="img-responsive" src="assets/img/gallery/galGrid.png" alt=""/>
                        <div className="overlay">
                          <a href="gallerySingle.html" className="info"/>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </article>
                {/* Single Album Article */}
                <article className="col-sm-4">
                  {/* Single Album Contant Container */}
                  <figure>
                    {/* Single Album Image */}
                    <figcaption>
                      <div className="hovereffect">
                        <img className="img-responsive" src="assets/img/gallery/galGrid.png" alt=""/>
                        <div className="overlay">
                          <a href="gallerySingle.html" className="info"/>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </article>
                {/* Single Album Article */}
                <article className="col-sm-4">
                  {/* Single Album Contant Container */}
                  <figure>
                    {/* Single Album Image */}
                    <figcaption>
                      <div className="hovereffect">
                        <img className="img-responsive" src="assets/img/gallery/galGrid.png" alt=""/>
                        <div className="overlay">
                          <a href="gallerySingle.html" className="info"/>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </article>
                {/* Single Album Article */}
                <article className="col-sm-4">
                  {/* Single Album Contant Container */}
                  <figure>
                    {/* Single Album Image */}
                    <figcaption>
                      <div className="hovereffect">
                        <img className="img-responsive" src="assets/img/gallery/galGrid.png" alt=""/>
                        <div className="overlay">
                          <a href="gallerySingle.html" className="info"/>
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
    </section>

  );
};

export default GalleryGrid;