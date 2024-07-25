import React, { FC, JSX } from 'react';

const BlogGrid: FC = (): JSX.Element => {
  return (
    <section className="aquraFilter padding" id="content">
      <div className="container">
        {/* start blog-filter-category */}
        <div className="categories">
          <ul className="clearfix" data-option-key="filter">
            <li><a href="#"><i className="fa fa-filter"/></a></li>
            <li><a href="#" className="selected" data-option-value="*">All</a></li>
            <li><a href="#" data-option-value=".news">News</a></li>
            <li><a href="#" data-option-value=".audio">Audio</a></li>
            <li><a href="#" data-option-value=".cloud">Soundcloud</a></li>
            <li><a href="#" data-option-value=".video">Video</a></li>
            <li><a href="#" data-option-value=".gallery">Gallery</a></li>
            <li><a href="#" data-option-value=".standard">Standard</a></li>
          </ul>
        </div>
        {/*end categories*/}
        {/* end blog-filter-category */}
        {/* start filter */}
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="aqura-filter-content">
              <ul className="clearfix">
                <li className="col-sm-4 col-xs-12 news gallery">
                  <div className="blogBox">
                    <div className="owl-carousel">
                      <div className="item"><img src="assets/img/blog/galPostGrid.png" alt=""/></div>
                      <div className="item"><img src="assets/img/blog/galPostGrid.png" alt=""/></div>
                    </div>
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
                        <a href="blogSingle.html">Read More</a>
                      </div>
                    </div>
                    {/* end blogBoxContent */}
                  </div>
                  {/* end blogBox */}
                </li>
                {/* end col-sm-4 */}
                <li className="col-sm-4 col-xs-12 video">
                  <div className="blogBox">
                    <iframe src="https://player.vimeo.com/video/73340128" width={500} height={281}/>
                    <div className="blogBoxContent">
                      <div className="blogHeader">
                        <h1><a href="blogSingle.html">VIdeo Post</a></h1>
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
                        <a href="blogSingle.html">Read More</a>
                      </div>
                    </div>
                    {/* end blogBoxContent */}
                  </div>
                  {/* end blogBox */}
                </li>
                {/* end col-sm-4 col-xs-12 */}
                <li className="col-sm-4 col-xs-12 cloud audio">
                  <div className="blogBox">
                    <iframe height={200}
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/73595878&color=bb9b69&show_artwork=false&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false"/>
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
                        <a href="blogSingle.html">Read More</a>
                      </div>
                    </div>
                    {/* end blogBoxContent */}
                  </div>
                  {/* end blogBox */}
                </li>
                {/* end col-sm-4 col-xs-12 */}
                <li className="col-sm-4 col-xs-12 standard ">
                  <div className="blogBox">
                    <div className="imgBox"><img src="assets/img/blog/gridPost.png" alt="box-img"/></div>
                    <div className="blogBoxContent">
                      <div className="blogHeader">
                        <h1><a href="blogSingle.html">Last Show Post</a></h1>
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
                        <a href="blogSingle.html">Read More</a>
                      </div>
                    </div>
                    {/* end blogBoxContent */}
                  </div>
                  {/* end blogBox */}
                </li>
                {/* end col-sm-4 col-xs-12 */}
                <li className="col-sm-4 col-xs-12 living">
                  <div className="blogBox">
                    <div className="blogBoxContent">
                      <div className="blogHeader">
                        <h1><a href="blogSingle.html">Standard Post</a></h1>
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
                        <a href="blogSingle.html">Read More</a>
                      </div>
                    </div>
                    {/* end blogBoxContent */}
                  </div>
                  {/* end blogBox */}
                </li>
                {/* end col-sm-4 col-xs-12 */}
                <li className="col-sm-4 col-xs-12 standard">
                  <div className="blogBox">
                    <div className="blogBoxContent">
                      <div className="blogHeader">
                        <h1><a href="blogSingle.html">Standard Post</a></h1>
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
                        <a href="blogSingle.html">Read More</a>
                      </div>
                    </div>
                    {/* end blogBoxContent */}
                  </div>
                  {/* end blogBox */}
                </li>
                {/* end col-sm-4 */}
              </ul>
            </div>
            {/* end aqura-filter-cotent */}
          </div>
          {/* end col-sm-12 */}
        </div>
        {/* end row */}
        {/* end filter */}
      </div>
      {/* end container */}
    </section>
  );
};

export default BlogGrid;