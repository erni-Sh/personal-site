// import '../../public/assets/css/master.css';

export default function Home() {
  return (
    <main>
      <div className="page-loader">
        <div className="vertical-align align-center">
          <img src="assets/loader/loader.gif" alt="" className="loader-img"/>
        </div>
      </div>

      {/* =============== START BREADCRUMB ================ */}
      <section className="no-mb">
        <div className="row">
          <div className="col-sm-12">
            <div className="breadcrumb-fullscreen-parent phone-menu-bg">
              <div className="breadcrumb breadcrumb-fullscreen alignleft small-description overlay almost-black-overlay" style={{backgroundImage: 'url("assets/img/header/header.png")'}} data-stellar-background-ratio="0.5" data-stellar-vertical-offset={0}>
                <div id="home" style={{position: 'absolute', left: 0, top: 0}}>
                  <div className="intro-header">
                    <div className="js-height-full star" style={{height: '955px'}}>
                      <div className="star-pattern-1 js-height-full" style={{height: '994px'}} />
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
                        <canvas className="cover" width={1920} height={955} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============== END BREADCRUMB ================ */}
      {/* =============== START PLAYER ================ */}
      <div className="main-music-player">
        <a className="hide-player-button">
          <i className="fa fa-plus" />
          <i className="fa fa-minus" />
        </a>
        <div id="mesh-main-player" className="jp-jplayer" data-audio-src="assets/audio/flute.mp3" data-title="See right through ft. Fiora" data-artist="Tensnake" />
        <div id="mesh-main-player-content" className="mesh-main-player" role="application" aria-label="media player">
          <div className="container">
            <div className="row">
              <div className="left-player-side">
                <div className="mesh-prev">
                  <i className="fa fa-step-backward" />
                </div>
                <div className="mesh-play">
                  <i className="fa fa-play" />
                </div>
                <div className="mesh-pause">
                  <i className="fa fa-pause" />
                </div>
                <div className="mesh-next">
                  <i className="fa fa-step-forward" />
                </div>
                <button id="playlist-toggle" className="jplayerButton">
                  <span className="span-1" />
                  <span className="span-2" />
                  <span className="span-3" />
                </button>
              </div>
              <div className="center-side">
                <div className="mesh-current-time">
                </div>
                <div className="mesh-seek-bar">
                  <div className="mesh-play-bar">
                  </div>
                </div>
                <div className="mesh-duration">
                </div>
              </div>
              <div className="right-player-side">
                <div className="mesh-thumbnail">
                  <img src="assets/img/player/thumbnail.jpg" alt="" />
                </div>
                <div className="mesh-title">
                </div>
                <div className="mesh-artist">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== END PLAYER ================ */}
      {/* =============== START PLAYLIST ================ */}
      <div className="playlist-wrapper" id="playlist-wrapper">
        <div className="jp-playlist container">
          <div className="about-list clearfix">
            <span className="about-name">NAME</span>
            <span className="about-length">LENGTH</span>
            <span className="about-available">AVAILABLE ON</span>
          </div>
          <div className="trak-item" data-audio="assets/audio/flute.mp3" data-artist="Tensnake" data-thumbnail="assets/img/player/thumbnail.png" data-id="trak-200">
            <audio preload="metadata" src="assets/audio/flute.mp3" title="See right through ft. Fiora" />
            <div className="additional-button">
              <div className="center-y-table">
                <a href="#">
                  <i className="fa fa-apple" />
                </a>
                <a href="#">
                  <i className="fa fa-soundcloud" />
                </a>
              </div>
            </div>
            <div className="play-pause-button">
              <div className="center-y-table">
                <i className="fa fa-play" />
              </div>
            </div>
            <div className="name-artist">
              <div className="center-y-table">
                <h2>
                  Tensnake - See Right Through Ft. Fiora
                </h2>
              </div>
            </div>
            <time className="trak-duration">
              00:00
            </time>
          </div>
          <div className="trak-item" data-audio="assets/audio/2.mp3" data-artist="Jack U ft. Kiesza" data-thumbnail="assets/img/player/thumbnail.png" data-id="trak-201">
            <audio preload="metadata" src="assets/audio/2.mp3" title="Take You There" />
            <div className="additional-button">
              <div className="center-y-table">
                <a href="#">
                  <i className="fa fa-apple" />
                </a>
                <a href="#">
                  <i className="fa fa-soundcloud" />
                </a>
              </div>
            </div>
            <div className="play-pause-button">
              <div className="center-y-table">
                <i className="fa fa-play" />
              </div>
            </div>
            <div className="name-artist">
              <div className="center-y-table">
                <h2>
                  Jack U ft. Kiesza - Take You There
                </h2>
              </div>
            </div>
            <time className="trak-duration">
              00:00
            </time>
          </div>
          <div className="trak-item" data-audio="assets/audio/3.mp3" data-artist="Bob Sinclair" data-thumbnail="assets/img/player/thumbnail.png" data-id="trak-201">
            <audio preload="metadata" src="assets/audio/3.mp3" title="Cinderella" />
            <div className="additional-button">
              <div className="center-y-table">
                <a href="#">
                  <i className="fa fa-apple" />
                </a>
                <a href="#">
                  <i className="fa fa-soundcloud" />
                </a>
              </div>
            </div>
            <div className="play-pause-button">
              <div className="center-y-table">
                <i className="fa fa-play" />
              </div>
            </div>
            <div className="name-artist">
              <div className="center-y-table">
                <h2>
                  Bob Sinclair - Cinderella
                </h2>
              </div>
            </div>
            <time className="trak-duration">
              00:00
            </time>
          </div>
          <div className="trak-item" data-audio="assets/audio/4.mp3" data-artist="Yuna" data-thumbnail="assets/img/player/thumbnail.png" data-id="trak-201">
            <audio preload="metadata" src="assets/audio/4.mp3" title="Lullabies" />
            <div className="additional-button">
              <div className="center-y-table">
                <a href="#">
                  <i className="fa fa-apple" />
                </a>
                <a href="#">
                  <i className="fa fa-soundcloud" />
                </a>
              </div>
            </div>
            <div className="play-pause-button">
              <div className="center-y-table">
                <i className="fa fa-play" />
              </div>
            </div>
            <div className="name-artist">
              <div className="center-y-table">
                <h2>
                  Yuna - Lullabies
                </h2>
              </div>
            </div>
            <time className="trak-duration">
              00:00
            </time>
          </div>
        </div>
      </div>
      {/* =============== END PLAYLIST ================ */}
      {/* =============== START TOP HEADER ================ */}
      <div className="topHeader">
        <div className="header">
          <div className="rightTopHeader">
            <div className="cartContainer">
              <div className="myCart">
                <ul>
                  <li className="cartTitle"><img src="assets/img/shop/cart.png" alt="" /><span>0</span></li>
                </ul>
              </div>{/* end myCart */}
              <div className="cartParent">
                <div className="cartItems">
                  <ul>
                    <li>
                      <div className="priceCart">
                        <img src="assets/img/shop/cartContainer.png" alt="" />
                        <a href="#">Hoodie T.Brothers {/* <span><i class="fa fa-times"></i></span> */}</a>
                        <p>Price:&nbsp;<span>£15,99</span></p>
                        <p className="quantity">Quantity: <span>1</span></p>
                      </div>
                    </li>
                    <li>
                      <div className="priceCart">
                        <img src="assets/img/shop/cartContainer.png" alt="" />
                        <a href="#">Hoodie T.Brothers {/* <span><i class="fa fa-times"></i></span> */}</a>
                        <p>Price:&nbsp;<span>£15,99</span></p>
                        <p className="quantity">Quantity: <span>1</span></p>
                      </div>
                    </li>
                    <li>
                      <div className="total">
                        <a href="#">Sub Total<span>31,98£</span></a>
                      </div>
                    </li>
                  </ul>
                  <button type="submit" className="single_add_to_cart_button button alt buttonView">
                    View Cart
                  </button>
                  <button type="submit" className="single_add_to_cart_button button alt buttonCheck">
                    Checkout
                  </button>
                </div>{/* end cartItems */}
              </div>{/* end cartParent */}
            </div>{/*end cartContainer  */}
            {/* Open Menu Button */}
            <a className="open-menu">
              {/* Buttons Bars */}
              <span className="span-1" />
              <span className="span-2" />
              <span className="span-3" />
            </a>
          </div>{/* end rightTopHeader */}
        </div>{/* end header */}
        {/* Menu Fixed Container */}
        <div className="menu-fixed-container">
          {/* Menu Fixed Centred Container */}
          <nav>
            {/* Menu Fixed Close Button */}
            <div className="x-filter">
              <span />
              <span />
            </div>
            {/* Menu Fixed Primary List */}
            <ul>
              {/* Menu Fixed Item */}
              <li>
                <a href="index.html">
                  home
                </a>
                <ul className="sub-menu">
                  {/* Menu Fixed Sub Menu Item */}
                  <li>
                    <a href="index.html">
                      home star
                    </a>
                  </li>
                  <li>
                    <a href="index-royal-slider.html">
                      home royal slider
                    </a>
                  </li>
                  {/* Menu Fixed Sub Menu Item */}
                  <li>
                    <a href="index-video.html">
                      home video
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="albumsGrid.html">
                  discography
                </a>
                <ul className="sub-menu">
                  {/* Menu Fixed Sub Menu Item */}
                  <li>
                    <a href="albumsFullBackground.html">
                      albums full background
                    </a>
                  </li>
                  {/* Menu Fixed Sub Menu Item */}
                  <li>
                    <a href="albumsGrid.html">
                      albums grid
                    </a>
                  </li>
                  {/* Menu Fixed Sub Menu Item */}
                  <li>
                    <a href="albumsSingle1.html">
                      album description
                    </a>
                  </li>
                </ul>
              </li>
              {/* Menu Fixed Item */}
              <li>
                <a href="events.html">
                  events
                </a>
              </li>
              {/* Menu Fixed Item */}
              <li>
                <a href="#">
                  blog
                </a>
                <ul className="sub-menu">
                  {/* Menu Fixed Sub Menu Item */}
                  <li>
                    <a href="blogGrid.html">
                      blog grid
                    </a>
                  </li>
                  {/* Menu Fixed Sub Menu Item */}
                  <li>
                    <a href="blogSidebarRight.html">
                      blog sidebar
                    </a>
                  </li>
                  {/* Menu Fixed Sub Menu Item */}
                  <li>
                    <a href="blogSingle.html">
                      blog single
                    </a>
                  </li>
                </ul>
              </li>
              {/* Menu Fixed Item */}
              <li>
                <a href="#">
                  gallery
                </a>
                <ul className="sub-menu">
                  {/* Menu Fixed Sub Menu Item */}
                  <li>
                    <a href="galleryGrid.html">
                      albums grid
                    </a>
                  </li>
                  {/* Menu Fixed Sub Menu Item */}
                  <li>
                    <a href="galleryScroll.html">
                      albums scroll
                    </a>
                  </li>
                  {/* Menu Fixed Sub Menu Item */}
                  <li>
                    <a href="gallerySingle.html">
                      gallery single
                    </a>
                  </li>
                </ul>
              </li>
              {/* Menu Fixed Item */}
              <li>
                <a href="#">
                  Other Pages
                </a>
                <ul className="sub-menu">
                  {/* Menu Fixed Sub Menu Item */}
                  <li>
                    <a href="biography.html">
                      Biography
                    </a>
                  </li>
                  {/* Menu Fixed Sub Menu Item */}
                  <li>
                    <a href="video.html">
                      Video
                    </a>
                  </li>
                </ul>
              </li>
              {/* Menu Fixed Item */}
              <li>
                <a href="contact.html">
                  contact
                </a>
              </li>
              {/* Menu Fixed Item */}
              <li>
                <a href="shop.html">
                  shop
                </a>
              </li>
            </ul>
            {/* Menu Fixed Close Button */}
            <div className="x-filter">
              <span />
              <span />
            </div>
          </nav>
        </div>{/* end menu-fixed-container */}
        {/* =============== STAR LOGO ================ */}
        <div className="logo-container-top">
          <a href="index.html"><img src="assets/img/logo/whiteLogo.png" alt="Aqura" /></a>
        </div>{/* end logo-container-top */}
        {/* =============== END LOGO ================ */}
      </div>{/* end topHeader */}
      {/* =============== END TOP HEADER ================ */}
      {/* =============== START ALBUM COVER SECTION ================ */}
      <section className="padding albumsHome hide-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sectionTitle paddingBottom">
                <span className="heading-t3" />
                <h2><a href="albumsFullBackground.html">Discography</a></h2>
                <span className="heading-b3" />
              </div>{/* end sectionTtile */}
            </div>{/* end col-sm-12 */}
          </div>
          <div className="list-albums">
            <ul className="list-feature col-md-12 col-xs-12 col-sm-12">
              <li className="col-md-3 col-sm-3 col-xs-12">
                <div className="album-icon">
                    <span className="thumbs-album">
                      <a href="albumsSingle1.html"><img width={270} height={270} src="assets/img/albums/albumCover.png" className="attachment-album-thumbnail wp-post-image" alt="album-cover-1" /></a>
                    </span>
                  <span className="disk" />
                </div>{/* END ALBUM ICON */}
                <div className="name">
                  <h3>Noon Xoxo</h3>
                  <p>Chillout</p>
                </div>{/* end name */}
              </li>
              <li className="col-md-3 col-sm-3 col-xs-12">
                <div className="album-icon albumIcon1">
                    <span className="thumbs-album">
                      <a href="albumsSingle3.html"><img width={270} height={270} src="assets/img/albums/albumCover.png" className="attachment-album-thumbnail wp-post-image" alt="album-cover-1" /></a>
                    </span>
                  <span className="disk" />
                </div>
                <div className="name">
                  <h3>Stunt Vibe</h3>									<p>Chillout</p>
                </div>
              </li>
              <li className="col-md-3 col-sm-3 col-xs-12">
                <div className="album-icon albumIcon2">
                    <span className="thumbs-album">
                      <a href="albumsSingle4.html"><img width={270} height={270} src="assets/img/albums/albumCover.png" className="attachment-album-thumbnail wp-post-image" alt="album-cover-1" /></a>
                    </span>
                  <span className="disk" />
                </div>
                <div className="name">
                  <h3>Strange Clouds</h3>								<p>Chillout</p>
                </div>
              </li>
              <li className="col-md-3 col-sm-3 col-xs-12">
                <div className="album-icon albumIcon3">
                    <span className="thumbs-album">
                      <a href="albumsSingle2.html"><img width={270} height={270} src="assets/img/albums/albumCover.png" className="attachment-album-thumbnail wp-post-image" alt="album-cover-1" /></a>
                    </span>
                  <span className="disk" />
                </div>
                <div className="name">
                  <h3>Natural Earth</h3>								<p>Chillout</p>
                </div>
              </li>
            </ul>
          </div>{/* end list-albums */}
        </div>{/* end container */}
      </section>
      {/* =============== END ALBUM COVER SECTION ================ */}
      {/* =============== START EVENTS SECTION-1 ================ */}
      <section style={{backgroundImage: 'url(assets/img/events/tableEventsHome.png)'}} className="background-properties hide-section paddingHomeEvents">
        <div className="tableEvents">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="sectionTitle paddingBottom">
                  <span className="heading-t3" />
                  <h2><a href="events.html">Events</a></h2>
                  <span className="heading-b3" />
                </div>{/* end sectionTtile */}
                <table>
                  <tbody><tr className="tableEventsTitle">
                    <th className="date">Date</th>
                    <th className="venue">Venue</th>
                    <th className="location">Location</th>
                    <th className="tickets">Tickets</th>
                    <th />
                  </tr>
                  <tr>
                    <td className="aqura-date"><a href="#"><i className="fa fa-plus" /></a><a href="singleEvent.html">Mar 06</a></td>
                    <td className="aqura-location"><a href="singleEvent.html">Central Park</a></td>
                    <td className="aqura-city"><a href="singleEvent.html">Cluj Napoca, Bontida Romania</a></td>
                    <td className="aqura-tickets"><a href="singleEvent.html">Tickets</a></td>
                    <td className="aqura-vip"><a href="singleEvent.html">RSVP</a></td>
                  </tr>
                  <tr>
                    <td className="aqura-date"><a href="#"><i className="fa fa-plus" /></a><a href="singleEvent.html">Mar 06</a></td>
                    <td className="aqura-location"><a href="singleEvent.html">Central Park</a></td>
                    <td className="aqura-city"><a href="singleEvent.html">Cluj Napoca, Bontida Romania</a></td>
                    <td className="aqura-tickets"><a href="singleEvent.html">Tickets</a></td>
                    <td className="aqura-vip"><a href="singleEvent.html">RSVP</a></td>
                  </tr>
                  <tr>
                    <td className="aqura-date"><a href="#"><i className="fa fa-plus" /></a><a href="singleEvent.html">Mar 06</a></td>
                    <td className="aqura-location"><a href="singleEvent.html">Central Park</a></td>
                    <td className="aqura-city"><a href="singleEvent.html">Cluj Napoca, Bontida Romania</a></td>
                    <td className="aqura-tickets"><a href="singleEvent.html">Tickets</a></td>
                    <td className="aqura-vip"><a href="singleEvent.html">RSVP</a></td>
                  </tr>
                  <tr>
                    <td className="aqura-date"><a href="#"><i className="fa fa-plus" /></a><a href="singleEvent.html">Mar 06</a></td>
                    <td className="aqura-location"><a href="singleEvent.html">Central Park</a></td>
                    <td className="aqura-city"><a href="singleEvent.html">Cluj Napoca, Bontida Romania</a></td>
                    <td className="aqura-tickets"><a href="singleEvent.html">Tickets</a></td>
                    <td className="aqura-vip"><a href="singleEvent.html">RSVP</a></td>
                  </tr>
                  <tr>
                    <td className="aqura-date"><a href="#"><i className="fa fa-plus" /></a><a href="singleEvent.html">Mar 06</a></td>
                    <td className="aqura-location"><a href="singleEvent.html">Central Park</a></td>
                    <td className="aqura-city"><a href="singleEvent.html">Cluj Napoca, Bontida Romania</a></td>
                    <td className="aqura-tickets"><a href="singleEvent.html">Tickets</a></td>
                    <td className="aqura-vip"><a href="singleEvent.html">RSVP</a></td>
                  </tr>
                  </tbody></table>
              </div>{/* end col-sm-12 */}
            </div>{/* end row */}
          </div>{/* end container */}
        </div>{/* end tableEvents */}
      </section>
      {/* =============== END EVENTS SECTION-1 ================ */}
      {/* =============== START EVENTS SECTION-2 ================ */}
      <section className="padding hide-section countdownSection background-properties" style={{backgroundImage: 'url(assets/img/events/countdownHome.png)'}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="countdownTitle">
                <h4>Next Event</h4>
                <a href="singleEvent.html"><img src="assets/img/events/box.png" alt="Event" /></a>
              </div>
              <div className="sm-countdown sm_content_element sm-style2" id="sm_countdown-19" data-date="2016/10/23">
                <div className="displayCounter">
                  <div className="column">
                    <div className="sm_countdown_inner">
                      <input className="element days" readOnly="readonly" data-min={0} data-max={365} data-width={200} data-height={200} data-thickness="0.15" data-fgcolor="#fff" data-bgcolor="#8e8d8d" data-angleoffset={180} />
                      <span className="unit days-title">days</span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="sm_countdown_inner">
                      <input className="element hour" readOnly="readonly" data-min={0} data-max={24} data-width={200} data-height={200} data-thickness="0.15" data-fgcolor="#fff" data-bgcolor="#8e8d8d" data-angleoffset={180} />
                      <span className="unit hours-title">hrs</span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="sm_countdown_inner">
                      <input className="element minute" readOnly="readonly" data-min={0} data-max={60} data-width={200} data-height={200} data-thickness="0.15" data-fgcolor="#fff" data-bgcolor="#8e8d8d" data-angleoffset={180} />
                      <span className="unit mins-title">min</span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="sm_countdown_inner">
                      <input className="element second" readOnly="readonly" data-min={0} data-max={60} data-width={200} data-height={200} data-thickness="0.15" data-fgcolor="#fff" data-bgcolor="#8e8d8d" data-angleoffset={180} />
                      <span className="unit secs-title">sec</span>
                    </div>
                  </div>
                </div>
              </div>{/* end sm-countdown */}
            </div>
          </div>
        </div>
      </section>
      {/* =============== END EVENTS SECTION-2 ================ */}
      {/* =============== START HOME-BLOG SECTION ================ */}
      <section className="padding hide-section background-properties blogHomeSection" style={{backgroundImage: 'url(assets/img/blog/homeBlog.png)'}}>
        <div className="container">
          <div className="row">
            <div className="sectionTitle paddingBottom">
              <span className="heading-t3" />
              <h2><a href="blogGrid.html">News</a></h2>
              <span className="heading-b3" />
            </div>{/* end sectionTtile */}
            <div className="col-sm-4">
              <div className="blogBox">
                <div className="imgBox"><img src="assets/img/blog/homeGalPost.png" alt="box-img" /></div>
                <div className="blogBoxContent">
                  <div className="blogHeader">
                    <h1><a href="blogSingle.html">Gallery Post</a></h1>
                  </div>
                  <div className="admin-list clearfix">
                    <ul>
                      <li><a href="#">08 dec 2016</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">By Admin</a></li>
                    </ul>
                  </div>{/* end admin-list */}
                  <div className="blogParagraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                  </div>{/*end blogParagraph  */}
                  <div className="rmButton">
                    <a href="#">Read More</a>
                  </div>
                </div>{/* end blogBoxContent */}
              </div>{/* end blogBox */}
            </div>{/* end col-sm-4 */}
            <div className="col-sm-4">
              <div className="blogBox">
                <div className="videoBox"><iframe src="https://player.vimeo.com/video/145837856" width={600} height={410} /></div>
                <div className="blogBoxContent">
                  <div className="blogHeader">
                    <h1><a href="blogSingle.html">Video Post</a></h1>
                  </div>
                  <div className="admin-list clearfix">
                    <ul>
                      <li><a href="#">28 apr 2016</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">By Admin</a></li>
                    </ul>
                  </div>{/* end admin-list */}
                  <div className="blogParagraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                  </div>{/*end blogParagraph  */}
                  <div className="rmButton">
                    <a href="#">Read More</a>
                  </div>
                </div>{/* end blogBoxContent */}
              </div>{/* end blogBox */}
            </div>{/* end col-sm-4 */}
            <div className="col-sm-4">
              <div className="blogBox">
                <div className="soundcloudBox"><iframe height={203} src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/73595878&color=bb9b69&show_artwork=false&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false" /></div>
                <div className="blogBoxContent">
                  <div className="blogHeader">
                    <h1><a href="blogSingle.html">Soundcloud Post</a></h1>
                  </div>
                  <div className="admin-list clearfix">
                    <ul>
                      <li><a href="#">08 dec 2016</a>&nbsp;/&nbsp;</li>
                      <li><a href="#">By Admin</a></li>
                    </ul>
                  </div>{/* end admin-list */}
                  <div className="blogParagraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                  </div>{/*end blogParagraph  */}
                  <div className="rmButton">
                    <a href="#">Read More</a>
                  </div>
                </div>{/* end blogBoxContent */}
              </div>{/* end blogBox */}
            </div>{/* end col-sm-4 */}
          </div>{/* end container */}
        </div>{/* end row */}
      </section>
      {/* =============== END HOME-NLOG SECTION ================ */}
      {/* =============== START TWITTER SECTION ================ */}
      <section className="padding hide-section background-properties" style={{backgroundImage: 'url(assets/img/twitter/homeTwitter.png)'}}>
        <div className="twitter">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="twitterLogo">
                  <a href="#"><img src="assets/img/content/twitterLogo.png" alt="twitterLogo" /></a>
                  <a href="#" className="linkTwitter">@ThemeBrothers</a>
                </div>
                <p>AQURA - Creative Theme for dj, bands and musicians #HTML#Theme now available on #ThemeForest - <a href="https://twitter.com/?request_context=signup">https://twitter.com/?request_context=signup</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============== END TWITTER SECTION ================ */}
      {/* =============== START VIDEO SECTION ================ */}
      <section className="videoHome hide-section padding">
        <div className="container">
          <div className="row">
            <div className="sectionTitle">
              <span className="heading-t3" />
              <h2><a href="video.html">Upload Video</a></h2>
              <span className="heading-b3" />
              <p>Check out my latest videos and follow me on <a href="#">Youtube</a> &amp; <a href="#">Vimeo</a> to view more.</p>
            </div>{/* end sectionTtile */}
            <div className="col-sm-4">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/VV-Q-aRHTDE" allowFullScreen />
            </div>{/* end col-sm-4 */}
            <div className="col-sm-4">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/VxG5C4q_rEs" allowFullScreen />
            </div>{/* end col-sm-4 */}
            <div className="col-sm-4">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/OkbuRa1o1wA" allowFullScreen />
            </div>{/* end col-sm-4 */}
          </div>
        </div>
      </section>
      {/* =============== END VIDEO SECTION ================ */}
      {/* =============== START GALLERY SECTION ================ */}
      <section style={{paddingBottom: 0, paddingTop: 0}} className="hide-section">
        <div className="gallerySection">
          <div className="container-fluid" style={{padding: 0}}>
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
                            <img className="img-responsive" src="assets/img/gallery/wideGal.png" alt="" />
                            <div className="overlay">
                              <a className="info lightbox" href="assets/img/gallery/wideGal.png" />
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
                            <img className="img-responsive" src="assets/img/gallery/squareGal.png" alt="" />
                            <div className="overlay">
                              <a className="info lightbox" href="assets/img/gallery/wideGal.png" />
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
                            <img className="img-responsive" src="assets/img/gallery/squareGal.png" alt="" />
                            <div className="overlay">
                              <a className="info lightbox" href="assets/img/gallery/wideGal.png" />
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
                            <img className="img-responsive" src="assets/img/gallery/squareGal.png" alt="" />
                            <div className="overlay">
                              <a className="info lightbox" href="assets/img/gallery/wideGal.png" />
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
                            <img className="img-responsive" src="assets/img/gallery/squareGal.png" alt="" />
                            <div className="overlay">
                              <a className="info lightbox" href="assets/img/gallery/wideGal.png" />
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
                            <img className="img-responsive" src="assets/img/gallery/wideGal.png" alt="" />
                            <div className="overlay">
                              <a className="info lightbox" href="assets/img/gallery/wideGal.png" />
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* end container */}
        </div>
      </section>
      {/* =============== END GALLERY SECTION ================ */}
      {/* =============== START HOME-SHOP SECTION ================ */}
      <section className="shopHomePage shopHomePadding hide-section">
        <div className="shopSection">
          <div className="container-fluid">
            <div className="shopContent">
              <div className="sectionTitle paddingBottom">
                <span className="heading-t3" />
                <h2><a href="shop.html">Shop Online</a></h2>
                <span className="heading-b3" />
              </div>{/* end sectionTtile */}
              <div className="row">
                <nav className="shop-products">
                  <ul className="clearfix">
                    <li className="col-sm-3">
                      <figure>
                        <figcaption>
                          <img src="assets/img/shop/shopProduct.png" alt="" />
                        </figcaption>
                        <div className="content">
                          <div className="shopHover">
                            <div className="price">
                              £ 15,99
                            </div>
                            <div className="proTitle">
                              <a href="shopSingle.html">Original T. Brothers</a>
                            </div>
                            <div className="product">Hoodie Aqura</div>
                            <a href="shopSingle.html" className="icon-button shopIcon"><i className="fa fa-shopping-cart" /><span /></a>
                            <a href="shopSingle.html" className="icon-button shopIcon"><i className="fa fa-info" /><span /></a>
                          </div>
                        </div>
                      </figure>
                    </li>
                    <li className="col-sm-3">
                      <figure>
                        <figcaption>
                          <img src="assets/img/shop/shopProduct.png" alt="" />
                        </figcaption>
                        <div className="content">
                          <div className="shopHover">
                            <div className="price">
                              £ 15,99
                            </div>
                            <div className="proTitle">
                              <a href="shopSingle.html">Original T. Brothers</a>
                            </div>
                            <div className="product">Hoodie Aqura</div>
                            <a href="shopSingle.html" className="icon-button shopIcon"><i className="fa fa-shopping-cart" /><span /></a>
                            <a href="shopSingle.html" className="icon-button shopIcon"><i className="fa fa-info" /><span /></a>
                          </div>
                        </div>
                      </figure>
                    </li>
                    <li className="col-sm-3">
                      <figure>
                        <figcaption>
                          <img src="assets/img/shop/shopProduct.png" alt="" />
                        </figcaption>
                        <div className="content">
                          <div className="shopHover">
                            <div className="price">
                              £ 15,99
                            </div>
                            <div className="proTitle">
                              <a href="shopSingle.html">Original T. Brothers</a>
                            </div>
                            <div className="product">Hoodie Aqura</div>
                            <a href="shopSingle.html" className="icon-button shopIcon"><i className="fa fa-shopping-cart" /><span /></a>
                            <a href="shopSingle.html" className="icon-button shopIcon"><i className="fa fa-info" /><span /></a>
                          </div>
                        </div>
                      </figure>
                    </li>
                    <li className="col-sm-3">
                      <figure>
                        <figcaption>
                          <img src="assets/img/shop/shopProduct.png" alt="" />
                        </figcaption>
                        <div className="content">
                          <div className="shopHover">
                            <div className="price">
                              £ 15,99
                            </div>
                            <div className="proTitle">
                              <a href="shopSingle.html">Original T. Brothers</a>
                            </div>
                            <div className="product">Hoodie Aqura</div>
                            <a href="shopSingle.html" className="icon-button shopIcon"><i className="fa fa-shopping-cart" /><span /></a>
                            <a href="shopSingle.html" className="icon-button shopIcon"><i className="fa fa-info" /><span /></a>
                          </div>
                        </div>
                      </figure>
                    </li>
                  </ul>
                </nav>{/* end shop-products */}
              </div>{/* end row */}
            </div>{/* end shopContent */}
          </div>
        </div>
      </section>
      {/* =============== END HOME-SHOP SECTION ================ */}
      {/* =============== START FOOTER ================ */}
      <section style={{backgroundColor: '#eeeeee'}} className="hide-section">
        <div className="footer footerPadding">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="copyFooter">
                  <a href="#">© Aqura 2016</a>
                </div>
              </div>
              <div className="col-sm-4">
                <nav className="social-icons">
                  <ul className="clearfix">
                    <li><a href="#" className="icon-button shopIcon"><i className="fa fa-twitter" /><span /></a></li>
                    <li><a href="#" className="icon-button shopIcon"><i className="fa fa-facebook" /><span /></a></li>
                    <li><a href="#" className="icon-button shopIcon"><i className="fa fa-apple" /><span /></a></li>
                    <li><a href="#" className="icon-button shopIcon"><i className="fa fa-lastfm" /><span /></a></li>
                    <li><a href="#" className="icon-button shopIcon"><i className="fa fa-soundcloud" /><span /></a></li>
                    <li><a href="#" className="icon-button shopIcon"><i className="fa fa-youtube-play" /><span /></a></li>
                    <li><a href="#" className="icon-button shopIcon"><i className="fa fa-vimeo" /><span /></a></li>
                  </ul>
                </nav>
              </div>
              <div className="col-sm-4">
                <div className="goTop back-to-top" id="back-to-top">
                  <i className="fa fa-angle-up" />
                  <a href="#">Go Top</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
