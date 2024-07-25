import React, { FC, JSX } from 'react';

const Map: FC = (): JSX.Element => {
  return (
    <section className="googleMap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div id="map-canvas" className="google-map" data-lat="40.7841484" data-long="-73.9661407"
                 data-img="assets/img/contact/marker.png"/>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Map;