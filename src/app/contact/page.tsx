import React, { FC, JSX } from 'react';
import ContactsTop from '@/app/contact/sections/contacts-top';
import GetInTouch from '@/app/contact/sections/get-in-touch';
import Map from '@/app/contact/sections/map';

const Page: FC = (): JSX.Element => {
  return (<>
    <ContactsTop />
    <GetInTouch />
    <Map />
  </>);
};

export default Page;
