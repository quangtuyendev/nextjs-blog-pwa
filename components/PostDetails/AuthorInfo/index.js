import React from 'react';

function AuthorInfo() {
  return (
    <>
      <div className="author-info mb-80">
        <div id="author-img">
          <figure className="at-img">
            <img src="/static/images/author/author.png" alt="img" />
          </figure>
        </div>
        <div id="author-details">
          <h3 className="author-name">Sara Armani</h3>
          <div className="authors-bio">
            <p>
              Moving after made his Fowl blessed blessed that subdue sixth.
              Light place fifth fifth Herb had. Of divided own had won’t saying
              very. Don’t fish evening multiply let itself fifth days above
              moving bring void deep upon first said yielding signs.
            </p>
          </div>
        </div>
      </div>
      <div className="add-banner bg-gray ptb-20 mb-30">
        <div className="add-content text-center">
          <a title="add" href="#">
            <img
              src="assets/images/advertisement/add728X90.png"
              alt="add"
              style={{ display: 'none !important' }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default AuthorInfo;
