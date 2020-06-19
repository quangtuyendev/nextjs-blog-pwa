import React from 'react';
import { useRouter } from 'next/router';
import { FacebookShareButton } from 'react-share';
import { DOMAIN_URL } from '../../../constants';

function PostShareCount() {
  const { asPath } = useRouter();
  const randomShareCount = () => Math.floor(Math.random() * 200);
  const shareCount = randomShareCount();
  return (
    <>
      <div className="post-share-area">
        <h3>
          {shareCount}
          <span>SHARES</span>
        </h3>
        <div className="share">
          <a className="facebook" href="/">
            <FacebookShareButton url={DOMAIN_URL + asPath}>
              <span className="fa fa-facebook" />
              <span className="text">SHARE POST</span>
            </FacebookShareButton>
          </a>
        </div>
      </div>
    </>
  );
}

export default PostShareCount;
