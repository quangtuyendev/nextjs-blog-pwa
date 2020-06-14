import _ from 'lodash';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { LocaleContext } from '../../contexts/LocaleContext';
import { languageNames, locales } from '../../translations/config';

function LocaleSwitcher() {
  const router = useRouter();
  const { locale } = useContext(LocaleContext);
  const handleChange = ({ target: { value } }) => {
    console.log(value);
    const regex = new RegExp(`^/(${locales.join('|')})`);
    router.push(router.pathname, router.asPath.replace(regex, `/${value}`));
  };

  const renderLangs = () =>
    _.map(locales, (locale) => (
      <option key={locale} value={locale}>
        {languageNames[locale]}
      </option>
    ));

  return (
    <select value={locale} onChange={handleChange}>
      {renderLangs()}
    </select>
  );
}

export default LocaleSwitcher;
