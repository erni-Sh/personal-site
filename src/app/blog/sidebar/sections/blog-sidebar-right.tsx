import React, { FC, JSX } from 'react';

const BlogSidebarRight: FC = (): JSX.Element => {
  return (
    <section className="blogSidebarRight padding" id="content">
      <div className="container">
        <div className="row">
          <div className="blog-sidebar-right">
            <div className="col-sm-8">
              <div className="blogBox">
                <div className="owl-carousel">
                  <div className="item"><img src="/assets/img/blog/galPost.png" alt=""/></div>
                  <div className="item"><img src="/assets/img/blog/galPost.png" alt=""/></div>
                </div>
                <div className="blogBoxContent">
                  <div className="blogHeader">
                    <h1><a href="blogSingle.html">Gallery Post</a></h1>
                  </div>
                  <div className="admin-list clearfix">
                    <ul>
                      <li><a href="#">08 dec 2016</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">By Admin</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">Categories</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">Gallery</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">2 Comments</a></li>
                    </ul>
                  </div>
                  <div className="blogParagraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus hic nam voluptatem mollitia
                      doloribus! Tempora neque pariatur saepe error esse soluta repellat laboriosam aperiam qui
                      accusantium placeat, aspernatur maxime, magnam id veritatis quas obcaecati architecto laborum!
                      Odio illum aperiam beatae earum dicta.</p>
                  </div>
                  {/*end blogParagraph  */}
                  <div className="rmButton">
                    <a href="blogSingle.html">Read More</a>
                  </div>
                </div>
                {/* end blogBoxContent */}
              </div>
              {/* end blogBox */}
              <div className="blogBox">
                <iframe src="https://player.vimeo.com/video/73340128" width={500} height={281}/>
                <div className="blogBoxContent">
                  <div className="blogHeader">
                    <h1><a href="blogSingle.html">VIdeo Post</a></h1>
                  </div>
                  <div className="admin-list clearfix">
                    <ul>
                      <li><a href="#">08 dec 2016</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">By Admin</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">Categories</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">Gallery</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">2 Comments</a></li>
                    </ul>
                  </div>
                  <div className="blogParagraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus hic nam voluptatem mollitia
                      doloribus! Tempora neque pariatur saepe error esse soluta repellat laboriosam aperiam qui
                      accusantium placeat, aspernatur maxime, magnam id veritatis quas obcaecati architecto laborum!
                      Odio illum aperiam beatae earum dicta.</p>
                  </div>
                  {/*end blogParagraph  */}
                  <div className="rmButton">
                    <a href="blogSingle.html">Read More</a>
                  </div>
                </div>
                {/* end blogBoxContent */}
              </div>
              {/* end blogBox */}
              <div className="blogBox">
                <iframe width={100} height={53}
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/156842497&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"/>
                <div className="blogBoxContent">
                  <div className="blogHeader">
                    <h1><a href="blogSingle.html">Soundcloud Post</a></h1>
                  </div>
                  <div className="admin-list clearfix">
                    <ul>
                      <li><a href="#">08 dec 2016</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">By Admin</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">Categories</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">Gallery</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">2 Comments</a></li>
                    </ul>
                  </div>
                  <div className="blogParagraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus hic nam voluptatem mollitia
                      doloribus! Tempora neque pariatur saepe error esse soluta repellat laboriosam aperiam qui
                      accusantium placeat, aspernatur maxime, magnam id veritatis quas obcaecati architecto laborum!
                      Odio illum aperiam beatae earum dicta.</p>
                  </div>
                  {/*end blogParagraph  */}
                  <div className="rmButton">
                    <a href="blogSingle.html">Read More</a>
                  </div>
                </div>
                {/* end blogBoxContent */}
              </div>
              {/* end blogBox */}
              <div className="blogBox">
                <div className="blogBoxContent">
                  <div className="blogHeader">
                    <h1><a href="blogSingle.html">Standard Post</a></h1>
                  </div>
                  <div className="admin-list clearfix">
                    <ul>
                      <li><a href="#">08 dec 2016</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">By Admin</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">Categories</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">Gallery</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">2 Comments</a></li>
                    </ul>
                  </div>
                  <div className="blogParagraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus hic nam voluptatem mollitia
                      doloribus! Tempora neque pariatur saepe error esse soluta repellat laboriosam aperiam qui
                      accusantium placeat, aspernatur maxime, magnam id veritatis quas obcaecati architecto laborum!
                      Odio illum aperiam beatae earum dicta.</p>
                  </div>
                  {/*end blogParagraph  */}
                  <div className="rmButton">
                    <a href="blogSingle.html">Read More</a>
                  </div>
                </div>
                {/* end blogBoxContent */}
              </div>
              {/* end blogBox */}
            </div>
            {/* end col-sm-8 */}
          </div>
          {/* end blog-left */}
          <div className="blog-right">
            <div className="col-sm-3 col-sm-offset-1">
              <div className="blogSidebar">
                <div className="widget">
                  <h3 className="widget-title">Categories</h3>
                  <ul>
                    <li>Audio<span>(2)</span></li>
                    <li>News<span>(3)</span></li>
                    <li>Standard<span>(5)</span></li>
                    <li>Video<span>(1)</span></li>
                    <li>Soundcloud<span>(6)</span></li>
                    <li>Gallery<span>(3)</span></li>
                  </ul>
                </div>
                {/* end widget */}
                <div className="widget">
                  <h3 className="widget-title">Recent Posts</h3>
                  <ul>
                    <li><a href="#">About Last Night</a></li>
                    <li><a href="#">Video Post</a></li>
                    <li><a href="#">Soundcloud</a></li>
                    <li><a href="#">Post With Audio Tracks</a></li>
                    <li><a href="#">Soundcloud Post</a></li>
                    <li><a href="#">Standard Post</a></li>
                  </ul>
                </div>
                {/* end widget */}
                <div className="widget">
                  <h3 className="widget-title">Tweets</h3>
                  {/* twitter */}
                  <a className="twitter-timeline" href="https://twitter.com/UntoldFestival"
                     data-widget-id={716220714324467712}>Tweets by @UntoldFestival</a>
                </div>
                {/* end widget */}
                <div className="widget tagCloud">
                  <h3 className="widget-title">Tag Cloud</h3>
                  <ul>
                    <li><a href={"#"}>Audio</a>&nbsp;/&nbsp;</li>
                    <li><a href="#">Best Event</a>&nbsp;/&nbsp;</li>
                    <li><a href="#">Festival</a>&nbsp;/&nbsp;</li>
                    <li><a href="#">Albums</a>&nbsp;/&nbsp;</li>
                    <li><a href="#">Soundcloud</a>&nbsp;/&nbsp;</li>
                    <li><a href="#">Video</a>&nbsp;/&nbsp;</li>
                    <li><a href="#">Summer</a>&nbsp;/&nbsp;</li>
                    <li><a href="#">People</a>&nbsp;/&nbsp;</li>
                    <li><a href="#">Bands</a>&nbsp;/&nbsp;</li>
                    <li><a href="#">Concert</a>&nbsp;/&nbsp;</li>
                  </ul>
                </div>
                {/* end widget */}
              </div>
              {/* end blogSidebar */}
            </div>
            {/* end col-sm03 */}
          </div>
          {/* end blog-right */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
};

export default BlogSidebarRight;