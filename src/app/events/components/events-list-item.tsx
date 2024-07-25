import React, { FC, JSX } from 'react';

const EventsListItem: FC = (): JSX.Element => {
  return (
    <tr>
      <td className="aqura-date"><a href="singleEvent.html"><i className="fa fa-plus"/></a><a
        href="singleEvent.html">Mar 06</a></td>
      <td className="aqura-location"><a href="singleEvent.html">Central Park</a></td>
      <td className="aqura-city"><a href="singleEvent.html">Cluj Napoca, Bontida Romania</a></td>
      <td className="aqura-tickets"><a href="singleEvent.html">Tickets</a></td>
      <td className="aqura-vip"><a href="singleEvent.html">RSVP</a></td>
    </tr>
  );
};

export default EventsListItem;