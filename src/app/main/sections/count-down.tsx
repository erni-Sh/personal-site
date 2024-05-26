import React, {FC, JSX} from 'react';

const CountDown: FC = (): JSX.Element => {
  return (
    <section className="padding hide-section countdownSection background-properties"
             style={{backgroundImage: 'url(assets/img/events/countdownHome.png)'}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="countdownTitle">
              <h4>Next Event</h4>
              <a href="singleEvent.html"><img src="assets/img/events/box.png" alt="Event"/></a>
            </div>
            <div className="sm-countdown sm_content_element sm-style2" id="sm_countdown-19" data-date="2016/10/23">
              <div className="displayCounter">
                <div className="column">
                  <div className="sm_countdown_inner">
                    <input className="element days" readOnly="readonly" data-min={0} data-max={365} data-width={200}
                           data-height={200} data-thickness="0.15" data-fgcolor="#fff" data-bgcolor="#8e8d8d"
                           data-angleoffset={180}/>
                    <span className="unit days-title">days</span>
                  </div>
                </div>
                <div className="column">
                  <div className="sm_countdown_inner">
                    <input className="element hour" readOnly="readonly" data-min={0} data-max={24} data-width={200}
                           data-height={200} data-thickness="0.15" data-fgcolor="#fff" data-bgcolor="#8e8d8d"
                           data-angleoffset={180}/>
                    <span className="unit hours-title">hrs</span>
                  </div>
                </div>
                <div className="column">
                  <div className="sm_countdown_inner">
                    <input className="element minute" readOnly="readonly" data-min={0} data-max={60} data-width={200}
                           data-height={200} data-thickness="0.15" data-fgcolor="#fff" data-bgcolor="#8e8d8d"
                           data-angleoffset={180}/>
                    <span className="unit mins-title">min</span>
                  </div>
                </div>
                <div className="column">
                  <div className="sm_countdown_inner">
                    <input className="element second" readOnly="readonly" data-min={0} data-max={60} data-width={200}
                           data-height={200} data-thickness="0.15" data-fgcolor="#fff" data-bgcolor="#8e8d8d"
                           data-angleoffset={180}/>
                    <span className="unit secs-title">sec</span>
                  </div>
                </div>
              </div>
            </div>
            {/* end sm-countdown */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;