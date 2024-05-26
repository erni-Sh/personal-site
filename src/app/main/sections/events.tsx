import React, {FC, JSX} from 'react';

const Events: FC = (): JSX.Element => {
  return (
    <section style={{backgroundImage: 'url(assets/img/events/tableEventsHome.png)'}}
             className="background-properties hide-section paddingHomeEvents">
      <div className="tableEvents">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sectionTitle paddingBottom">
                <span className="heading-t3"/>
                <h2><a href="events.html">Events</a></h2>
                <span className="heading-b3"/>
              </div>
              {/* end sectionTtile */}
              <table>
                <tbody>
                <tr className="tableEventsTitle">
                  <th className="date">Date</th>
                  <th className="venue">Venue</th>
                  <th className="location">Location</th>
                  <th className="tickets">Tickets</th>
                  <th/>
                </tr>
                <tr>
                  <td className="aqura-date"><a href="#"><i className="fa fa-plus"/></a><a href="singleEvent.html">Mar
                    06</a></td>
                  <td className="aqura-location"><a href="singleEvent.html">Central Park</a></td>
                  <td className="aqura-city"><a href="singleEvent.html">Cluj Napoca, Bontida Romania</a></td>
                  <td className="aqura-tickets"><a href="singleEvent.html">Tickets</a></td>
                  <td className="aqura-vip"><a href="singleEvent.html">RSVP</a></td>
                </tr>
                <tr>
                  <td className="aqura-date"><a href="#"><i className="fa fa-plus"/></a><a href="singleEvent.html">Mar
                    06</a></td>
                  <td className="aqura-location"><a href="singleEvent.html">Central Park</a></td>
                  <td className="aqura-city"><a href="singleEvent.html">Cluj Napoca, Bontida Romania</a></td>
                  <td className="aqura-tickets"><a href="singleEvent.html">Tickets</a></td>
                  <td className="aqura-vip"><a href="singleEvent.html">RSVP</a></td>
                </tr>
                <tr>
                  <td className="aqura-date"><a href="#"><i className="fa fa-plus"/></a><a href="singleEvent.html">Mar
                    06</a></td>
                  <td className="aqura-location"><a href="singleEvent.html">Central Park</a></td>
                  <td className="aqura-city"><a href="singleEvent.html">Cluj Napoca, Bontida Romania</a></td>
                  <td className="aqura-tickets"><a href="singleEvent.html">Tickets</a></td>
                  <td className="aqura-vip"><a href="singleEvent.html">RSVP</a></td>
                </tr>
                <tr>
                  <td className="aqura-date"><a href="#"><i className="fa fa-plus"/></a><a href="singleEvent.html">Mar
                    06</a></td>
                  <td className="aqura-location"><a href="singleEvent.html">Central Park</a></td>
                  <td className="aqura-city"><a href="singleEvent.html">Cluj Napoca, Bontida Romania</a></td>
                  <td className="aqura-tickets"><a href="singleEvent.html">Tickets</a></td>
                  <td className="aqura-vip"><a href="singleEvent.html">RSVP</a></td>
                </tr>
                <tr>
                  <td className="aqura-date"><a href="#"><i className="fa fa-plus"/></a><a href="singleEvent.html">Mar
                    06</a></td>
                  <td className="aqura-location"><a href="singleEvent.html">Central Park</a></td>
                  <td className="aqura-city"><a href="singleEvent.html">Cluj Napoca, Bontida Romania</a></td>
                  <td className="aqura-tickets"><a href="singleEvent.html">Tickets</a></td>
                  <td className="aqura-vip"><a href="singleEvent.html">RSVP</a></td>
                </tr>
                </tbody>
              </table>
            </div>
            {/* end col-sm-12 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end tableEvents */}
    </section>
  );
};

export default Events;