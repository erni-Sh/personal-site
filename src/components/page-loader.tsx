import React, {FC, JSX} from 'react';

const PageLoader: FC = (): JSX.Element => {
  return (
    <div className="page-loader">
      <div className="vertical-align align-center">
        <img src="/assets/loader/loader.gif" alt="" className="loader-img"/>
      </div>
    </div>
  );
};

export default PageLoader;