import React, {FC, JSX} from 'react';

const SectionComingSoon: FC = (): JSX.Element => {
  return (
    <section
      style={{
        height: '100vh',
        background: 'burlywood',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >Coming soon</section>
  );
};

export default SectionComingSoon;