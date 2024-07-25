import React, { FC, JSX } from 'react';

const BlogSingle: FC = (): JSX.Element => {
  return (
    <section className="blogSingle padding" id="content">
      <div className="container">
        <div className="row">
          <div className="blog-left">
            <div className="col-sm-8">
              <div className="owl-carousel">
                <div className="item"><img src="//assets/img/blog/galPost.png" alt=""/></div>
                <div className="item"><img src="//assets/img/blog/galPost.png" alt=""/></div>
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
              <div className="title">
                <h2>About Last Night</h2>
              </div>
              <div className="paragraph">
                <p>Chillwave forage Echo Park butcher banh mi, street art cred locavore kale chips. Before they sold out
                  YOLO street art drinking vinegar, umami hella XOXO Terry Richardson lomo craft beer Tumblr tousled
                  jean shorts tofu squid. Selvage Vice gastropub Tonx Thundercats four loko. Selfies before they sold
                  out ethical shabby chic raw denim. Vice DIY Marfa Echo Park, paleo Terry Richardson post-ironic
                  salvia. Mustache occupy hoodie, letterpress irony cliche food truck seitan four loko. Occupy
                  flexitarian meh cred, tousled Austin kale chips jean shorts shabby chic Echo Park narwhal artisan Wes
                  Anderson fap.</p>
                <p>Chillwave forage Echo Park butcher banh mi, street art cred locavore kale chips. Before they sold out
                  YOLO street art drinking vinegar, umami hella XOXO Terry Richardson lomo craft beer Tumblr tousled
                  jean shorts tofu squid. Selvage Vice gastropub Tonx Thundercats four loko. Selfies before they sold
                  out ethical shabby chic raw denim. Vice DIY Marfa Echo Park, paleo Terry Richardson post-ironic
                  salvia. Mustache occupy hoodie, letterpress irony cliche food truck seitan four loko. Occupy
                  flexitarian meh cred, tousled Austin kale chips jean shorts shabby chic Echo Park narwhal artisan Wes
                  Anderson fap.</p>
                <p>Chillwave forage Echo Park butcher banh mi, street art cred locavore kale chips. Before they sold out
                  YOLO street art drinking vinegar, umami hella XOXO Terry Richardson lomo craft beer Tumblr tousled
                  jean shorts tofu squid. Selvage Vice gastropub Tonx Thundercats four loko. Selfies before they sold
                  out ethical shabby chic raw denim. Vice DIY Marfa Echo Park, paleo Terry Richardson post-ironic
                  salvia. Mustache occupy hoodie, letterpress irony cliche food truck seitan four loko. Occupy
                  flexitarian meh cred, tousled Austin kale chips jean shorts shabby chic Echo Park narwhal artisan Wes
                  Anderson fap.</p>
              </div>
              <div className="tagBlogSingle">
                <div className="content">
                  <p>Tag Cloud:</p>
                  <a href="#">Festival</a>&nbsp;/&nbsp;
                  <a href="#">Photography</a>&nbsp;/&nbsp;
                  <a href="#">Party</a>&nbsp;/&nbsp;
                  <a href="#">Music</a>&nbsp;/&nbsp;
                  <a href="#">Dj</a>
                </div>
              </div>
              <div className="author-info">
                <div className="left-author-info">
                  <figure>
                    <img src="/assets/img/blog/blg1.png" alt=""/>
                  </figure>
                </div>
                <div className="right-author-info">
                  <h1>
                    By Admin
                  </h1>
                  <p>Literally slow-carb umami, mixtape bicycle rights salvia skateboard. Selfies squid normcore
                    chillwave, slow-carb cred Austin small batch leggings umami cliche trust fund Echo.</p>
                </div>
              </div>
              <div className="comment-container">
                <h1 className="title-comments">
                  3 Comments
                </h1>
                {/* ============== COMMENTS ============= */}
                <ul className="comments">
                  <li>
                    <div className="comment depth-1">
                      <div className="left-section">
                        <img alt="" src="/assets/img/blog/author-avatar.jpg"/>
                      </div>
                      <div className="right-section">
                        <h1>
                          <a href="#">Gabriel Groza</a>
                        </h1>
                        <p className="time-comment">Dec 15, 2015<span className="slashComment">/</span><a
                          className="comment-reply-link" href="#"> Reply</a></p>
                        <div className="comment-text">
                          <p>
                            Literally slow-carb umami, mixtape bicycle rights salvia skateboard. Selfies squid normcore
                            chillwave, slow-carb cred Austin small batch leggings umami cliche trust fund Echo Park
                            Pinterest 8-bit. PBR and B church-key keffiyeh
                          </p>
                        </div>
                      </div>
                    </div>
                    <ul className="children">
                      <li>
                        <div className="comment depth-2">
                          <div className="left-section">
                            <img alt="" src="/assets/img/blog/author-avatar.jpg"/>
                          </div>
                          <div className="right-section">
                            <h1>
                              <a href="#">Calin Tasca</a>
                            </h1>
                            <p className="time-comment">Dec 15, 2015<span className="slashComment">/</span><a
                              className="comment-reply-link" href="#"> Reply</a></p>
                            <div className="comment-text">
                              <p>
                                Literally slow-carb umami, mixtape bicycle rights salvia skateboard. Selfies squid
                                normcore chillwave, slow-carb cred Austin small batch.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="pingback even thread-even depth-1">
                      <div className="left-section">
                        <img alt="" src="/assets/img/blog/author-avatar.jpg"/>
                      </div>
                      <div className="right-section">
                        <h1>
                          <a href="#">Nimeni Daniel</a>
                        </h1>
                        <p className="time-comment">Dec 15, 2015<span className="slashComment">/</span><a
                          className="comment-reply-link" href="#"> Reply</a></p>
                        <div className="comment-text">
                          <p>
                            Literally slow-carb umami, mixtape bicycle rights salvia skateboard. Selfies squid normcore
                            chillwave, slow-carb cred Austin small batch leggings umami cliche trust fund Echo Park
                            Pinterest 8-bit. PBR and B church-key keffiyeh
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Comments */}
              <div className="singleBlogForm">
                <h1>Leave a comment</h1>
                <form action="#" method="post" className="comment-form">
                  <input id="author" name="author" type="text" defaultValue={''} aria-required="true" required
                         placeholder="Name..."/>
                  <input id="email" name="email" type="text" defaultValue={''} aria-required="true" required
                         placeholder="Email..."/>
                  <input id="url" name="url" type="text" defaultValue={''} placeholder="Website..."/>
                  <textarea name="comment" placeholder="Message..." rows={6} required defaultValue={""}/>
                  <p className="form-submit">
                    <input name="submit" type="submit" id="submit" defaultValue="Post Comment"/>
                  </p>
                </form>
              </div>
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

export default BlogSingle;