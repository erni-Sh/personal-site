import React, {FC, JSX} from 'react';
import SectionComingSoon from '@/components/section-coming-soon';
import EventsTop from '@/app/events/sections/events-top';
import EventsList from '@/app/events/sections/events-list';

const Page: FC = (): JSX.Element => {
  return (<>
    <EventsTop />
    <EventsList />
  </>);
};

export default Page;