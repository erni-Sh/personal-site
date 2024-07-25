import React, { FC, JSX } from 'react';
import EventsListItem from '@/app/events/components/events-list-item';

const BG_IMAGE = 'http://theme-brothers.com/AquraHTML/assets/img/events/home-events-1.jpg';

const EventsList: FC = (): JSX.Element => {
  return (
    <section style={{backgroundImage: `url(${BG_IMAGE})`}}
             className="background-properties padding">
      <div className="tableEvents">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="sectionTitle paddingBottom">
                <span className="heading-t3"/>
                <h2><a href="albums.html">Events</a></h2>
                <span className="heading-b3"/>
              </div>
              <table>
                <tbody>
                <tr className="tableEventsTitle">
                  <th className="date">Date</th>
                  <th className="venue">Venue</th>
                  <th className="location">Location</th>
                  <th className="tickets">Tickets</th>
                  <th/>
                </tr>
                {[...new Array(9)].map((_, i) => (
                  <EventsListItem key={i} />
                ))}
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

export default EventsList;