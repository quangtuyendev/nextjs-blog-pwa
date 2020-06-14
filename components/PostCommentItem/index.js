import React, { useState } from 'react';
import PostCommentForm from '../Forms/PostCommentForm';

function PostCommentItem() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="thecomment">
        <div className="author-img">
          <img
            alt="Richard Roe"
            src="/static/images/author/1.jpg"
            className="avatar avatar-100 photo"
            height={100}
            width={100}
          />
        </div>
        <div className="comment-text">
          <span className="author">
            <span itemProp="name">
              <a>Richard Roe</a>
            </span>
          </span>
          <span className="date">
            <i className="fa fa-clock-o" />
            July 11, 2017 - 9:59 pm
          </span>
          <div className="comment-content">
            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere.
            </p>
          </div>
          <span onClick={() => setShowForm(!showForm)} className="reply">
            Reply
          </span>
          {showForm && <PostCommentForm />}
        </div>
      </div>
      <style jsx>
        {`
          .thecomment {
            padding-top: 28px;
            padding-bottom: 21px;
            display: table;
            width: 100%;
            border-bottom: 1px solid #dedede;
            margin-bottom: 16px;
          }

          .thecomment .author-img {
            width: 60px;
            float: left;
            margin-right: 20px;
            border-radius: 100%;
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
            overflow: hidden;
          }

          .thecomment .author-img img {
            margin: 0;
            max-width: 100%;
            vertical-align: top;
            height: auto;
          }

          .thecomment .comment-text {
            margin-left: 80px;
            position: relative;
          }

          .thecomment .comment-text span.author a {
            display: block;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #313131;
            margin-bottom: 11px;
            font-weight: 500;
          }

          .thecomment .comment-text span.date {
            font-size: 12px;
            color: #888;
            display: block;
          }

          .thecomment .comment-text span.date i {
            margin-right: 10px;
          }

          .thecomment .comment-content {
            margin-top: 15px;
            margin-bottom: 0;
          }

          .thecomment .comment-content p {
            font-size: 14px;
            line-height: 26px;
            line-height: 1.8;
          }

          .thecomment .comment-text .reply {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
          }

          .post-comments reply {
            font-size: 11px;
            color: #888;
            margin-left: 18px;
            font-weight: 500;
            -o-transition: 0.3s;
            -moz-transition: 0.3s;
            -webkit-transition: 0.3s;
            transition: 0.3s;
            text-transform: uppercase;
            line-height: 1;
            display: inline-block;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}

export default PostCommentItem;
