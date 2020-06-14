import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { showModal } from '../../actions';
import { LocaleContext } from '../../contexts/LocaleContext';
import { ModalContext } from '../../contexts/ModalContext';
import { setUi } from '../../utils';
import useClickOutSide from '../../utils/useClickOutSide';
import useEscKeyDown from '../../utils/useEscKeyDown';
import ActionBar from '../ActionBar';
import SearchForm from '../Forms/SearchForm';
import PostRecent from '../Sidebars/RecentPosts';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

Navbar.propTypes = {
  pathname: PropTypes.string,
  search: PropTypes.string,
  articles: PropTypes.array,
  articleTopics: PropTypes.array,
};

Navbar.defaultProps = {
  pathname: '',
  search: '',
  articles: [],
  articleTopics: [],
};

function Navbar({ articles, articleTopics, pathname, search }) {
  const { locale } = useContext(LocaleContext);
  const [showMenu, setShowMenu] = useState(false);
  const formRef = useRef();
  const btnSearchRef = useRef();
  const { modalDispatch } = useContext(ModalContext);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const { className, logo, isShowComponent } = setUi(pathname);

  useEscKeyDown(() => {
    // handle press enter
    setIsOpenForm(false);
  });

  useClickOutSide(formRef, btnSearchRef, () => {
    setIsOpenForm(false);
  });

  useEffect(() => {
    setIsOpenForm(false);
  }, [search]);

  return (
    <header className={`site-header ${className}`} id="header">
      {isShowComponent && <ActionBar />}
      <div className="site-navigation">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="navbar navbar-expand-lg navigation-area">
                <div className="site-logo-block">
                  <Link href="/[lang]" as={`/${locale}`}>
                    <a className="navbar-brand site-logo">
                      <img src={`/static/images/logo/${logo}.png`} alt="logo" />
                    </a>
                  </Link>
                </div>
                <div className="mainmenu-area">
                  <nav className="menu" style={{ display: 'block' }}>
                    <Menu articleTopics={articleTopics} />
                  </nav>
                  <div className="header-navigation-right">
                    <div ref={btnSearchRef} className="search-wrap">
                      <div
                        onClick={() => setIsOpenForm(!isOpenForm)}
                        className="search-btn"
                      >
                        <img src="/static/images/icon/search.png" alt="icon" />
                        <span>Tìm kiếm</span>
                      </div>
                      {isOpenForm && <SearchForm formRef={formRef} />}
                    </div>
                    <ul className="nav-btns">
                      <li>
                        <span
                          onClick={() =>
                            modalDispatch(
                              showModal(<PostRecent articles={articles} />),
                            )
                          }
                        >
                          <i className="fa fa-bars" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu mean-container">
        <Link href="/[lang]" as={`/${locale}`}>
          <a className="mobile-logo">
            <img src="/static/images/logo/logo-black.png" alt="logo" />
          </a>
        </Link>
        <div className="mean-bar">
          {showMenu && (
            <nav className="mean-nav">
              <MenuMobile
                articleTopics={articleTopics}
                setShowMenu={setShowMenu}
              />
            </nav>
          )}
        </div>
        <div className="search-wrap">
          <div className="search-btn">
            <img src="/static/images/icon/search.png" alt="icon" />
            <span>Search</span>
          </div>
          <div className="search-form">
            <form action="#">
              <input type="search" placeholder="Search" />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
        </div>
        <a
          href="#nav"
          className="meanmenu-reveal meanclose"
          style={{
            right: '0px',
            left: 'auto',
            textAlign: 'center',
            textIndent: '0px',
            fontSize: '18px',
          }}
        >
          <i
            onClick={() => setShowMenu(!showMenu)}
            className={`${showMenu ? 'flaticon-close' : 'flaticon-menu'}`}
          />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
