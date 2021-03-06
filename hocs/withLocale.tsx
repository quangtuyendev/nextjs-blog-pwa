import { NextPage } from 'next'
import { getDisplayName } from 'next/dist/next-server/lib/utils'
import React from 'react'
import { LocaleProvider } from '../contexts/LocaleContext'
import { isLocale, Locale } from '../translations/types'
interface LangProps {
    locale?: Locale
}
export default (WrappedPage: NextPage<any>) => {
    const WithLocale: NextPage<any, LangProps> = ({ locale, ...pageProps }) => {
        return (
            <LocaleProvider lang={locale}>
                <WrappedPage {...pageProps} />
            </LocaleProvider>
        );
    };

    WithLocale.getInitialProps = async ctx => {
        let pageProps = {}
        if (WrappedPage.getInitialProps) {
            pageProps = await WrappedPage.getInitialProps(ctx)
        }
        if (typeof ctx.query.lang !== 'string' || !isLocale(ctx.query.lang)) {
            return { ...pageProps, locale: undefined }
        }
        return { ...pageProps, locale: ctx.query.lang }
    }
    WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`
    return WithLocale;
};
