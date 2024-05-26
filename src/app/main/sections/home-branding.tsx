import React, {FC, JSX} from 'react';

const HomeBranding: FC = (): JSX.Element => {
  return (
    <section className="padding hide-section background-properties"
             style={{backgroundImage: 'url(assets/img/twitter/homeTwitter.png)'}}>
      <div className="twitter">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="twitterLogo">
                <a href="#"><img src="assets/img/content/twitterLogo.png" alt="twitterLogo"/></a>
                <a href="#" className="linkTwitter">@ThemeBrothers</a>
              </div>
              <p>AQURA - Creative Theme for dj, bands and musicians #HTML#Theme now available on #ThemeForest - <a
                href="https://twitter.com/?request_context=signup">https://twitter.com/?request_context=signup</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBranding;