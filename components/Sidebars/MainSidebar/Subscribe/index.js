import React from 'react';

function Banner() {
  return (
    <>
      <aside className="widget tb-subscribe-widget">
        <div className="widget-content">
          <div className="subscribe-box">
            <div className="icon">
              <img src="/static/images/widget/newsletter/icon.png" alt="icon" />
            </div>
            <p>Subscribe to our mailing list to get the new updates!</p>
            <div className="subscribe-form">
              <form className="dv-form" id="mc-form">
                <div className="form-group">
                  <input
                    id="mc-email"
                    name="EMAIL"
                    placeholder="Email Address"
                    type="email"
                  />
                  <button
                    className="btn btn-primary"
                    name="Subscribe"
                    id="subscribe-btn"
                    type="submit"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Banner;
