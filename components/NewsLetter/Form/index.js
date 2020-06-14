import React from 'react';

function NewLetterForm() {
  return (
    <form className="dv-form" id="mc-form">
      <div className="form-group">
        <input
          id="mc-email"
          name="EMAIL"
          placeholder="Enter Your Email Address"
          type="email"
        />
        <button
          className="arrow btn"
          name="Subscribe"
          id="subscribe-btn"
          type="submit"
        >
          <span className="fa fa-send" />
        </button>
      </div>
    </form>
  );
}

export default NewLetterForm;
