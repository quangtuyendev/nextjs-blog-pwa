import { useRouter } from 'next/dist/client/router';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { hideModal } from '../../actions';
import Navbar from '../../components/Navbar';
import { ModalContext } from '../../contexts/ModalContext';
import ButtonToTop from '../ButtonToTop';
import Footer from '../Footer';

const ModalPortal = dynamic(() => import('../../commons/ModalPortal'), {
  ssr: false,
});

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  articles: PropTypes.array,
  articleTopics: PropTypes.array,
};

Layout.defaultProps = {
  articles: [],
  articleTopics: [],
};

function Layout({ children, articles, articleTopics }) {
  const router = useRouter();
  const { asPath } = router;

  const { modalDispatch } = useContext(ModalContext);

  useEffect(() => {
    modalDispatch(hideModal());
  }, [asPath]);

  return (
    <>
      <Navbar articles={articles} articleTopics={articleTopics} {...router} />
      <div className="site-content" style={{ transform: 'none' }}>
        <ModalPortal />
        {children}
      </div>
      <Footer articles={articles} articleTopics={articleTopics} />
      <ButtonToTop />
    </>
  );
}
export default Layout;
