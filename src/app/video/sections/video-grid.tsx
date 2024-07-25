import React, { FC, JSX } from 'react';

const VideoGrid: FC = (): JSX.Element => {
  return (
    <section className="videoG padding" id="content">
      <div className="videoInner">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                <div className="videoTitle">
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/VV-Q-aRHTDE" allowFullScreen/>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="videoTitle">
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/VxG5C4q_rEs" allowFullScreen/>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="videoTitle">
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/OkbuRa1o1wA" allowFullScreen/>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="videoTitle">
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/VxG5C4q_rEs" allowFullScreen/>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="videoTitle">
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/VV-Q-aRHTDE" allowFullScreen/>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="videoTitle">
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/OkbuRa1o1wA" allowFullScreen/>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="videoTitle" style={{paddingBottom: 0}}>
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/OkbuRa1o1wA" allowFullScreen/>
                </div>
              </div>
              <div className="col-sm-4" style={{paddingBottom: 0}}>
                <div className="videoTitle">
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/VxG5C4q_rEs" allowFullScreen/>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="videoTitle" style={{paddingBottom: 0}}>
                  <iframe width={560} height={315} src="https://www.youtube.com/embed/VV-Q-aRHTDE" allowFullScreen/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;