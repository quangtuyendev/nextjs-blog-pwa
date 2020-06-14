import React from 'react';
import PostCommentForm from '../../Forms/PostCommentForm';

function FormWrapper() {
  return (
    <>
      <div className="comments-area" id="comments">
        <div className="comment-respond" id="respond">
          <h3 className="comment-reply-title headline">
            <span>Leave a Reply</span>
          </h3>
          <PostCommentForm />
        </div>
      </div>
      <style jsx>
        {`
          .comment-reply-title {
            margin-top: 50px;
          }

          .comment-respond #contact_form p {
            margin-bottom: 30px;
          }

          .comment-respond #contact_form .form-submit {
            margin-bottom: 0px;
          }

          .comment-respond #contact_form .form-submit #submit {
            height: 35px;
            background-color: #d82e2a;
            color: #fff;
            padding: 0 20px;
            font-size: 14px;
            font-weight: 500;
            text-transform: capitalize;
            border-radius: 40px;
          }

          .comment-respond #contact_form .form-submit #submit:hover {
            background-color: #000;
          }

          @media only screen and (max-width: 575px) {
            .comment-respond #contact_form p {
              margin-bottom: 20px;
            }
            .form-controllar {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  );
}

export default FormWrapper;
