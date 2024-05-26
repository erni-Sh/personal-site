import React, {FC, JSX} from 'react';

const HomeVideo: FC = (): JSX.Element => {
  return (
    <section className="videoHome hide-section padding">
      <div className="container">
        <div className="row">
          <div className="sectionTitle">
            <span className="heading-t3"/>
            <h2><a href="video.html">Upload Video</a></h2>
            <span className="heading-b3"/>
            <p>Check out my latest videos and follow me on <a href="#">Youtube</a> &amp; <a href="#">Vimeo</a> to view
              more.</p>
          </div>
          {/* end sectionTtile */}
          <div className="col-sm-4">
            <iframe width={560} height={315} src="https://www.youtube.com/embed/VV-Q-aRHTDE" allowFullScreen/>
          </div>
          {/* end col-sm-4 */}
          <div className="col-sm-4">
            <iframe width={560} height={315} src="https://www.youtube.com/embed/VxG5C4q_rEs" allowFullScreen/>
          </div>
          {/* end col-sm-4 */}
          <div className="col-sm-4">
            <iframe width={560} height={315} src="https://www.youtube.com/embed/OkbuRa1o1wA" allowFullScreen/>
          </div>
          {/* end col-sm-4 */}
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;