import React, {FC, JSX} from 'react';

const HomeBlog: FC = (): JSX.Element => {
  return (
    <section className="padding hide-section background-properties blogHomeSection"
             style={{backgroundImage: 'url(assets/img/blog/homeBlog.png)'}}>
      <div className="container">
        <div className="row">
          <div className="sectionTitle paddingBottom">
            <span className="heading-t3"/>
            <h2><a href="blogGrid.html">News</a></h2>
            <span className="heading-b3"/>
          </div>
          {/* end sectionTtile */}
          <div className="col-sm-4">
            <div className="blogBox">
              <div className="imgBox"><img src="/assets/img/blog/homeGalPost.png" alt="box-img"/></div>
              <div className="blogBoxContent">
                <div className="blogHeader">
                  <h1><a href="blogSingle.html">Gallery Post</a></h1>
                </div>
                <div className="admin-list clearfix">
                  <ul>
                    <li><a href="#">08 dec 2016</a>&nbsp;/&nbsp;</li>
                    <li><a href="#">By Admin</a></li>
                  </ul>
                </div>
                {/* end admin-list */}
                <div className="blogParagraph">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida
                    pellentesque urna varius vitae.</p>
                </div>
                {/*end blogParagraph  */}
                <div className="rmButton">
                  <a href="#">Read More</a>
                </div>
              </div>
              {/* end blogBoxContent */}
            </div>
            {/* end blogBox */}
          </div>
          {/* end col-sm-4 */}
          <div className="col-sm-4">
            <div className="blogBox">
              <div className="videoBox">
                <div className={'fluid-width-video-wrapper'} style={{ paddingTop: '56.25%'}}>
                  <iframe src="https://player.vimeo.com/video/145837856" width={600} height={410}/>
                </div>
              </div>
              <div className="blogBoxContent">
                <div className="blogHeader">
                  <h1><a href="blogSingle.html">Video Post</a></h1>
                </div>
                <div className="admin-list clearfix">
                  <ul>
                    <li><a href="#">28 apr 2016</a>&nbsp;/&nbsp;</li>
                    <li><a href="#">By Admin</a></li>
                  </ul>
                </div>
                {/* end admin-list */}
                <div className="blogParagraph">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida
                    pellentesque urna varius vitae.</p>
                </div>
                {/*end blogParagraph  */}
                <div className="rmButton">
                  <a href="#">Read More</a>
                </div>
              </div>
              {/* end blogBoxContent */}
            </div>
            {/* end blogBox */}
          </div>
          {/* end col-sm-4 */}
          <div className="col-sm-4">
            <div className="blogBox">
              <div className="soundcloudBox">
                <div className={'fluid-width-video-wrapper'} style={{ paddingTop: '67.6667%'}}>
                  <iframe height={203} src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/73595878&color=bb9b69&show_artwork=false&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false"/>
                </div>
              </div>
              <div className="blogBoxContent">
                <div className="blogHeader">
                  <h1><a href="blogSingle.html">Soundcloud Post</a></h1>
                </div>
                <div className="admin-list clearfix">
                  <ul>
                    <li><a href="#">08 dec 2016</a>&nbsp;/&nbsp;</li>
                    <li><a href="#">By Admin</a></li>
                  </ul>
                </div>
                {/* end admin-list */}
                <div className="blogParagraph">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida
                    pellentesque urna varius vitae.</p>
                </div>
                {/*end blogParagraph  */}
                <div className="rmButton">
                  <a href="#">Read More</a>
                </div>
              </div>
              {/* end blogBoxContent */}
            </div>
            {/* end blogBox */}
          </div>
          {/* end col-sm-4 */}
        </div>
        {/* end container */}
      </div>
      {/* end row */}
    </section>
  );
};

export default HomeBlog;