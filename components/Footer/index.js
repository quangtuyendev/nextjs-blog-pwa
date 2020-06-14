import _ from 'lodash';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { SOCIAL_ICONS_FOOTER } from '../../constants';
import { LocaleContext } from '../../contexts/LocaleContext';
import { renderPosts } from '../../utils';
import CategoryList from '../CategoryList';
import FooterBottom from '../FooterBottom';
import PostItem from '../Sidebars/RecentPosts/PostItem';

Footer.propTypes = {
  articles: PropTypes.array,
  articleTopics: PropTypes.array,
};

Footer.defaultProps = {
  articles: [],
  articleTopics: [],
};

function Footer({ articles, articleTopics }) {
  const { locale } = useContext(LocaleContext);

  const renderSocials = () =>
    _.map(SOCIAL_ICONS_FOOTER, ({ path, className, iconType }) => (
      <li key={className}>
        <a className={className} href={path}>
          <i className={iconType} />
        </a>
      </li>
    ));

  return (
    <>
      <footer className="site-footer footer-default-style bg-black pt-80">
        <div className="footer-widget-area pb-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <aside className="widget bt-about-us-widget">
                  <div className="widget-content">
                    <div className="about-logo">
                      <Link href="/[lang]" as={`/${locale}`}>
                        <a>
                          <img
                            src="/static/images/logo/footer-logo.png"
                            alt="Logo"
                          />
                        </a>
                      </Link>
                    </div>
                    <p>
                      Sitting on a working-class comme dows of an easy
                      above-ground rail line group called Make the Road New
                      York's busy street
                    </p>
                    <ul className="social-share">{renderSocials()}</ul>
                  </div>
                </aside>
              </div>
              <div className="col-lg-4">
                <aside className="widget latest-posts-widget">
                  <div className="widget-content">
                    {renderPosts(articles.slice(0, 2), PostItem)}
                  </div>
                </aside>
              </div>
              <div className="col-lg-4">
                <div className="widget widget-categories">
                  <CategoryList articleTopics={articleTopics} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </footer>
    </>
  );
}

export default Footer;
