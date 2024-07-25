import React, { FC, JSX } from 'react';

const BG_IMAGE = 'http://theme-brothers.com/AquraHTML/assets/img/contact/contact1.jpg';

const GetInTouch: FC = (): JSX.Element => {
  return (
    <section className="contactSingle padding background-properties" id="content"
             style={{backgroundImage: `url(${BG_IMAGE})`}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="contactTop">
              <h2>Contact Information</h2>
              <h4>198 West 21th Street, Suite 721, New York, NY 10010.</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer odio. <br/>
                Quisque volutpat mattis eros. Nullam turpis.
              </p>
              <div className="contactInfo">
                <ul>
                  <li>Email: <a href="#">info@themebrothers.com</a></li>
                  <li>Phone: <a href="#">+4070 547 235 125</a></li>
                  <li>Fax: <a href="#">+4070 125 949 678</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* end col-sm-4 */}
          <div className="col-sm-7 col-sm-offset-1">
            <div className="singleBlogForm">
              <h2>Get in Touch</h2>
              <form action="#" method="post" className="comment-form">
                <input id="author" name="author" type="text" defaultValue={''} aria-required="true" required
                       placeholder="First Name *"/>
                <input id="lastName" name="email" type="text" defaultValue={''} aria-required="true" required
                       placeholder="Last Name"/>
                <input id="url" name="url" type="text" defaultValue={''} placeholder="Subject* "/>
                <input id="address" name="url" type="text" defaultValue={''} placeholder="Email Address* "/>
                <textarea name="comment" placeholder="Message..." rows={6} required defaultValue={""}/>
                <p className="form-submit">
                  <input name="submit" type="submit" id="submit" defaultValue="Send Email"/>
                </p>
              </form>
            </div>
            {/* end contactForm */}
          </div>
          {/* end col-sm-7 col-sm-offset-1 */}
        </div>
      </div>
      {/* end container */}
    </section>

  );
};

export default GetInTouch;