import { useEffect } from 'react';
import { getInitialLocale } from '../translations/getInitialLocale';

function Index() {
  useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  });
  return null;
}
export default Index;
